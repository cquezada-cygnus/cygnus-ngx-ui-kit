import { Component } from '@angular/core';

@Component({
  selector: 'cygnus-input',
  imports: [],
  templateUrl: './cygnus-input.component.html',
  styleUrl: './cygnus-input.component.css'
})
export class CygnusInputComponent {
  INPUT_BASE: string = 'px-3 py-3 block w-full text-sm transition duration-300 bg-white border rounded-lg shadow-sm placeholder:text-gray-500 text-gray-700 border-gray-300 focus:outline-none focus:ring-primary-700 focus:border-primary-700 focus:shadow';

  INPUT_FLOATING: string = '!p-4 placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2';

  LABEL_FLOATING: string = 'absolute top-0 start-0 !p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500';

  HINT_TEXT: string = 'mt-1 text-sm text-gray-500';
}
