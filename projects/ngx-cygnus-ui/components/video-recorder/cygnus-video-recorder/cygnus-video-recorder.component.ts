import { Component, input, output } from '@angular/core';

import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

// Interfaz para los datos del video
export interface VideoGrabado {
  blob: Blob;           // El archivo de video completo
  base64: string;       // El video en formato base64
  duracion: number;     // Duración en segundos
  timestamp: number;    // Momento de la grabación
  tipo: string;         // Tipo de archivo (video/webm)
}

@Component({
  selector: 'cygnus-video-recorder',
  imports: [
    NgxCygnusIconsComponent,
],
  templateUrl: './cygnus-video-recorder.component.html',
})
export class CygnusVideoRecorderComponent {
  // duración máxima en segundos (por defecto 60 = 1 minuto)
  duracionMaxima = input<number>(60);

  // Emite el video cuando termina la grabación
  videoListo = output<VideoGrabado>();


  grabando = false;
  procesando = false;
  tiempo = '00:00';
  mostrarGrabacion = false;
  detenidoAutomaticamente = false;

  private mediaRecorder: any;
  private pedazos: any[] = [];
  private segundos = 0;
  private intervalo: any;


  async iniciar() {
    this.mostrarGrabacion = true;
    // Resetear flag de detención automática
      this.detenidoAutomaticamente = false;
    try {
      // 1. Pedir acceso a cámara y micrófono
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      // 2. Mostrar video en pantalla
      const video = document.querySelector('video') as HTMLVideoElement;
      video.srcObject = stream;
      video.muted = true; // CRÍTICO: Mantener siempre muted para evitar acople del audio con los parlantes
      video.volume = 0;   // Extra seguridad: volumen a 0

      // 3. Crear grabador
      this.mediaRecorder = new MediaRecorder(stream);

      // 4. Guardar lo que se va grabando
      this.mediaRecorder.ondataavailable = (evento: any) => {
        this.pedazos.push(evento.data);
      };

      // 5. Cuando termine, CONVERTIR Y EMITIR (no descargar)
      this.mediaRecorder.onstop = async () => {
        await this.procesarYEmitirVideo();
      };

      // 6. Iniciar grabación
      this.mediaRecorder.start();
      this.grabando = true;

      // 7. Iniciar contador de tiempo
      this.iniciarContador();

    } catch (error) {
      alert('No se pudo acceder a la cámara');
      console.error(error);
    }
  }

  detener(automatico = false) {
    // Marcar si fue detenido automáticamente
    if (automatico) {
      this.detenidoAutomaticamente = true;
    }

    // Detener grabación
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    this.grabando = false;
    this.mostrarGrabacion = false;

    // Detener contador
    clearInterval(this.intervalo);
    this.segundos = 0;
    this.tiempo = '00:00';

    // Apagar cámara
    const video = document.querySelector('video') as HTMLVideoElement;
    const stream = video.srcObject as MediaStream;
    stream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  }

  private iniciarContador() {
    this.intervalo = setInterval(() => {
      this.segundos++;
      this.tiempo = this.formatearTiempo(this.segundos);

      // AUTO-STOP: Detener automáticamente al alcanzar el límite
      if (this.segundos >= this.duracionMaxima()) {
        this.detener(true);
      }
    }, 1000);
  }

  formatearTiempo(totalSegundos: number): string {
    const mins = Math.floor(totalSegundos / 60);
    const secs = totalSegundos % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // 🎬 AQUÍ ES DONDE SE PROCESA EL VIDEO
  private async procesarYEmitirVideo() {
    try {
      this.procesando = true;
      console.log('🔄 Procesando video...');

      // 1. Crear el Blob con todos los pedazos
      const blob = new Blob(this.pedazos, { type: 'video/webm' });
      console.log('📦 Blob creado:', blob.size, 'bytes');

      // 2. Convertir Blob a Base64
      const base64 = await this.blobABase64(blob);
      console.log('✅ Conversión a base64 completada');

      // 3. Calcular duración real
      const duracion = this.segundos;
      const tiempoFinal = Date.now();

      // 4. Crear objeto con toda la información
      const videoData: VideoGrabado = {
        blob: blob,
        base64: base64,
        duracion: duracion,
        timestamp: tiempoFinal,
        tipo: 'video/webm'
      };

      // 5. 📤 EMITIR el video mediante el output
      this.videoListo.emit(videoData);
      console.log('📤 Video emitido al componente padre');

      // 6. Limpiar
      this.pedazos = [];
      this.segundos = 0;
      this.tiempo = '00:00';
      this.procesando = false;

    } catch (error) {
      console.error('❌ Error al procesar video:', error);
      this.procesando = false;
      alert('Error al procesar el video');
    }
  }

  // 🔄 Convertir Blob a Base64
  private blobABase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        // El resultado incluye el prefijo "data:video/webm;base64,"
        const base64 = reader.result as string;
        resolve(base64);
      };

      reader.onerror = () => {
        reject(new Error('Error al convertir blob a base64'));
      };

      // Iniciar la lectura del blob
      reader.readAsDataURL(blob);
    });
  }

}
