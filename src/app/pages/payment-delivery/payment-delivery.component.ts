import { deliveryInfo, paymentInfo } from './../../_content/payments-delivery';
import { Component, OnInit } from '@angular/core';

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
