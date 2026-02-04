import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidationResult, ValidationError } from 'ngx-cygnus-ui/types';

/**
 * Validador requerido con mensaje personalizado
 */
export function cgRequired(message?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    // ✅ Mejorar detección de vacío incluyendo strings con solo espacios
    const isEmpty = value === null ||
                   value === undefined ||
                   value === '' ||
                   (typeof value === 'string' && value.trim() === '');

    if (isEmpty) {
      return {
        cgRequired: {
          code: 'REQUIRED',
          message: message || 'Este campo es requerido',
          severity: 'warning'
        }
      };
    }

    return null;
  };
}

/**
 * Validador de teléfono chileno (9 dígitos)
 */
export function cgPhone(message?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // ✅ Validar tipos y valores vacíos más robustamente
    if (!value || value === null || value === undefined) return null;

    // ✅ Convertir a string de forma segura
    const stringValue = String(value).trim();
    if (!stringValue) return null;

    // Remover espacios, guiones y paréntesis
    const cleanPhone = stringValue.replace(/[\s\-\(\)]/g, '');

    // Validar que sean exactamente 9 dígitos y empiecen con 9
    const phoneRegex = /^9\d{8}$/;

    if (!phoneRegex.test(cleanPhone)) {
      return {
        cgPhone: {
          code: 'INVALID_PHONE',
          message: message || 'Debe contener 9 números y comenzar con 9',
          severity: 'error'
        }
      };
    }

    return null;
  };
}

/**
 * Validador de email
 */
export function cgEmail(message?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // ✅ Validar tipos y valores vacíos más robustamente
    if (!value || value === null || value === undefined) return null;

    const stringValue = String(value).trim();
    if (!stringValue) return null;

    // ✅ Regex de email más robusta
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(stringValue)) {
      return {
        cgEmail: {
          code: 'INVALID_EMAIL',
          message: message || 'Debe tener un formato de email válido',
          severity: 'error'
        }
      };
    }

    return null;
  };
}

/**
 * Validador de solo números
 */
export function cgNumber(message?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // ✅ Validar tipos y valores vacíos más robustamente
    if (!value || value === null || value === undefined) return null;

    const stringValue = String(value).trim();
    if (!stringValue) return null;

    // ✅ Regex mejorada para números (incluyendo negativos y decimales)
    const numberRegex = /^-?\d+(\.\d+)?$/;

    if (!numberRegex.test(stringValue)) {
      return {
        cgNumber: {
          code: 'INVALID_NUMBER',
          message: message || 'Solo se permiten números',
          severity: 'error'
        }
      };
    }

    return null;
  };
}

/**
 * Validador de solo enteros
 */
export function cgInteger(message?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // ✅ Validar tipos y valores vacíos más robustamente
    if (!value || value === null || value === undefined) return null;

    const stringValue = String(value).trim();
    if (!stringValue) return null;

    // ✅ Regex mejorada para enteros (incluyendo negativos)
    const integerRegex = /^-?\d+$/;

    if (!integerRegex.test(stringValue)) {
      return {
        cgInteger: {
          code: 'INVALID_INTEGER',
          message: message || 'Solo se permiten números enteros',
          severity: 'error'
        }
      };
    }

    return null;
  };
}

/**
 * ✅ NUEVO: Validador combinado para campos requeridos con formato específico
 */
export function cgRequiredPhone(message?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Primero verificar si está vacío (required)
    const isEmpty = value === null ||
                   value === undefined ||
                   value === '' ||
                   (typeof value === 'string' && value.trim() === '');

    if (isEmpty) {
      return {
        cgRequired: {
          code: 'REQUIRED',
          message: 'Este campo es requerido',
          severity: 'warning'
        }
      };
    }

    // Luego validar formato de teléfono
    const stringValue = String(value).trim();
    const cleanPhone = stringValue.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^9\d{8}$/;

    if (!phoneRegex.test(cleanPhone)) {
      return {
        cgPhone: {
          code: 'INVALID_PHONE',
          message: message || 'Debe contener 9 números y comenzar con 9',
          severity: 'error'
        }
      };
    }

    return null;
  };
}

/**
 * ✅ NUEVO: Validador combinado para email requerido
 */
export function cgRequiredEmail(message?: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Primero verificar si está vacío (required)
    const isEmpty = value === null ||
                   value === undefined ||
                   value === '' ||
                   (typeof value === 'string' && value.trim() === '');

    if (isEmpty) {
      return {
        cgRequired: {
          code: 'REQUIRED',
          message: 'Este campo es requerido',
          severity: 'warning'
        }
      };
    }

    // Luego validar formato de email
    const stringValue = String(value).trim();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(stringValue)) {
      return {
        cgEmail: {
          code: 'INVALID_EMAIL',
          message: message || 'Debe tener un formato de email válido',
          severity: 'error'
        }
      };
    }

    return null;
  };
}

export function cgRutValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const rut = control.value;
    if (!rut) {
      return null; // Don't validate if the field is empty
    }

    // Example validation logic (simplified - a complete solution would use Modulo 11)
    const rutRegex = /^[0-9]+-[0-9kK]{1}$/;
    if (!rutRegex.test(rut)) {
      return { invalidRutFormat: true };
    }

    if (!rutFormula(rut)) { // Modulo 11
      return { invalidValidator: true };
    }

    // error
    // const digitRepeatedRegex = /^(.)\1{2,}$/; // si hay 3 o más dígitos repetidos en un rut como 11111111-1
    // if (!digitRepeatedRegex.test(rut)) {
    //   return { invalidDigitRepeated: true };
    // }

    const digitRepeatedRegex = /^(.)\1+-[0-9kK]$/; // Detecta 111111-1, 222222-2, etc.
    if (digitRepeatedRegex.test(rut)) {
      return { invalidDigitRepeated: true };
    }

    return null; // Valid
  };
}

function rutFormula(rut: string): boolean {
  // convertir el rut en un arreglo de números sin guión y sin verificador, pero reservando el verificador en una variable a parte
  let userVerificador = rut.split('-')[1];
  const rutNumberArr = rut.split('-')[0].split('');

  if (rutNumberArr.length < 5) { // se considera que los ruts con menos de 5 dígitos son inválidos
    return false;
  }

  // variables necesarias para calcular el número verificador válido
  const numRefArr = [2,3,4,5,6,7];
  let suma = 0;
  let modulo = 0;
  let verificador = '';
  let indexNumRef = 0;

  // iterar sobre cada digito del rut (sin guion ni verificador) para calcular el verificador válido
  for (let i = rutNumberArr.length-1; i >= 0 ; i--) {
    const elem = +(rutNumberArr[i]); // convertir el string en número
    const num = numRefArr[indexNumRef];
    suma = suma +( elem * num );
    indexNumRef += 1;

    if (indexNumRef === numRefArr.length) {
      indexNumRef = 0;
    }
  }

  modulo = suma % 11;
  modulo = 11 - modulo;

  if (modulo !== 11 && modulo !== 10) { // si el módulo no es 10 ni 11
    verificador = modulo.toString();
  }
  if (modulo === 11) { // si el módulo es 11, el verificador es '0'
    verificador = (0).toString();
  }
  if (modulo === 10) { // si el módulo es 10, el verificador es 'K'
    verificador = 'K';
  }

  if (userVerificador.toUpperCase() === verificador.toUpperCase()) {
    return true;
  } else return false;
}

export function specificValueValidator(expectedValue: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null; // Don't validate empty values, use Validators.required for that
    }
    return value === expectedValue ? null : { specificValue: { expected: expectedValue, actual: value } };
  };
}
