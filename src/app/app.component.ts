import { BasketService } from './_services/basket.service';
import { fade } from './_animations/animations';
import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { menu } from 'src/assets/_content/menu';
import { basketContent } from 'src/assets/_content/basket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent {
  @ViewChild('content', { static: true }) content: any;
  title = 'Torch';
  public showBasketInfo: boolean;
  public menu = menu;
  public basketInfo = basketContent.haederInfo;

  constructor(public basketService: BasketService,
              private route: ActivatedRoute,
              public router: Router) {
                this.router.events.subscribe((val) => {
                  if (val instanceof NavigationEnd) {
                    this.content.elementRef.nativeElement.scrollTop = 0;
                  }
                });
              }

  get basketCount() {
    return this.basketService.getBasketList().length;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const limit = $event.target.scrollTop/($event.target.scrollHeight - $event.target.offsetHeight);
    const actualPage = this.route.snapshot['_routerState']?.url;
    this.showBasketInfo = limit>0.1&&actualPage.includes('main');
  }
}
