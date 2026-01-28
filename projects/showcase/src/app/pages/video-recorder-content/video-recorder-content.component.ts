import { Component } from '@angular/core';
import { CygnusVideoRecorderComponent } from 'ngx-cygnus-ui/components/video-recorder';
import { VideoGrabado } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-video-recorder-content',
  imports: [
    CygnusVideoRecorderComponent,
  ],
  templateUrl: './video-recorder-content.component.html',
  styleUrl: './video-recorder-content.component.scss'
})
export class VideoRecorderContentComponent {

  recibirVideo(video: VideoGrabado): void {
    if (video) {
      console.log('video recibido');
      console.log('video base64:', video.base64);
    }
  }
}
