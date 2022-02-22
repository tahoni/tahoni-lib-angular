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
    const invalidControls = Object.keys(this.form.controls).filter(
      (it) => this.form.controls[it].invalid
    );
    // Set focus to the first invalid control
    if (invalidControls.length > 0) {
      // Find the native element of the control
      const element = document.getElementById(invalidControls[0]);
      if (element) {
        element.focus();
      }
    }
  }
}
