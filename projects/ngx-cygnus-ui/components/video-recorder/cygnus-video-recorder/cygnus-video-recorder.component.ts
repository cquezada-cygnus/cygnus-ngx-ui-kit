import { Component, input } from '@angular/core';

import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';

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

  grabando = false;
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

      // 3. Crear grabador
      this.mediaRecorder = new MediaRecorder(stream);

      // 4. Guardar lo que se va grabando
      this.mediaRecorder.ondataavailable = (evento: any) => {
        this.pedazos.push(evento.data);
      };

      // 5. Cuando termine, descargar el video
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.pedazos, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);

        // Descargar automáticamente
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mi-video.webm';
        a.click();

        this.pedazos = [];
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

}
