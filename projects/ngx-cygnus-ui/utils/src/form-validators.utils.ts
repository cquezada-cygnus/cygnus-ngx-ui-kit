import { FormGroup } from '@angular/forms';

export class FormUtils {
  // static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'; // hay otro en uso en validators
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';


  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return ( !!form.controls[fieldName].errors &&
               form.controls[fieldName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Campo requerido';
        case 'minLength':
          return 'Se requieren mínimo de caracteres';
        default:
          return 'Campo inválido';
      }
    }

    return null;
  }
}
