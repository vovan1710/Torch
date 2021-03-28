import { TableSizeDialogComponent } from './../table-size-dialog/table-size-dialog.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from './../../_services/language.service';
import { ToastService } from './../../_services/toast.service';
import { fade } from './../../_animations/animations';
import { Product } from './../../_types/Product.interface';
import { BasketService } from './../../_services/basket.service';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { sizes } from 'src/assets/_content/sizes';
import { basketContent } from 'src/assets/_content/basket';
import { buttonsName } from 'src/assets/_content/global';

@Component({
  selector: 'app-product-info-dialog',
  templateUrl: './product-info-dialog.component.html',
  styleUrls: ['./product-info-dialog.component.scss'],
  animations: [fade]
})
export class ProductInfoDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') public carouselEl;
  public sizes = sizes;
  public showCarousel: boolean;
  public carouselOptions: OwlOptions = {
    loop: false,
    dots: false,
    autoWidth: true,
    nav: false,
    navText: ['', ''],
    margin: 30,
    items: 1
  };
  public actualImage = 1;
  public actualSize;
  public maxImages = new Array(3);
  public currency = '';
  public inBasketCount = 0;

  public basketContent = basketContent;
  public buttonsName = buttonsName;

  constructor(public dialogRef: MatDialogRef<ProductInfoDialogComponent>,
              private dialog: MatDialog,
              private basketService: BasketService,
              public toastService: ToastService,
              private languageService: LanguageService,
              @Inject (MAT_DIALOG_DATA) public product: Product) {
                this.currency = basketService.getCurrency();
                this.inBasketCount = basketService.checkProductsInBasket(this.product.id);
              }

  ngOnInit(): void {}

  imageChanged(event) {
    this.actualImage = event.startPosition + 1;
  }

  addToBasket() {
    if (this.actualSize) {
      this.toastService.success(this.basketContent.AddSuccess[this.languageService.getLang()]);
      this.basketService.addProductToBasket(this.product, this.actualSize);
      this.actualSize = '';
      this.inBasketCount = this.basketService.checkProductsInBasket(this.product.id);
      setTimeout(()=> {
        this.dialogRef.close(true)
      },500)

    } else {
      this.toastService.error(this.basketContent.AddError[this.languageService.getLang()])
    }
  }

  openTableDialog() {
    this.dialog.open(TableSizeDialogComponent, {});
  }

  ngAfterViewInit(): void {
    setTimeout(()=> {
      this.showCarousel = true;
    })
  }


}
