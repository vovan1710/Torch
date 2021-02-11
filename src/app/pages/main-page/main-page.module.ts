import { ComponentsModule } from './../../components/components.module';
import { MainPageComponent } from './main-page.component';
import { CustomMaterialModule } from './../../@theme/custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    CarouselModule,
    ComponentsModule
  ],
  declarations: [
    MainPageComponent,
    Section1Component,
    Section2Component,
  ]
})
export class MainPageModule {}

