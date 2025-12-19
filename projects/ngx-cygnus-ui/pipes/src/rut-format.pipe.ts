import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rutFormat'
})
export class RutFormatPipe implements PipeTransform {

  transform(rut: string | null | undefined, ...args: unknown[]): unknown {
    if (!rut) {
      return '';
    }

    // Limpiar el RUT (quitar puntos, guiones, 'k', 'K')
    const rutLimpio = rut.replace(/[^0-9kK]/g, '').toUpperCase();

    if (rutLimpio.length < 2) {
      return rutLimpio; // No se puede formatear si es muy corto
    }

    let body = rutLimpio.slice(0, -1);
    const dv = rutLimpio.slice(-1);

    // Añadir puntos
    let formattedBody = '';
    let count = 0;
    for (let i = body.length - 1; i >= 0; i--) {
      formattedBody = body[i] + formattedBody;
      count++;
      if (count % 3 === 0 && i !== 0) {
        formattedBody = '.' + formattedBody;
      }
    }

    return `${formattedBody}-${dv}`;
  }

}
