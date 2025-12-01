import { Component, inject, OnInit, output, signal } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { InputColor } from 'ngx-cygnus-ui/types';
import { cgPhone } from 'ngx-cygnus-ui/validators';

import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-input-content',
  imports: [
    ReactiveFormsModule,
    CygnusInputComponent,
    Highlight, HighlightLineNumbers,
  ],
  templateUrl: './input-content.component.html',
  styleUrl: './input-content.component.scss'
})
export class InputContentComponent implements OnInit {

  inputClearValue = signal<boolean>(false);
  outputPhone = output<any>();
  nonNullableFb = inject(NonNullableFormBuilder);
  phoneForm = this.nonNullableFb.group({
    phone: ['',
      [Validators.required, cgPhone()]
    ],
  });

  textPhoneHint = signal<string>('');
  inputPhoneColor = signal<InputColor>('base');

  ngOnInit() {
    this.inputStatusManager();
  }

  inputStatusManager() {
    this.phoneForm.get('phone')?.statusChanges.subscribe(status => {
      if (this.phoneForm.get('phone')?.errors) {
        this.inputPhoneColor.set('error');
        if (this.phoneForm.get('phone')?.errors!['required']) {
          this.textPhoneHint.set('Debe indicar un teléfono');
        } else if (this.phoneForm.get('phone')?.errors!['cgPhone']) {
          this.textPhoneHint.set('El formato del teléfono es inválido');
        }
      } else {
        this.inputPhoneColor.set('success');
        this.textPhoneHint.set('');
      }
    });
  }

  onSubmit() {
      this.inputClearValue.set(true);
      this.phoneForm.markAllAsTouched();
      this.outputPhone.emit(this.phoneForm.value);
  }

  cygnusInputImportTs: string = `
    import { Component } from '@angular/core';
    import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';

    @Component({
      selector: 'app-component',
      imports: [
        CygnusInputComponent
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent {}
  `;

  cygnusInputSimpleHtml: string = `
    <!-- COMPONENTE: Input simple -->
    <cygnus-input [inputCustomType]="'base'" [textPlaceholder]="'esto es un placeholder'" />
  `;

  cygnusInputLabelHtml: string = `
    <!-- COMPONENTE: Input con label -->
    <cygnus-input
      [inputCustomType]="'fieldset-legend-label'"
      [textPlaceholder]="'esto es un placeholder'"
      [textHint]="'Este es un texto de ayuda para el usuario.'"
      [textLabel]="'Custom label'"
    />
  `;

  cygnusInputSizesHtml: string = `
    <!-- COMPONENTE: Tamaño SM -->
    <cygnus-input
      [inputCustomType]="'fieldset-legend-label'"
      [textPlaceholder]="'Tamaño SM'"
      [textHint]="'Este es un texto de ayuda para el usuario.'"
      [textLabel]="'Label'"
      [inputSize]="'sm'"
    />

    <!-- COMPONENTE: Tamaño default -->
    <cygnus-input
      [inputCustomType]="'fieldset-legend-label'"
      [textPlaceholder]="'Tamaño Normal'"
      [textHint]="'Este es un texto de ayuda para el usuario.'"
      [textLabel]="'Label'"
      [inputSize]="''"
    />

    <!-- COMPONENTE: Tamaño LG -->
    <cygnus-input
      [inputCustomType]="'fieldset-legend-label'"
      [textPlaceholder]="'Tamaño LG'"
      [textHint]="'Este es un texto de ayuda para el usuario.'"
      [textLabel]="'Label'"
      [inputSize]="'lg'"
    />
  `;

  cygnusInputLabelTopHtml: string = `
    <!-- COMPONENTE: Input Label TOP simple -->
    <cygnus-input
      [inputCustomType]="'label-top'"
      [textLabel]="'Email'"
      [textHint] ="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input Label TOP success -->
    <cygnus-input
      [inputCustomType]="'label-top'"
      [inputColor]="'success'"
      [iconAsset]="'assets/icons/svg/General/check-circle.svg'"
      [iconColor]="'#12b76a'"
      [textLabel]="'Email'"
      [textHint] ="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input Label TOP warning -->
      <cygnus-input
      [inputCustomType]="'label-top'"
      [inputColor]="'warning'"
      [iconAsset]="'assets/icons/svg/Alerts&Feedback/alert-triangle.svg'"
      [iconColor]="'#f79009'"
      [textLabel]="'Email'"
      [textHint] ="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input Label TOP error -->
      <cygnus-input
      [inputCustomType]="'label-top'"
      [inputColor]="'error'"
      [iconAsset]="'assets/icons/svg/Alerts&Feedback/alert-circle.svg'"
      [iconColor]="'#f04438'"
      [textLabel]="'Email'"
      [textHint] ="'Este es un texto de ayuda para el usuario.'"
    />
  `;

  cygnusInputLabelInteractiveTopHtml: string = `
    <!-- COMPONENTE: Input interactivo simple -->
    <cygnus-input
      [inputCustomType]="'label-interactive'"
      [textLabel]="'Email'"
      [textHint] ="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input interactivo success -->
    <cygnus-input
      [inputCustomType]="'label-interactive'"
      [inputColor]="'success'"
      [iconAsset]="'assets/icons/svg/General/check-circle.svg'"
      [iconColor]="'#12b76a'"
      [textLabel]="'Email'"
      [textHint] ="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input interactivo warning -->
      <cygnus-input
      [inputCustomType]="'label-interactive'"
      [inputColor]="'warning'"
      [iconAsset]="'assets/icons/svg/Alerts&Feedback/alert-triangle.svg'"
      [iconColor]="'#f79009'"
      [textLabel]="'Email'"
      [textHint] ="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input interactivo error -->
      <cygnus-input
      [inputCustomType]="'label-interactive'"
      [inputColor]="'error'"
      [iconAsset]="'assets/icons/svg/Alerts&Feedback/alert-circle.svg'"
      [iconColor]="'#f04438'"
      [textLabel]="'Email'"
      [textHint] ="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input floating -->
    <cygnus-input
      [inputCustomType]="'floating'"
      [textPlaceholder]="'...'"
      [textLabel]="'Email'"
      [textHint]="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input floating success -->
    <cygnus-input
      [inputCustomType]="'floating'"
      [textPlaceholder]="'...'"
      [textLabel]="'Email'"
      [inputColor]="'success'"
      [iconAsset]="'assets/icons/svg/General/check-circle.svg'"
      [iconState]="true"
      [iconColor]="'#12b76a'"
      [textHint]="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input floating warning -->
    <cygnus-input
      [inputCustomType]="'floating'"
      [textPlaceholder]="'...'"
      [textLabel]="'Email'"
      [inputColor]="'warning'"
      [iconAsset]="'assets/icons/svg/Alerts&Feedback/alert-triangle.svg'"
      [iconState]="true"
      [iconColor]="'#f79009'"
      [textHint]="'Este es un texto de ayuda para el usuario.'"
    />

    <!-- COMPONENTE: Input floating error -->
    <cygnus-input
      [inputCustomType]="'floating'"
      [textPlaceholder]="'...'"
      [textLabel]="'Email'"
      [inputColor]="'error'"
      [iconAsset]="'assets/icons/svg/Alerts&Feedback/alert-circle.svg'"
      [iconState]="true"
      [iconColor]="'#f04438'"
      [textHint]="'Este es un texto de ayuda para el usuario.'"
    />
  `;

  cygnusInputIconHtml: string = `
    <!-- COMPONENTE: Input con icono a la derecha -->
    <cygnus-input
      [inputCustomType]="'label-interactive'"
      [textPlaceholder]="'Escribe aquí...'"
      [iconAsset]="'assets/icons/svg/General/search-sm.svg'"
      [iconState]="false"
      [iconColor]="'#101828'"
      [iconPosition]="'right'"
    /> <!-- si no indica la posición del ícono, por defecto es a la derecha -->

    <cygnus-input
      [inputCustomType]="'floating'"
      [textPlaceholder]="'Escribe aquí...'"
      [iconAsset]="'assets/icons/svg/General/search-sm.svg'"
      [iconState]="false"
      [iconColor]="'#101828'"
      [iconPosition]="'right'"
    /> <!-- si no indica la posición del ícono, por defecto es a la derecha -->


    <!-- COMPONENTE: Input con icono a la izquierda -->
    <cygnus-input
      [inputCustomType]="'label-interactive'"
      [textPlaceholder]="'Escribe aquí...'"
      [iconAsset]="'assets/icons/svg/General/search-sm.svg'"
      [iconState]="false"
      [iconColor]="'#101828'"
      [iconPosition]="'left'"
    /> <!-- si no indica la posición del ícono, por defecto es a la derecha -->

    <cygnus-input
      [inputCustomType]="'floating'"
      [textPlaceholder]="'Escribe aquí...'"
      [iconAsset]="'assets/icons/svg/General/search-sm.svg'"
      [iconState]="false"
      [iconColor]="'#101828'"
      [iconPosition]="'left'"
    /> <!-- si no indica la posición del ícono, por defecto es a la derecha -->

    <cygnus-input
      [inputCustomType]="'label-interactive'"
      [textPlaceholder]="'Escribe aquí...'"
      [pseudoIconCLPPhone]="true"
      [iconPosition]="'left'"
    />

    <cygnus-input
      [inputCustomType]="'floating'"
      [textPlaceholder]="'Escribe aquí...'"
      [pseudoIconCLPPhone]="true"
      [iconPosition]="'left'"
    />
  `;

  cygnusInputDisabledHtml: string = `
    <cygnus-input
      [inputCustomType]="'label-interactive'"
      [textPlaceholder]="'Escribe aquí...'"
      [pseudoIconCLPPhone]="true"
      [iconPosition]="'left'"
      [textPlaceholder]="'123-45 6789'"
      [inputDisabled]="true"
    />
  `;

  cygnusInputFileHtml: string = `
    <cygnus-input
      [inputCustomType]="'file'"
      [textLabel]="'Subir imagen'"
    />
  `;

  cygnusInputPhoneValidatorImportTs: string = `
    import { Component, inject, OnInit, output, signal } from '@angular/core';
    import { ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';

    import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
    import { InputColor } from 'ngx-cygnus-ui/types';
    import { cgPhone } from 'ngx-cygnus-ui/validators';

    @Component({
      selector: 'app-component',
      imports: [
        ReactiveFormsModule,
        CygnusInputComponent,
      ],
      templateUrl: './app-component.component.html',
      styleUrl: './app-component.component.scss'
    })
    export class AppComponentComponent implements OnInit { }
  `;

  cygnusInputPhoneValidatorCodeTs: string = `
    ...
    export class AppComponentComponent implements OnInit {

      inputClearValue = signal<boolean>(false);
      outputPhone = output<any>();
      nonNullableFb = inject(NonNullableFormBuilder);
      phoneForm = this.nonNullableFb.group({
        phone: ['',
          [Validators.required, cgPhone()]
        ],
      });

      textPhoneHint = signal<string>('');
      inputPhoneColor = signal<InputColor>('base');

      ngOnInit() {
        this.inputStatusManager();
      }

      inputStatusManager() {
        this.phoneForm.get('phone')?.statusChanges.subscribe(status => {
          if (this.phoneForm.get('phone')?.errors) {
            this.inputPhoneColor.set('error');
            if (this.phoneForm.get('phone')?.errors!['required']) {
              this.textPhoneHint.set('Debe indicar un teléfono');
            } else if (this.phoneForm.get('phone')?.errors!['cgPhone']) {
              this.textPhoneHint.set('El formato del teléfono es inválido');
            }
          } else {
            this.inputPhoneColor.set('success');
            this.textPhoneHint.set('');
          }
        });
      }

      onSubmit() {
          this.inputClearValue.set(true);
          this.phoneForm.markAllAsTouched();
          this.outputPhone.emit(this.phoneForm.value);
      }

    }
  `;

  cygnusInputPhoneValidatorHtml: string = `
    <form [formGroup]="phoneForm" (ngSubmit)="onSubmit()" class="flex flex-col space-y-4 md:space-y-6 w-full items-center" action="#">
      <div class="flex-col w-full max-w-sm space-y-4">
        <!-- input con validador de número de teléfono -->
        <cygnus-input
          [inputCustomType]="'label-top'"
          [inputColor]="inputPhoneColor()"
          [textLabel]="'Teléfono'"
          [hintColor]="true"
          [textHint]="textPhoneHint()"
          [control]="phoneForm.controls.phone"
          [inputClearValue]="inputClearValue()"
        />
      </div>
    </form>
  `;

}
