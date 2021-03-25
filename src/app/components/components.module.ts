import { CustomMaterialModule } from './../@theme/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangerComponent } from './lang-changer/lang-changer.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { LangPipe } from '../_pipes/lang.pipe';



@NgModule({
  declarations: [
    LangChangerComponent,
    ProductComponent,
    LangPipe
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule
  ],
  exports: [
    LangChangerComponent,
    ProductComponent,
    LangPipe
  ]
})
export class ComponentsModule { }
