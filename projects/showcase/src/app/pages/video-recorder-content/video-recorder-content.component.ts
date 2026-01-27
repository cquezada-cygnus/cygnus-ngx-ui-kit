import { Component } from '@angular/core';
import { CygnusVideoRecorderComponent } from 'ngx-cygnus-ui/components/video-recorder';

@Component({
  selector: 'app-video-recorder-content',
  imports: [
    CygnusVideoRecorderComponent,
  ],
  templateUrl: './video-recorder-content.component.html',
  styleUrl: './video-recorder-content.component.scss'
})
export class VideoRecorderContentComponent {

}
