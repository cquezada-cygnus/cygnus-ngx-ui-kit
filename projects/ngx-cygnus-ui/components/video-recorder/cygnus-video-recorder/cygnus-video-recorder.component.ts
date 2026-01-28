import { Component, input, output, inject, OnDestroy, ChangeDetectorRef, viewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { VideoGrabado } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'cygnus-video-recorder',
  imports: [NgxCygnusIconsComponent],
  templateUrl: './cygnus-video-recorder.component.html',
})
export class CygnusVideoRecorderComponent implements OnDestroy {

  private sanitizer = inject(DomSanitizer);
  private cd = inject(ChangeDetectorRef);

  // REFERENCIA AL VIDEO EN VIVO (Angular 19 Signal ViewChild)
  videoLiveElement = viewChild<ElementRef<HTMLVideoElement>>('videoLive');

  duracionMaxima = input<number>(60);
  videoListo = output<VideoGrabado>();

  grabando = false;
  procesando = false;
  mostrarGrabacion = false;
  detenidoAutomaticamente = false;

  tiempo = '00:00';
  videoParaRevisar: VideoGrabado | null = null;
  urlVideoSegura: SafeUrl | null = null;

  private mediaRecorder: any;
  private pedazos: any[] = [];
  private segundos = 0;
  private intervalo: any;
  private streamActual: MediaStream | null = null;

  async iniciar() {
    // 1. Limpieza preventiva
    this.resetearEstadoCompleto();

    // 2. Activamos la bandera para mostrar el HTML del video
    this.mostrarGrabacion = true;

    // 3. ¡CRÍTICO! Forzamos a Angular a pintar el <video> en el DOM ahora mismo
    this.cd.detectChanges();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      this.streamActual = stream;

      // 4. Usamos la referencia segura de Angular (ya no document.querySelector)
      const videoEl = this.videoLiveElement()?.nativeElement;

      if (videoEl) {
        videoEl.srcObject = stream;
        videoEl.muted = true;
        videoEl.volume = 0;
        // Promesa de play() para evitar errores de pantalla negra
        await videoEl.play();
      } else {
        console.error('No se encontró el elemento de video en el DOM');
      }

      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (evento: any) => {
        if (evento.data && evento.data.size > 0) {
          this.pedazos.push(evento.data);
        }
      };

      this.mediaRecorder.onstop = async () => {
        await this.prepararVideoParaRevision();
      };

      this.mediaRecorder.start();
      this.grabando = true;
      this.iniciarContador();

    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
      alert('No se pudo acceder a la cámara');
      this.resetearEstadoCompleto();
    }
  }

  detener(automatico = false) {
    if (automatico) this.detenidoAutomaticamente = true;
    this.procesando = true;

    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }

    this.grabando = false;
    this.detenerRecursosHardware();
  }

  confirmarEnvio() {
    if (this.videoParaRevisar) {
      this.videoListo.emit(this.videoParaRevisar);
    }
    this.resetearEstadoCompleto();
  }

  descartarGrabacion() {
    this.resetearEstadoCompleto();
  }

  private resetearEstadoCompleto() {
    this.detenerRecursosHardware();

    this.videoParaRevisar = null;
    this.urlVideoSegura = null;
    this.pedazos = [];
    this.segundos = 0;
    this.tiempo = '00:00';
    this.grabando = false;
    this.procesando = false;
    this.mostrarGrabacion = false;
    this.detenidoAutomaticamente = false;

    this.cd.detectChanges();
  }

  private detenerRecursosHardware() {
    clearInterval(this.intervalo);

    // Detener tracks del stream
    if (this.streamActual) {
      this.streamActual.getTracks().forEach(track => track.stop());
      this.streamActual = null;
    }

    // Limpiar srcObject del video live si existe actualmente
    const videoEl = this.videoLiveElement()?.nativeElement;
    if (videoEl) {
      videoEl.srcObject = null;
    }
  }

  // ... (Resto de métodos: formatearTiempo, blobABase64, prepararVideoParaRevision, etc. iguales que antes) ...

  // Incluir el método prepararVideoParaRevision y blobABase64 del mensaje anterior
  private async prepararVideoParaRevision() {
      try {
        const blob = new Blob(this.pedazos, { type: 'video/webm' });
        const base64 = await this.blobABase64(blob);
        const duracionFinal = this.segundos;
        const tiempoFinal = Date.now();

        this.videoParaRevisar = {
          blob: blob,
          base64: base64,
          duracion: duracionFinal,
          timestamp: tiempoFinal,
          tipo: 'video/webm'
        };

        const objectUrl = URL.createObjectURL(blob);
        this.urlVideoSegura = this.sanitizer.bypassSecurityTrustUrl(objectUrl);

        this.pedazos = [];
        this.procesando = false;
        this.mostrarGrabacion = false;
        this.cd.detectChanges();

      } catch (error) {
        console.error('Error procesando', error);
        this.resetearEstadoCompleto();
      }
    }

    private iniciarContador() {
        this.segundos = 0;
        this.tiempo = '00:00';
        this.intervalo = setInterval(() => {
          this.segundos++;
          this.tiempo = this.formatearTiempo(this.segundos);
          this.cd.markForCheck();

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

  ngOnDestroy() {
    this.resetearEstadoCompleto();
  }
}
