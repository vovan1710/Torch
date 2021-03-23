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
  public products: Product[];

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.basketService.getGroupedBasketList();
  }

  get currency() {
    return this.basketService.getCurrency();
  }

  get totalPrice() {
    return this.basketService.getBasketPrice();
  }

  minusCount(product: Product) {
    this.basketService.deleteProductFromBasket(product);
    let changedProduct = this.products.find(prod=> prod.id === product.id && prod.size === product.size);
    changedProduct.count--;
    console.log(changedProduct)
    if (changedProduct.count === 0) {
      this.deleteProduct(product);
    }
  }

  plusCount(product: Product) {
    this.basketService.addProductToBasket(product, product.size);
    let changedProduct = this.products.find(prod=> prod.id === product.id && prod.size === product.size);
    changedProduct.count++;
  }

  deleteProduct(product: Product) {
    for (let i = 0; i < product.count; i++) {
      this.basketService.deleteProductFromBasket(product);
    }
    let index = this.products.findIndex(prod=> prod.id === product.id && prod.size === product.size);
    console.log(this.products);
    this.products.splice(index,1)
    console.log(this.products)
  }

}
