import { Component, input, output, signal } from '@angular/core';

import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

@Component({
  selector: 'cygnus-dropzone-input',
  imports: [
    CygnusButtonComponent,
    NgxCygnusIconsComponent,
  ],
  templateUrl: './cygnus-dropzone-input.component.html',
})
export class CygnusDropzoneInputComponent {

  titleText = input<string>('');
  firstText = input<string>('');
  secondText = input<string>('');
  thirdText = input<string>('');
  btnText = input<string>('');
  onlyBtn = input<boolean>(false);
  horizontalText = input<boolean>(false);
  iconRight = input<boolean>(false);

  btnColor = input<string>('btn-indigo');
  gradientButton = input<boolean>(false);

  base64: string | null = null;
  fileName = signal<string>('');
  fileSize: number = 0;
  fileType: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  isDragging: boolean = false; // Para feedback visual

  inputErrorMsge = input<string>('Tipo de archivo no permitido. Solo se aceptan: PDF, JPG, PNG, DOC.');

  outputIniciaLectura = output<boolean>();
  outputFileName = output<string>();
  outputBase64 = output<string>();
  outputErrorMsge = output<string>();
  outputTypeError = output<string>(); // TYPE, SIZE, READER

  // Tipos de archivo permitidos
  allowedTypes = input({
    'application/pdf': '.pdf',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/png': '.png',
    'image/pjpeg': '.jpg',  // Formato JPEG progresivo
    'image/jfif': '.jpg',   // Otro formato JPEG común
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'application/docx': '.docx'
  });

  // Lista de extensiones permitidas
  allowedExtensions = input<string[]>(['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx']);
  inputAccept = input<string>('application/pdf,.pdf,image/jpeg,.jpg,image/png,.png,.doc,.docx');

  // Límite en MB (por defecto 15)
  maxFileSizeUpload = input<number>(15);

  // Mensaje personalizable para error de tamaño
  sizeErrorMsge = input<string>('El archivo excede el tamaño máximo permitido.');

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const files = event.dataTransfer?.files;

    if (files && files.length > 0) {
      this.processFile(files[0]);
      // Limpiar el input file para permitir subir el mismo archivo después
      const fileInput = document.getElementById('dropzone-file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } else {
      console.log('No files found in drop event');
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.processFile(input.files[0]);
    }
  }

  processFile(file: File): void {
    this.outputIniciaLectura.emit(true);

    // 1. Validar tipo de archivo
    if (!this.isValidFileType(file)) {
      this.errorMessage = this.inputErrorMsge();
      this.outputErrorMsge.emit(this.errorMessage);
      this.outputTypeError.emit('TYPE');
      this.resetFile();
      return;
    }

    // 2. Validar tamaño de archivo (Nueva validación)
    // Convertimos MB a Bytes: MB * 1024 * 1024
    const maxBytes = this.maxFileSizeUpload() * 1024 * 1024;

    if (file.size > maxBytes) {
      this.errorMessage = `${this.sizeErrorMsge()} (Máx: ${this.maxFileSizeUpload()}MB)`;
      this.outputErrorMsge.emit(this.errorMessage);
      this.outputTypeError.emit('SIZE');
      this.resetFile();
      return;
    }

    // 3. Si pasa las validaciones, procedemos

    this.isLoading = true;
    this.errorMessage = '';
    this.fileName.set(file.name);
    this.fileSize = file.size;
    this.fileType = file.type;

    // Convertir a base64
    this.convertToBase64(file);
  }

  isValidFileType(file: File): boolean {

    // Obtener la extensión del archivo
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();

    // Validar primero por extensión (más confiable)
    if (this.allowedExtensions().includes(extension)) {
      return true;
    }

    // Validación secundaria por MIME type (como fallback)
    if (this.allowedTypes.hasOwnProperty(file.type)) {
      return true;
    }

    // Si ninguna validación pasa, rechazar el archivo
    console.log('Archivo rechazado:', {
      nombre: file.name,
      extension: extension,
      mimeType: file.type
    });

    return false;
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.base64 = reader.result as string; // El resultado incluye el prefijo, ejemplo "data:application/pdf;base64,"
      this.isLoading = false;
      // Enviar convertido
      this.outputFileName.emit(this.fileName());
      this.outputBase64.emit(this.base64);
    }

    reader.onerror = () => {
      this.errorMessage = 'Error al leer el archivo';
      this.outputErrorMsge.emit(this.errorMessage);
      this.outputTypeError.emit('READER');
      this.isLoading = false;
      this.resetFile();
    };

    reader.readAsDataURL(file);
  }


  resetFile(): void {
    this.base64 = null;
    this.fileName.set('');
    this.fileSize = 0;
  }

}
