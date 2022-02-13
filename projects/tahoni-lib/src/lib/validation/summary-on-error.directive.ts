import { Directive, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValidateService } from './validate.service';
import { AlertService } from '../message/alert.service';

@Directive({
  selector: '[libSummaryOnError]',
})
export class SummaryOnErrorDirective {
  private form: NgForm;
  private validateService: ValidateService;
  private alertService: AlertService;

  constructor(
    form: NgForm,
    validateService: ValidateService,
    alertService: AlertService
  ) {
    this.form = form;
    this.alertService = alertService;
    this.validateService = validateService;
  }

  @HostListener('ngSubmit')
  onFormSubmit() {
    // Initialise the list of validation messages for all invalid controls
    let validationMessage = '';

    // Find all invalid controls
    const invalidControls = Object.values(this.form.controls).filter(
      (control) => control.invalid
    );
    // Build the list of validation messages for all invalid controls
    for (const invalidControl of invalidControls) {
      // Find the validation message for the control
      const invalidMessage =
        this.validateService.getValidationMessage(invalidControl);
      // Style the validation message for the control
      const invalidHtmlMessage =
        invalidControl.value.label +
        '<span style="color: red">' +
        invalidMessage +
        '</span><br/>';
      validationMessage += invalidHtmlMessage;
    }

    // Display the list of validation messages for all invalid controls
    if (validationMessage) {
      invalidControls[0].value.focus();
      validationMessage =
        'Please fix the following errors:<br/>' + validationMessage;
      this.alertService.alertError(validationMessage);
    }
  }
}
