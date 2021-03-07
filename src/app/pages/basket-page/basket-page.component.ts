import { Product } from './../../_types/Product.interface';
import { BasketService } from './../../_services/basket.service';
import { Component, OnInit } from '@angular/core';
import { basketContent } from 'src/app/_content/basket';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {
  public basketContent = basketContent;

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
  }

  get products () {
    return this.basketService.getGroupedBasketList();
  }

  get currency() {
    return this.basketService.getCurrency();
  }

  get totalPrice() {
    return this.basketService.getBasketPrice();
  }

  minusCount(product: Product) {
    this.basketService.deleteProductFromBasket(product);
  }

  plusCount(product: Product) {
    this.basketService.addProductToBasket(product, product.size);
  }

  deleteProduct(product: Product) {
    for (let i = 0; i < product.count; i++) {
      this.basketService.deleteProductFromBasket(product);
    }
  }

}
