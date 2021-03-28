import { Component, OnInit } from '@angular/core';
import { deliveryInfo, paymentInfo } from 'src/assets/_content/payments-delivery';

@Component({
  selector: 'app-payment-delivery',
  templateUrl: './payment-delivery.component.html',
  styleUrls: ['./payment-delivery.component.scss']
})
export class PaymentDeliveryComponent implements OnInit {
  public paymentInfo = paymentInfo;
  public deliveryInfo = deliveryInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
