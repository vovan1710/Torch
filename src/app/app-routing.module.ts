import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'basket',
    component: BasketPageComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
