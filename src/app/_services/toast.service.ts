import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: any) {
    this.snackBar.open(this.getErrorMessage(message), '✖', {
      duration: 5000,
      panelClass: ['error'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  success(message: string) {
    this.snackBar.open(message, '✔', {
      duration: 5000,
      panelClass: ['success'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  private getErrorMessage(error: any): string {
    let message = error;
    if (error.error) {
      const errorsArray = error.error.errors || [];
      if (errorsArray.length) {
        message = errorsArray[0].message || '';
      }
    }
    return message + '';
  }
}
