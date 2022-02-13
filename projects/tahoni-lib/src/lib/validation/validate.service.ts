import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor() {}

  getValidationMessage(invalidElement: AbstractControl): string {
    // Get the validation message of the invalid control
    return invalidElement.value.validationMessage;
  }
}
