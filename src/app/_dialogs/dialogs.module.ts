import { CarouselModule } from 'ngx-owl-carousel-o';
import { ComponentsModule } from './../components/components.module';
import { CustomMaterialModule } from './../@theme/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoDialogComponent } from './product-info-dialog/product-info-dialog.component';
import { TableSizeDialogComponent } from './table-size-dialog/table-size-dialog.component';



@NgModule({
  declarations: [ProductInfoDialogComponent, TableSizeDialogComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ComponentsModule,
    CarouselModule,
  ]
})
export class DialogsModule { }
