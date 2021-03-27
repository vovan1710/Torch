import { checkoutContent } from './../../_content/checkout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public checkoutContent = checkoutContent;

  constructor() { }

  ngOnInit(): void {
  }

}
