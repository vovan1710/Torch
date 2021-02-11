import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule
   ],
})
export class CustomMaterialModule {}

