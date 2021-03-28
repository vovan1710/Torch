import { Product } from './../_types/Product.interface';
import { Injectable } from '@angular/core';
import { sets2 } from 'src/assets/_content/products-sets2';
import { singles } from 'src/assets/_content/products-singles';
import { sets1 } from 'src/assets/_content/products-sets1';

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

  getGroupedBasketList() {
    let basketList = this.getBasketList();
    let groupedList: Product[] = [];
    basketList.forEach((product: Product)=> {
      let sameProductIndex = groupedList.findIndex((prod)=> prod.id === product.id && prod.size === product.size);
      if (sameProductIndex>-1) {
        groupedList[sameProductIndex].count++;
        if (groupedList[sameProductIndex].dateAdded > product.dateAdded) {
          groupedList[sameProductIndex].dateAdded = product.dateAdded;
        }
      } else {
        product.count = 1;
        groupedList.push(product)
      }
    })
    groupedList.sort((d1, d2) => new Date(d1.dateAdded).getTime() - new Date(d2.dateAdded).getTime());
    return groupedList;
  }

  addProductToBasket(product: Product, size: string) {
    product.size = size;
    product.dateAdded = new Date();
    let basketList: Product[] = this.getBasketList();
    basketList.push(product);
    localStorage.setItem(KEY, JSON.stringify(basketList));
  }

  deleteProductFromBasket(product: Product) {
    let basketList: Product[] = this.getBasketList();
    const i = basketList.findIndex(pr=> pr.id === product.id && pr.size === product.size)
    const deletedProductDate = basketList[i].dateAdded;
    basketList.splice(i, 1);
    const nextI = basketList.findIndex(pr=> pr.id === product.id && pr.size === product.size);
    if (nextI > -1 && deletedProductDate < basketList[nextI]?.dateAdded) {
      basketList[nextI].dateAdded = deletedProductDate;
    }
    localStorage.setItem(KEY, JSON.stringify(basketList));
  }

  getBasketPrice() {
    let sum = 0;
    const basketList = this.getBasketList();
    basketList.forEach((product) => sum += +product.price)
    return sum;
  }
}
