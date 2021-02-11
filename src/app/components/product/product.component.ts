import { BasketService } from './../../_services/basket.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() img = '';
  @Input() price = '';
  @Input() name = '';
  public currency = '';

  constructor(private basketService: BasketService) {
    this.currency = this.basketService.getCurrency();
  }

  ngOnInit(): void {
  }

}
