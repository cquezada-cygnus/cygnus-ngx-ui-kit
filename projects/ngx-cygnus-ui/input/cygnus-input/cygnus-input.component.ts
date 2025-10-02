import { Component } from '@angular/core';

@Component({
  selector: 'cygnus-input',
  imports: [],
  templateUrl: './cygnus-input.component.html',
  styleUrl: './cygnus-input.component.css'
})
export class CygnusInputComponent {
  INPUT_BASE: string = 'px-3 py-3 block w-full text-sm transition duration-300 bg-white border rounded-lg shadow-sm placeholder:text-gray-500 text-gray-700 border-gray-300 focus:outline-none focus:ring-primary-700 focus:border-primary-700 focus:shadow';

  INPUT_FLOATING: string = '!p-4 placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 .input-floating[:not(:placeholder-shown)]:pt-6 input-floating[:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2';

  INPUT_SUCCESS: string = '!border-success-500 !focus:border-success-500 !focus:ring-success-500';

  INPUT_WARNING: string = '!border-warning-500 !focus:border-warning-500 !focus:ring-warning-500';

  INPUT_ERROR: string = '!border-error-500 !focus:border-error-500 !focus:ring-error-500';

  INPUT_DISABLED: string = 'bg-neutral-50 text-neutral-400 cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none focus:outline-none focus:ring-0 focus:bg-gray-50 focus:border-gray-300 focus:opacity-60 focus:shadow-none';

  LABEL_BASE: string = 'block mb-1 text-sm font-medium text-gray-800';

  LABEL_FLOATING: string = 'absolute top-0 start-0 !p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500';

  LABEL_SUCCESS: string = '!text-success-600 !peer-focus:text-gray-500 !peer-[:not(:placeholder-shown)]:text-gray-500';

  LABEL_INTERACTIVE_BASE: string = 'absolute cursor-text bg-white px-1 left-2.5 -top-2 text-xs scale-90 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:scale-90 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm';
  LABEL_INTERACTIVE_COLOR_BASE   : string = 'text-gray-600 peer-focus:text-gray-600 peer-placeholder-shown:text-gray-600';
  LABEL_INTERACTIVE_COLOR_SUCCESS: string = 'text-success-600 peer-focus:text-success-600 peer-placeholder-shown:text-success-700';
  LABEL_INTERACTIVE_COLOR_WARNING: string = 'text-warning-600 peer-focus:text-warning-600 peer-placeholder-shown:text-warning-700';
  LABEL_INTERACTIVE_COLOR_ERROR  : string = 'text-error-600 peer-focus:text-error-600 peer-placeholder-shown:text-error-700';

  FIELDSET_LEGEND: string = 'block mb-1 text-sm font-medium text-gray-800';

  HINT_TEXT   : string = 'mt-1 text-sm text-gray-500';
  HINT_SUCCESS: string = 'text-success-600';
  HINT_WARNING: string = 'text-warning-600';
  HINT_ERROR  : string = 'text-error-600';


}
