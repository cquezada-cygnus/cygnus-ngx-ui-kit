import { Component, input, output, inject, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { VideoGrabado } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-video-recorder',
  imports: [
    NgxCygnusIconsComponent,
],
  templateUrl: './cygnus-video-recorder.component.html',
})
export class CygnusVideoRecorderComponent implements OnDestroy {

  // Inyección de dependencias (Angular 19 style)
  private sanitizer = inject(DomSanitizer);
  private cd = inject(ChangeDetectorRef);

  // duración máxima en segundos (por defecto 60 = 1 minuto)
  duracionMaxima = input<number>(60);

  // Emite el video cuando termina la grabación
  videoListo = output<VideoGrabado>();

  // Estado
  grabando = false;
  procesando = false;
  tiempo = '00:00';
  mostrarGrabacion = false;
  detenidoAutomaticamente = false;

  // Variables para la revisión del video
  videoParaRevisar: VideoGrabado | null = null;
  urlVideoSegura: SafeUrl | null = null;

  // Internos MediaRecorder
  private mediaRecorder: any;
  private pedazos: any[] = [];
  private segundos = 0;
  private intervalo: any;
  private streamActual: MediaStream | null = null; // Guardamos referencia para limpiar bien


  async iniciar() {
    this.descartarGrabacion(); // Limpieza preventiva
    this.mostrarGrabacion = true;
    // Resetear flag de detención automática
    this.detenidoAutomaticamente = false;
    try {
      // 1. Pedir acceso a cámara y micrófono
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      this.streamActual = stream;

      // 2. Mostrar video en pantalla
      // Esperar un tick para que el elemento videoLive exista en el DOM
      setTimeout(() => {
        const videoElement = document.querySelector('video') as HTMLVideoElement;
        if (videoElement) {
          videoElement.srcObject = stream;
          videoElement.muted = true; // Muted mientras graba para evitar feedback
          videoElement.volume = 0;
        }
      }, 0);

      // 3. Crear grabador
      this.mediaRecorder = new MediaRecorder(stream);

      // 4. Guardar lo que se va grabando
      this.mediaRecorder.ondataavailable = (evento: any) => {
        if (evento.data && evento.data.size > 0) {
          this.pedazos.push(evento.data);
        }
      };

      // 5. Al parar, solo procesamos para revisión, NO emitimos todavía
      this.mediaRecorder.onstop = async () => {
        await this.prepararVideoParaRevision();
      };

      // 6. Iniciar grabación
      this.mediaRecorder.start();
      this.grabando = true;

      // 7. Iniciar contador de tiempo
      this.iniciarContador();

    } catch (error) {
      alert('No se pudo acceder a la cámara o micrófono');
      console.error(error);
      this.mostrarGrabacion = false;
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
    this.detenerRecursosHardware();

    // this.mostrarGrabacion = false;

    // // Detener contador
    // clearInterval(this.intervalo);
    // this.segundos = 0;
    // this.tiempo = '00:00';

    // // Apagar cámara
    // const video = document.querySelector('video') as HTMLVideoElement;
    // const stream = video.srcObject as MediaStream;
    // stream.getTracks().forEach(track => track.stop());
    // video.srcObject = null;
  }

  // Separa la lógica de apagar la cámara para reutilizarla
  private detenerRecursosHardware() {
    clearInterval(this.intervalo);

    if (this.streamActual) {
      this.streamActual.getTracks().forEach(track => track.stop());
      this.streamActual = null;
    }

    // Limpiar src del elemento video si existe
    const videoElement = document.querySelector('video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.srcObject = null;
    }
  }

  // ==========================================
  // LÓGICA DE REVISIÓN Y EMISIÓN
  // ==========================================

  private async prepararVideoParaRevision() {
    try {
      this.procesando = true;

      const blob = new Blob(this.pedazos, { type: 'video/webm' });
      const base64 = await this.blobABase64(blob);
      const duracionFinal = this.segundos;
      const tiempoFinal = Date.now();

      // 1. Guardamos el objeto listo para emitir
      this.videoParaRevisar = {
        blob: blob,
        base64: base64,
        duracion: duracionFinal,
        timestamp: tiempoFinal,
        tipo: 'video/webm'
      };

      // 2. Creamos URL segura para previsualizar sin emitir aún
      const objectUrl = URL.createObjectURL(blob);
      this.urlVideoSegura = this.sanitizer.bypassSecurityTrustUrl(objectUrl);

      // Limpiamos los pedazos raw, pero mantenemos el objeto final
      this.pedazos = [];
      this.procesando = false;

      // Ocultamos la vista "live" (se maneja en el HTML con @if)
      this.mostrarGrabacion = false;

      // FORZAR LA DETECCIÓN DE CAMBIOS
      // Esto le dice a Angular: "Oye, cambié variables, actualiza el HTML ahora mismo"
      this.cd.detectChanges();

    } catch (error) {
      console.error('Error procesando video', error);
      this.procesando = false;
      this.cd.detectChanges();
    }
  }

  confirmarEnvio() {
    if (this.videoParaRevisar) {
      this.videoListo.emit(this.videoParaRevisar);
      console.log('📤 Video confirmado y emitido');

      // Opcional: Limpiar después de enviar o dejarlo visible
      // this.descartarGrabacion();
    }
  }

  descartarGrabacion() {
    this.videoParaRevisar = null;
    this.urlVideoSegura = null;
    this.pedazos = [];
    this.segundos = 0;
    this.tiempo = '00:00';
    this.detenidoAutomaticamente = false;
    this.mostrarGrabacion = false;
    this.cd.detectChanges(); // Actualizar vista al descartar
  }

  // ==========================================
  // UTILIDADES
  // ==========================================

  private iniciarContador() {
    this.segundos = 0; // Resetear explícitamente al iniciar
    this.tiempo = '00:00';
    this.intervalo = setInterval(() => {
      this.segundos++;
      this.tiempo = this.formatearTiempo(this.segundos);
      // Usamos markForCheck si usas OnPush, o dejamos que angular lo detecte
      this.cd.markForCheck();

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

  private blobABase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  // Buena práctica: Limpiar si el componente se destruye
  ngOnDestroy() {
    this.detenerRecursosHardware();
  }

}
