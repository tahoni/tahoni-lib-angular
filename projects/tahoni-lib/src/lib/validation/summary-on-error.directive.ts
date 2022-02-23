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
    const invalidControls = Object.keys(this.form.controls).filter(
      (it) => this.form.controls[it].invalid
    );
    // Build the list of validation messages for all invalid controls
    for (const invalidControl of invalidControls) {
      // Find the native element of the control
      const element = document.getElementById(invalidControl);

      // Get the validation message for the control
      if (element) {
        const invalidMessage =
          this.validateService.getValidationMessage(element);
        const elementLabel = document.querySelector(
          "label[for='" + invalidControl + "']"
        );
        // Style the validation message for the control
        const invalidHtmlMessage =
          (elementLabel ? elementLabel.textContent + ': ' : '') +
          '<span style="color: red">' +
          invalidMessage +
          '</span><br/>';
        validationMessage += invalidHtmlMessage;
      }
    }

    // Display the list of validation messages for all invalid controls
    if (validationMessage) {
      const element = document.getElementById(invalidControls[0]);
      if (element) {
        element.focus();
      }
      validationMessage =
        'Please fix the following errors:<br/>' + validationMessage;
      this.alertService.alertError(validationMessage);
    }
  }
}
