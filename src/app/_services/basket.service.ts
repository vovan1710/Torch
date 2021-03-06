import { Product } from './../_types/Product.interface';
import { singles } from './../_content/products-singles';
import { sets2 } from './../_content/products-sets2';
import { sets1 } from './../_content/products-sets1';
import { Injectable } from '@angular/core';

let KEY = 'torch_basket_key'

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public allProducts = sets1.concat(sets2).concat(singles);
  private currency = 'Грн';

  constructor() {
  }

  getCurrency() {
    return this.currency;
  }


  getProductById(id: string) {
    return this.allProducts.find(product => product.id === id);
  }

  checkProductsInBasket(id: string) {
    return this.getBasketList().filter(product=> product.id ===id).length;
  }

  getBasketList() {
    const basketList: Product[] = JSON.parse(localStorage.getItem(KEY))? JSON.parse(localStorage.getItem(KEY)) : [];
    return basketList;
  }

  addProductToBasket(product: Product, size: string) {
    product.size = size;
    let basketList: Product[] = this.getBasketList();
    basketList.push(product);
    localStorage.setItem(KEY, JSON.stringify(basketList));
  }

  deleteProductFromBasket(productId: string) {
    let basketList: Product[] = this.getBasketList();
    const i = basketList.findIndex(pr=> pr.id === productId)
    basketList.splice(i, 1);
    localStorage.setItem(KEY, JSON.stringify(basketList));
  }
}
