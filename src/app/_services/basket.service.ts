import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private currency = 'Грн';

  constructor() {
  }

  getCurrency() {
    return this.currency;
  }
}
