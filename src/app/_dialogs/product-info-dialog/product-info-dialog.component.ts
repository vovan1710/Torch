import { ToastService } from './../../_services/toast.service';
import { fade } from './../../_animations/animations';
import { sizes } from './../../_content/sizes';
import { Product } from './../../_types/Product.interface';
import { BasketService } from './../../_services/basket.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-info-dialog',
  templateUrl: './product-info-dialog.component.html',
  styleUrls: ['./product-info-dialog.component.scss'],
  animations: [fade]
})
export class ProductInfoDialogComponent implements OnInit {
  public sizes = sizes;
  public actualImage = 1;
  public actualSize;
  public maxImages = new Array(3);
  public currency = '';

  constructor(public dialogRef: MatDialogRef<ProductInfoDialogComponent>,
              private basketService: BasketService,
              public toastService: ToastService,
              @Inject (MAT_DIALOG_DATA) public product: Product) {
                this.currency = basketService.getCurrency();
              }

  ngOnInit(): void {
  }

  addToBasket() {
    if (this.actualSize) {
      this.toastService.success('Товар добавлен в корзину!')
      this.basketService.addProductToBasket(this.product, this.actualSize);
      this.actualSize = '';
    } else {
      this.toastService.error('Не выбран размер!')
    }
    console.log('basket', this.basketService.getBasketList());
  }

}
