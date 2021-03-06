import { BasketService } from './_services/basket.service';
import { fade } from './_animations/animations';
import { Component, HostListener } from '@angular/core';
import { basketContent } from './_content/basket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent {
  title = 'Torch';
  public showBasketInfo: boolean;

  constructor(public basketService: BasketService) {}

  get basketCount() {
    return this.basketService.getBasketList().length;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const limit = $event.target.scrollTop/($event.target.scrollHeight - $event.target.offsetHeight);
    this.showBasketInfo = limit>0.1;
  }
}
