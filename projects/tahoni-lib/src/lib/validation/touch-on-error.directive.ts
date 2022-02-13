import { Directive, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[libTouchOnError]',
})
export class TouchOnErrorDirective {
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
    // Mark all invalid controls as touched
    for (const invalidControl of invalidControls) {
      invalidControl.markAsTouched();
    }
  }
}
