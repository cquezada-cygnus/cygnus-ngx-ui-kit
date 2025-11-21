import { Component, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { CygnusInputComponent } from 'ngx-cygnus-ui/components/input';
import { CygnusCheckboxComponent } from 'ngx-cygnus-ui/components/checkbox';
import { CygnusButtonComponent, CygnusButtonLinkComponent } from 'ngx-cygnus-ui/components/button';
import { CygnusAlertCounterBlockedComponent, } from 'ngx-cygnus-ui/components/alert';
import { cgEmail } from 'ngx-cygnus-ui/validators';
import { BtnCustomType, InputColor } from 'ngx-cygnus-ui/types';

@Component({
  selector: 'cygnus-login-01',
  imports: [
    ReactiveFormsModule,
    CygnusInputComponent,
    CygnusCheckboxComponent,
    CygnusButtonComponent,
    CygnusButtonLinkComponent,
    CygnusAlertCounterBlockedComponent,
  ],
  templateUrl: './cygnus-login-01.component.html',
})
export class CygnusLogin01Component implements OnInit {
  // assets/icons/svg/General/eye.svg
  // assets/icons/heroicons-outline/eye-slash.svg
  // assets/icons/svg/General/eye-off.svg

  openEye: string = 'assets/icons/svg/General/eye.svg';
  closedEye: string = 'assets/icons/heroicons-outline/eye-slash.svg';
  passPlaceholderHide: string = '••••••••';
  passPlaceholderShow: string = '-----';
  eyeIcon = signal<string>(this.closedEye);
  hidePassword = signal<boolean>(true);
  passPlaceholder = signal<string>(this.passPlaceholderHide);

  textEmailHint = signal<string>('');
  inputEmailColor = signal<InputColor>('base');

  textPassHint = signal<string>('');
  inputPassColor = signal<InputColor>('base');

  inputClearValue = signal<boolean>(false);
  inputDisabled = signal<boolean>(false);

  maxCounter = input<number>(3);
  tryCounter = input<number>(0);
  outputInfo = output<any>();

  btnSubmitColor = signal<BtnCustomType>('btn-disabled');

  nonNullableFb = inject(NonNullableFormBuilder);

  passwordSendHelpEvent = output<boolean>();
  btnAlertIsClickedEvent = output<boolean>();

  loginForm = this.nonNullableFb.group({
    email: ['',
      [Validators.required, cgEmail()]
    ],
    password: ['', [Validators.required]],
    rememberMe: [false, [Validators.required]],
  });

  constructor() {
    effect(() => {
      if (this.tryCounter()===this.maxCounter()) {
        this.inputClearValue.set(true);
        this.inputDisabled.set(true);
        this.btnSubmitColor.set('btn-disabled');
      }
    });
  }

  ngOnInit() {
    this.inputStatusManager();
    this.formStatusManager();
  }

  inputStatusManager() {
    this.loginForm.get('email')?.statusChanges.subscribe(status => {
      if (this.loginForm.get('email')?.errors) {
        this.inputEmailColor.set('error');
        if (this.loginForm.get('email')?.errors!['required']) {
          this.textEmailHint.set('Debe indicar un correo');
        } else if (this.loginForm.get('email')?.errors!['cgEmail']) {
          this.textEmailHint.set('El formato del correo es inválido');
        }
      } else {
        this.inputEmailColor.set('base');
        this.textEmailHint.set('');
      }
    });
    this.loginForm.get('password')?.statusChanges.subscribe(status => {
      if (this.loginForm.get('password')?.errors) {
        this.inputPassColor.set('error');
        this.textPassHint.set('Debe indicar una contraseña');
      } else {
        this.inputPassColor.set('base');
        this.textPassHint.set('');
      }
    });
  }

  formStatusManager() {
    this.loginForm.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.btnSubmitColor.set('btn-primary');
      } else {
        this.btnSubmitColor.set('btn-disabled');
      }
    });
  }

  onSubmit() {
    if (this.btnSubmitColor()!=='btn-disabled') {
      this.inputClearValue.set(true);
      this.loginForm.markAllAsTouched();
      this.outputInfo.emit(this.loginForm.value);
    }
  }

  toggleEyeIcon($event: string) {
    if ($event==='iconClicked') {
      if (this.eyeIcon()===this.closedEye) {
        this.hidePassword.set(false);
        this.passPlaceholder.set(this.passPlaceholderShow);
        this.eyeIcon.set(this.openEye);
      }
      else {
        this.hidePassword.set(true);
        this.passPlaceholder.set(this.passPlaceholderHide);
        this.eyeIcon.set(this.closedEye);
      }
    }
  }

  passwordSendHelp() {
    this.passwordSendHelpEvent.emit(true);
  }

  btnAlertClick($event: boolean) {
    this.btnAlertIsClickedEvent.emit($event);
  }

}
