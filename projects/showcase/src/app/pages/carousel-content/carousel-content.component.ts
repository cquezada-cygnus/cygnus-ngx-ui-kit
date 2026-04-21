import { Component, input, signal } from '@angular/core';
import { CygnusButtonComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusCarouselComponent, CygnusOneItemCarouselComponent } from 'ngx-cygnus-ui/components/carousel';
import { CarouselItem } from 'ngx-cygnus-ui/interfaces';

@Component({
  selector: 'app-carousel-content',
  imports: [
    CygnusCarouselComponent,
    CygnusOneItemCarouselComponent,
    CygnusButtonComponent,
  ],
  templateUrl: './carousel-content.component.html',
  styleUrl: './carousel-content.component.scss'
})
export class CarouselContentComponent {

  carouselItems: CarouselItem[] = [
    { id: 1, title: 'Encontramos tu nombre y contacto', desc: 'Extrayendo tus datos personales', svg: `<svg width="20" height="20" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 6.75C0.75 5.81658 0.75 5.34987 0.931656 4.99335C1.09144 4.67975 1.34641 4.42478 1.66002 4.26499C2.01654 4.08333 2.48325 4.08333 3.41667 4.08333H14.75C15.6834 4.08333 16.1501 4.08333 16.5067 4.26499C16.8203 4.42478 17.0752 4.67975 17.235 4.99335C17.4167 5.34987 17.4167 5.81658 17.4167 6.75V13.0833C17.4167 14.0168 17.4167 14.4835 17.235 14.84C17.0752 15.1536 16.8203 15.4086 16.5067 15.5683C16.1501 15.75 15.6834 15.75 14.75 15.75H3.41667C2.48325 15.75 2.01654 15.75 1.66002 15.5683C1.34641 15.4086 1.09144 15.1536 0.931656 14.84C0.75 14.4835 0.75 14.0168 0.75 13.0833V6.75Z" fill="#D0D5DD"/>
<path d="M12.4167 4.08333C12.4167 3.30836 12.4167 2.92087 12.3315 2.60295C12.1003 1.74022 11.4264 1.06635 10.5637 0.835185C10.2458 0.75 9.85831 0.75 9.08333 0.75C8.30836 0.75 7.92087 0.75 7.60295 0.835185C6.74022 1.06635 6.06635 1.74022 5.83519 2.60295C5.75 2.92087 5.75 3.30836 5.75 4.08333M3.41667 15.75H14.75C15.6834 15.75 16.1501 15.75 16.5067 15.5683C16.8203 15.4086 17.0752 15.1536 17.235 14.84C17.4167 14.4835 17.4167 14.0168 17.4167 13.0833V6.75C17.4167 5.81658 17.4167 5.34987 17.235 4.99335C17.0752 4.67975 16.8203 4.42478 16.5067 4.26499C16.1501 4.08333 15.6834 4.08333 14.75 4.08333H3.41667C2.48325 4.08333 2.01654 4.08333 1.66002 4.26499C1.34641 4.42478 1.09144 4.67975 0.931656 4.99335C0.75 5.34987 0.75 5.81658 0.75 6.75V13.0833C0.75 14.0168 0.75 14.4835 0.931656 14.84C1.09144 15.1536 1.34641 15.4086 1.66002 15.5683C2.01654 15.75 2.48325 15.75 3.41667 15.75Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>` },
    { id: 2, title: 'Revisando tu experiencia laboral', desc: 'Identificando los cargos que has tenido', svg: `<svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.71439 10.75C5.07266 10.75 2.72339 12.0255 1.22772 14.005C0.905814 14.431 0.74486 14.644 0.750125 14.9319C0.754193 15.1543 0.893861 15.4349 1.06887 15.5722C1.29538 15.75 1.60928 15.75 2.23709 15.75H13.1917C13.8195 15.75 14.1334 15.75 14.3599 15.5722C14.5349 15.4349 14.6746 15.1543 14.6787 14.9319C14.6839 14.644 14.523 14.431 14.2011 14.005C12.7054 12.0255 10.3561 10.75 7.71439 10.75Z" fill="#84ADFF"/>
<path d="M7.71439 8.25C9.78546 8.25 11.4644 6.57107 11.4644 4.5C11.4644 2.42893 9.78546 0.75 7.71439 0.75C5.64333 0.75 3.96439 2.42893 3.96439 4.5C3.96439 6.57107 5.64333 8.25 7.71439 8.25Z" fill="#84ADFF"/>
<path d="M7.71439 10.75C5.07266 10.75 2.72339 12.0255 1.22772 14.005C0.905814 14.431 0.74486 14.644 0.750125 14.9319C0.754193 15.1543 0.893861 15.4349 1.06887 15.5722C1.29538 15.75 1.60928 15.75 2.23709 15.75H13.1917C13.8195 15.75 14.1334 15.75 14.3599 15.5722C14.5349 15.4349 14.6746 15.1543 14.6787 14.9319C14.6839 14.644 14.523 14.431 14.2011 14.005C12.7054 12.0255 10.3561 10.75 7.71439 10.75Z" stroke="#528BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.71439 8.25C9.78546 8.25 11.4644 6.57107 11.4644 4.5C11.4644 2.42893 9.78546 0.75 7.71439 0.75C5.64333 0.75 3.96439 2.42893 3.96439 4.5C3.96439 6.57107 5.64333 8.25 7.71439 8.25Z" stroke="#528BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>` },
    { id: 3, title: 'Leyendo tu currículum...', desc: 'Analizando datos', svg: `<svg width="20" height="20" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 6.75C0.75 5.81658 0.75 5.34987 0.931656 4.99335C1.09144 4.67975 1.34641 4.42478 1.66002 4.26499C2.01654 4.08333 2.48325 4.08333 3.41667 4.08333H14.75C15.6834 4.08333 16.1501 4.08333 16.5067 4.26499C16.8203 4.42478 17.0752 4.67975 17.235 4.99335C17.4167 5.34987 17.4167 5.81658 17.4167 6.75V13.0833C17.4167 14.0168 17.4167 14.4835 17.235 14.84C17.0752 15.1536 16.8203 15.4086 16.5067 15.5683C16.1501 15.75 15.6834 15.75 14.75 15.75H3.41667C2.48325 15.75 2.01654 15.75 1.66002 15.5683C1.34641 15.4086 1.09144 15.1536 0.931656 14.84C0.75 14.4835 0.75 14.0168 0.75 13.0833V6.75Z" fill="#D0D5DD"/>
<path d="M12.4167 4.08333C12.4167 3.30836 12.4167 2.92087 12.3315 2.60295C12.1003 1.74022 11.4264 1.06635 10.5637 0.835185C10.2458 0.75 9.85831 0.75 9.08333 0.75C8.30836 0.75 7.92087 0.75 7.60295 0.835185C6.74022 1.06635 6.06635 1.74022 5.83519 2.60295C5.75 2.92087 5.75 3.30836 5.75 4.08333M3.41667 15.75H14.75C15.6834 15.75 16.1501 15.75 16.5067 15.5683C16.8203 15.4086 17.0752 15.1536 17.235 14.84C17.4167 14.4835 17.4167 14.0168 17.4167 13.0833V6.75C17.4167 5.81658 17.4167 5.34987 17.235 4.99335C17.0752 4.67975 16.8203 4.42478 16.5067 4.26499C16.1501 4.08333 15.6834 4.08333 14.75 4.08333H3.41667C2.48325 4.08333 2.01654 4.08333 1.66002 4.26499C1.34641 4.42478 1.09144 4.67975 0.931656 4.99335C0.75 5.34987 0.75 5.81658 0.75 6.75V13.0833C0.75 14.0168 0.75 14.4835 0.931656 14.84C1.09144 15.1536 1.34641 15.4086 1.66002 15.5683C2.01654 15.75 2.48325 15.75 3.41667 15.75Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>` },
  ];


  setCarouselItem = signal<number | null>(null); // <-- inicializa en null. Si no inicializa en null, puede que no detecte el cambio el carousel


  changeCarouselItem () {
    this.setCarouselItem.update(value => (value === null ? 1 : value + 1));
    console.log('click btn: ',this.setCarouselItem());
  }

  currentOneItemCarouselItem = signal<CarouselItem>({ id: 0, title: '', desc: '', svg: `` });
  counter = 0;

  changeOneItemCarouselItem() {
    this.currentOneItemCarouselItem.set(this.carouselItems[this.counter]);
    this.counter += 1;
    if (this.counter === (this.carouselItems.length-1)) {
      this.counter = 0;
    }
  }


  currentOneItemCarouselItem2 = signal<CarouselItem>({ id: 0, title: '', desc: '', svg: `` });
  counter2 = 0;

  changeOneItemCarouselItem2() {
    this.currentOneItemCarouselItem2.set(this.carouselItems[this.counter2]);
    this.counter2 += 1;
    if (this.counter2 === (this.carouselItems.length-1)) {
      this.counter2 = 0;
    }
  }

}
