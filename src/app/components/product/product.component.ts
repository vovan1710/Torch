import { buttonsName } from './../../_content/global';
import { Product } from './../../_types/Product.interface';
import { ProductInfoDialogComponent } from './../../_dialogs/product-info-dialog/product-info-dialog.component';
import { LanguageService } from './../../_services/language.service';
import { BasketService } from './../../_services/basket.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  public currency = '';
  public inBasketCount = 0;

  public buttonsName = buttonsName;

  constructor(private basketService: BasketService,
              private dialog: MatDialog) {
    this.currency = this.basketService.getCurrency();
  }

  ngOnInit(): void {
  }

  openProduct() {
    const productDialog = this.dialog.open(ProductInfoDialogComponent, {
      disableClose: false,
      data: this.product,
      width: '900px',
      panelClass: 'product-dialog',
    });
    productDialog.afterClosed().subscribe((res)=> {
      this.inBasketCount = this.basketService.checkProductsInBasket(this.product?.id);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inBasketCount = this.basketService.checkProductsInBasket(this.product?.id);
  }

}
