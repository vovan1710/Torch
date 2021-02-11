import { CustomMaterialModule } from './../@theme/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangerComponent } from './lang-changer/lang-changer.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    LangChangerComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule
  ],
  exports: [
    LangChangerComponent,
    ProductComponent
  ]
})
export class ComponentsModule { }
