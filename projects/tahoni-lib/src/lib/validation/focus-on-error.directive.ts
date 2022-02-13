import { Directive, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[libFocusOnError]',
})
export class FocusOnErrorDirective {
  private form: NgForm;

  constructor(form: NgForm) {
    this.form = form;
  }

  @HostListener('ngSubmit')
  onFormSubmit() {
    // Find all invalid controls
    const invalidControls = Object.values(this.form.controls).filter(
      (control) => control.invalid
    );
    // Set focus to the first invalid control
    if (invalidControls.length > 0) {
      invalidControls[0].value.focus();
    }
  }
}
