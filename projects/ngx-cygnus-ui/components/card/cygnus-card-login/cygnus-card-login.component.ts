import { Component, inject, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxCygnusIconsComponent } from '@cygnus/ngx-cygnus-icons';
import { CygnusButtonComponent, CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { InputColor, BtnCustomType } from 'ngx-cygnus-ui/types';
import { TW_CLASS } from '../const/tailwind.const';
import { cgRutValidator } from 'ngx-cygnus-ui/validators';


@Component({
  selector: 'cygnus-card-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgxCygnusIconsComponent,
    CygnusInputComponent,
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
  ],
  templateUrl: './cygnus-card-login.component.html',
})
export class CygnusCardLoginComponent implements OnInit {

  TW_CLASS = TW_CLASS; // esto fue creado para reemplazar @apply de tailwind, ya la documentación de tailwind 4 recomienda no usar @apply y se dice que no funciona muy bien en angular.
  CYGNUS_LOGO_COLOR: string = '#cc5224';

  textRutHint = signal<string>('');
  inputRutColor = signal<InputColor>('base');

  textPassHint = signal<string>('');
  inputPassColor = signal<InputColor>('base');

  btnSubmitColor = signal<BtnCustomType>('btn-disabled');

  inputClearValue = signal<boolean>(false);

  nonNullableFb = inject(NonNullableFormBuilder);

  cardLoginForm = this.nonNullableFb.group({
    rut: ['',
      [Validators.required, cgRutValidator()]
    ],
    password: ['', [Validators.required]],
  });

  ngOnInit() {
    this.inputStatusManager();
    this.formStatusManager();
  }

  inputStatusManager() {
    this.cardLoginForm.get('rut')?.statusChanges.subscribe(status => {
      if (this.cardLoginForm.get('rut')?.errors) {
        this.inputRutColor.set('error');
        this.textRutHint.set('error');
      } else {
        this.inputRutColor.set('base');
        this.textRutHint.set('');
      }
    });
    this.cardLoginForm.get('password')?.statusChanges.subscribe(status => {
      if (this.cardLoginForm.get('password')?.errors) {
        this.inputPassColor.set('error');
        this.textPassHint.set('error');
      } else {
        this.inputPassColor.set('base');
        this.textPassHint.set('');
      }
    });
  }

  formStatusManager() {
    this.cardLoginForm.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        console.log('form valid');
        this.btnSubmitColor.set('btn-primary');
      } else {
        console.log('form no valid');
        this.btnSubmitColor.set('btn-disabled');
      }
    });
  }

  onSubmit() {
    if (this.btnSubmitColor()!=='btn-disabled') {
      console.log('onSubmit: ',this.cardLoginForm.value);
      this.inputClearValue.set(true);
      this.cardLoginForm.markAllAsTouched();
    }
  }

}
