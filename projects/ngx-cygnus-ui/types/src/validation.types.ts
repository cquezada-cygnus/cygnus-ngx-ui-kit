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
