import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogsModule } from './_dialogs/dialogs.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { ComponentsModule } from './components/components.module';
import { CustomMaterialModule } from './@theme/custom-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PaymentDeliveryComponent } from './pages/payment-delivery/payment-delivery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketPageComponent,
    CheckoutComponent,
    FooterComponent,
    ContactComponent,
    PaymentDeliveryComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MainPageModule,
    DialogsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
