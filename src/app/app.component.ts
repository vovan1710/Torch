import { fade } from './_animations/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent {
  title = 'Torch';
  public showBasketInfo: boolean;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const limit = $event.target.scrollTop/($event.target.scrollHeight - $event.target.offsetHeight);
    this.showBasketInfo = limit>0.1;
  }
}
