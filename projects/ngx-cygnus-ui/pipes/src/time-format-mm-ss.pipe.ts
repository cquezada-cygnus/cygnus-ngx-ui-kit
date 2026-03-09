import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
  standalone: true
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    if (!value && value !== 0) return '00:00';

    const minutes: number = Math.floor(value / 60);
    const seconds: number = value % 60;

    // Usamos padStart para asegurar los dos dígitos
    return (
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0')
    );
  }
}
