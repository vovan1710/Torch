import { LanguageService } from './../../_services/language.service';
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
  public sizes = sizes;
  public actualImage = 1;
  public actualSize;
  public maxImages = new Array(3);
  public currency = '';
  public inBasketCount = 0;

  public basketContent = basketContent;
  public buttonsName = buttonsName;

  constructor(public dialogRef: MatDialogRef<ProductInfoDialogComponent>,
              private basketService: BasketService,
              public toastService: ToastService,
              private languageService: LanguageService,
              @Inject (MAT_DIALOG_DATA) public product: Product) {
                this.currency = basketService.getCurrency();
                this.inBasketCount = basketService.checkProductsInBasket(this.product.id);
              }

  ngOnInit(): void {
  }

  addToBasket() {
    if (this.actualSize) {
      this.toastService.success(this.basketContent.AddSuccess[this.languageService.getLang()]);
      this.basketService.addProductToBasket(this.product, this.actualSize);
      this.actualSize = '';
      this.inBasketCount = this.basketService.checkProductsInBasket(this.product.id);
    } else {
      this.toastService.error(this.basketContent.AddError[this.languageService.getLang()])
    }
    console.log('basket', this.basketService.getBasketList());
  }

}
