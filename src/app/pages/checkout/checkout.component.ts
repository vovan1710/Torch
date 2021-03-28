import { Component, OnInit } from '@angular/core';
import { checkoutContent } from 'src/assets/_content/checkout';

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
