import { Component, input, output } from '@angular/core';

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

  btnColor = input<string>('btn-indigo');
  gradientButton = input<boolean>(false);

  base64: string | null = null;
  fileName: string = '';
  fileSize: number = 0;
  fileType: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  outputIniciaLectura = output<boolean>();
  outputBase64 = output<string>();
  outputErrorMsge = output<string>();

  // Tipos de archivo permitidos
  allowedTypes = {
    'application/pdf': '.pdf',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/png': '.png',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'application/msword': '.doc'
  };

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.outputIniciaLectura.emit(true);
      const file = input.files[0];

      // Validar tipo de archivo
      if (!this.isValidFileType(file)) {
        this.errorMessage = 'Tipo de archivo no permitido. Solo se aceptan: PDF, JPG, PNG, DOC, DOCX';
        this.outputErrorMsge.emit(this.errorMessage);
        this.resetFile();
        return;
      }

      this.isLoading = true;
      this.errorMessage = '';
      this.fileName = file.name;
      this.fileSize = file.size;
      this.fileType = file.type;

      // Convertir a base64
      this.convertToBase64(file);

    }
  }

  isValidFileType(file: File): boolean {
    // Validar por MIME type
    if (this.allowedTypes.hasOwnProperty(file.type)) {
      return true;
    }

    // Validación adicional por extensión (como fallback)
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    const allowedExtensions = Object.values(this.allowedTypes);

    return allowedExtensions.includes(extension);
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.base64 = reader.result as string; // El resultado incluye el prefijo, ejemplo "data:application/pdf;base64,"
      this.isLoading = false;

      // Enviar convertido
      this.outputBase64.emit(this.base64);
    }

    reader.onerror = () => {
      this.errorMessage = 'Error al leer el archivo';
      this.outputErrorMsge.emit(this.errorMessage);
      this.isLoading = false;
      this.resetFile();
    };

    reader.readAsDataURL(file);

  }


  resetFile(): void {
    this.base64 = null;
    this.fileName = '';
    this.fileSize = 0;
  }

}
