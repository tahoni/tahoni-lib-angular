import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor() {}

  getValidationMessage(element: HTMLElement): string {
    // Find the invalid control
    let invalidMessage = '';
    const invalidElement = element;

    // Get the validation message of the invalid control, if any
    if (invalidElement instanceof HTMLButtonElement) {
      invalidMessage = (invalidElement as HTMLButtonElement).validationMessage;
    } else if (invalidElement instanceof HTMLFieldSetElement) {
      invalidMessage = (invalidElement as HTMLFieldSetElement)
        .validationMessage;
    } else if (invalidElement instanceof HTMLInputElement) {
      invalidMessage = (invalidElement as HTMLInputElement).validationMessage;
    } else if (invalidElement instanceof HTMLOutputElement) {
      invalidMessage = (invalidElement as HTMLOutputElement).validationMessage;
    } else if (invalidElement instanceof HTMLSelectElement) {
      invalidMessage = (invalidElement as HTMLSelectElement).validationMessage;
    } else if (invalidElement instanceof HTMLTextAreaElement) {
      invalidMessage = (invalidElement as HTMLTextAreaElement)
        .validationMessage;
    }

    // Return the validation message of the invalid control
    return invalidMessage;
  }
}
