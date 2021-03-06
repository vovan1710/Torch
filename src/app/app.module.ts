import { DialogsModule } from './_dialogs/dialogs.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { ComponentsModule } from './components/components.module';
import { CustomMaterialModule } from './@theme/custom-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MainPageModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
