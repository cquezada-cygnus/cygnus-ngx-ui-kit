/*import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidationError } from './input.types';

// Tipo de función validadora
export type ValidatorFunction = (control: AbstractControl) => ValidationErrors | null;

// Configuración de validador
export interface ValidatorConfig {
  name: string;
  message: string;
  params?: Record<string, any>;
}

// Reglas de validación específicas
export interface PhoneValidationConfig {
  country: string;
  allowInternational?: boolean;
  format?: 'e164' | 'national' | 'international';
}

export interface EmailValidationConfig {
  allowedDomains?: string[];
  blockedDomains?: string[];
  requireBusinessEmail?: boolean;
  allowDisposable?: boolean;
}

export interface PasswordValidationConfig {
  minLength?: number;
  maxLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumbers?: boolean;
  requireSpecialChars?: boolean;
  forbiddenPasswords?: string[];
}

export interface RutValidationConfig {
  allowCompanyRut?: boolean;
  format?: 'with-dots' | 'without-dots' | 'both';
}

export interface DateValidationConfig {
  minDate?: Date;
  maxDate?: Date;
  allowWeekends?: boolean;
  allowPast?: boolean;
  allowFuture?: boolean;
  format?: string;
}

// Resultado de validación
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings?: ValidationError[];
}

// Contexto de validación
export interface ValidationContext {
  field: string;
  value: any;
  form?: any;
  config?: Record<string, any>;
}

// Error de validación extendido
export interface ExtendedValidationError extends ValidationError {
  field?: string;
  severity?: 'error' | 'warning' | 'info';
  code?: string;
  timestamp?: Date;
}*/

export interface ValidationError {
  code: string;
  message: string;
  severity: 'error' | 'warning';
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export type InputType = 'text' | 'email' | 'phone' | 'number' | 'integer' | 'password';

export interface ValidationConfig {
  required?: boolean;
  type?: InputType;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  customValidator?: (value: string) => ValidationResult;
}
