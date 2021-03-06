import { buttonsName } from './../../_content/global';
import { ToastService } from './../../_services/toast.service';
import { fade } from './../../_animations/animations';
import { sizes } from './../../_content/sizes';
import { Product } from './../../_types/Product.interface';
import { BasketService } from './../../_services/basket.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { basketContent } from 'src/app/_content/basket';

@Component({
  selector: 'app-product-info-dialog',
  templateUrl: './product-info-dialog.component.html',
  styleUrls: ['./product-info-dialog.component.scss'],
  animations: [fade]
})
export class ProductInfoDialogComponent implements OnInit {
  public buttonsName = buttonsName;
  public sizes = sizes;
  public actualImage = 1;
  public actualSize;
  public maxImages = new Array(3);
  public currency = '';
  public inBasketCount = 0;

  public basketContent = basketContent;

  constructor(public dialogRef: MatDialogRef<ProductInfoDialogComponent>,
              private basketService: BasketService,
              public toastService: ToastService,
              @Inject (MAT_DIALOG_DATA) public product: Product) {
                this.currency = basketService.getCurrency();
                this.inBasketCount = basketService.checkProductsInBasket(this.product.id);
              }

  ngOnInit(): void {
  }

  addToBasket() {
    if (this.actualSize) {
      this.toastService.success('Товар добавлен в корзину!')
      this.basketService.addProductToBasket(this.product, this.actualSize);
      this.actualSize = '';
      this.inBasketCount = this.basketService.checkProductsInBasket(this.product.id);
    } else {
      this.toastService.error('Не выбран размер!')
    }
    console.log('basket', this.basketService.getBasketList());
  }

}
