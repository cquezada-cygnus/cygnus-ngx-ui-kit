export const TW_CLASS = {

  INPUT_BASE: 'px-3 py-3 block w-full text-sm transition duration-300 bg-white border rounded-lg shadow-sm placeholder:text-gray-300 text-gray-700 focus:ring-1 focus:outline-none focus:shadow',

  INPUT_GENERIC: 'border-gray-300 focus:border-primary-700 focus:ring-primary-700',
  INPUT_SUCCESS: '!border-success-500 !focus:border-success-500 !focus:ring-success-500',
  INPUT_WARNING: '!border-warning-500 !focus:border-warning-500 !focus:ring-warning-500',
  INPUT_ERROR  : '!border-error-500 !focus:border-error-500 !focus:ring-error-500',

  INPUT_DISABLED: 'bg-neutral-50 text-neutral-400 cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none focus:ring-0 focus:bg-gray-50 focus:border-gray-300 focus:opacity-60 focus:shadow-none',
  INPUT_FLOATING: '!pb-2 !pt-6 placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pb-2 !focus:pt-6 ![&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2',
  INPUT_FLOATING_ICON: '!pb-3 !pt-3 placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none !focus:pt-3 focus:pb-3 ![&:not(:placeholder-shown)]:pt-3 [&:not(:placeholder-shown)]:pb-3 !autofill:pt-3 autofill:pb-3',

  INPUT_TOP_BASE: 'px-4 !shadow-xs !placeholder:text-gray-300 !focus:outline-hidden focus:shadow-sm',
  INPUT_TOP_GENERIC: 'border-gray-300 focus:ring-primary-700 focus:border-primary-700',
  INPUT_TOP_SUCCESS: 'border-2 border-success-600 focus:ring-success-700 focus:border-success-700',
  INPUT_TOP_WARNING: 'border-2 border-warning-500 focus:ring-warning-500 focus:border-warning-500',
  INPUT_TOP_ERROR: 'border-2 border-error-500 focus:ring-error-500 focus:border-error-500',

  INPUT_INTERACTIVE_BASE: 'px-4 py-3',
  INPUT_INTERACTIVE_GENERIC: '',
  INPUT_INTERACTIVE_SUCCESS: 'placeholder:text-gray-300 placeholder:bg-gray-50 text-gray-700 border-success-600 !focus:ring-success-700 !focus:border-success-700 focus:shadow active:bg-white',
  INPUT_INTERACTIVE_WARNING: 'placeholder:text-gray-300 placeholder:bg-gray-50 text-gray-700 border-warning-600 !focus:ring-warning-700 !focus:border-warning-700  focus:shadow active:bg-white',
  INPUT_INTERACTIVE_ERROR: 'placeholder:text-gray-300 placeholder:bg-gray-50 text-gray-700 border-error-600 !focus:ring-error-700 !focus:border-error-700 focus:shadow active:bg-white',

  INPUT_FILE: '!px-0 !py-0 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 file:cursor-pointer cursor-pointer',

  LABEL_BASE: 'block mb-1 text-sm font-medium text-gray-800',

  LABEL_FLOATING_BASE: 'absolute top-0 start-0 !p-4 !pl-3 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500',

  LABEL_FLOATING_SUCCESS: '!text-success-600 !peer-focus:text-gray-500 !peer-[:not(:placeholder-shown)]:text-gray-500',
  LABEL_FLOATING_WARNING: '!text-warning-600 !peer-focus:text-gray-500 !peer-[:not(:placeholder-shown)]:text-gray-500',
  LABEL_FLOATING_ERROR  : '!text-error-600 !peer-focus:text-gray-500 !peer-[:not(:placeholder-shown)]:text-gray-500',

  LABEL_TOP_BASE: 'absolute cursor-text bg-white px-1.5 left-2.5 -top-2.5 placeholder-shown:text-sm text-sm',
  LABEL_TOP_GENERIC: 'text-gray-600 peer-placeholder-shown:text-gray-700',
  LABEL_TOP_SUCCESS: 'text-success-700',
  LABEL_TOP_WARNING: 'text-warning-600',
  LABEL_TOP_ERROR: 'text-error-600',

  LABEL_INTERACTIVE_BASE: 'absolute cursor-text bg-white px-1 left-2.5 -top-2 text-xs scale-90 transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:scale-90 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm',

  LABEL_INTERACTIVE_COLOR_BASE   : 'text-gray-600 peer-focus:text-gray-600 peer-placeholder-shown:text-gray-600',
  LABEL_INTERACTIVE_COLOR_SUCCESS: 'text-success-600 peer-focus:text-success-600 peer-placeholder-shown:text-success-700',
  LABEL_INTERACTIVE_COLOR_WARNING: 'text-warning-600 peer-focus:text-warning-600 peer-placeholder-shown:text-warning-700',
  LABEL_INTERACTIVE_COLOR_ERROR  : 'text-error-600 peer-focus:text-error-600 peer-placeholder-shown:text-error-700',

  FIELDSET_LEGEND: 'block mb-1 text-sm font-medium text-gray-800',

  ELEMENT_RIGHT: 'absolute',
  ELEMENT_LEFT : 'absolute inset-y-0 flex items-center pointer-events-none start-0 ps-2 text-sm font-semibold text-gray-600',

  HINT_TEXT   : 'mt-1 text-sm text-gray-500',
  HINT_SUCCESS: '!text-success-600',
  HINT_WARNING: '!text-warning-600',
  HINT_ERROR  : '!text-error-600',

  INPUT_SIZE_SM: '!p-2.5',
  INPUT_SIZE_LG: '!p-4',

  // Wrapper para gradient border
  GRADIENT_WRAPPER: 'relative rounded-lg p-[2px] bg-gradient-to-r from-[#5850EC] to-[#F94C00]',
  GRADIENT_INNER: 'bg-white rounded-[6px]', // Ajusta el color de fondo según tu diseño

  // Versión sin gradient (normal)
  NORMAL_WRAPPER: 'relative',
}
