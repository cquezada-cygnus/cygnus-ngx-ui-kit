import { Component, input, OnInit, output, signal } from '@angular/core';
import { TW_CLASS } from '../const/tailwind.const';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cygnus-toggle',
  imports: [],
  templateUrl: './cygnus-toggle.component.html',
})
export class CygnusToggleComponent implements OnInit {
  private static idCounter = 0;
  TW_CLASS = TW_CLASS;
  toggleId = signal<string>('');

  control = input<FormControl<boolean>>();

  ngOnInit() {
    // Generar ID único si no se proporciona
    this.toggleId.set(`cg-toggle-${++CygnusToggleComponent.idCounter}`);
  }

  setValue(value:boolean ) {
    this.control()?.setValue(value);
    this.control()?.markAsDirty();
    this.control()?.markAsTouched();
  }

}
