import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  alertSuccess = (message: string) => {
    Swal.fire('Success', message, 'success').then();
  };
  alertError = (message: string) => {
    Swal.fire('Error', message, 'error').then();
  };
}
