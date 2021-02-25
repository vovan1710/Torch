import { ComponentsModule } from './../components/components.module';
import { CustomMaterialModule } from './../@theme/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoDialogComponent } from './product-info-dialog/product-info-dialog.component';



@NgModule({
  declarations: [ProductInfoDialogComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ComponentsModule
  ]
})
export class DialogsModule { }
