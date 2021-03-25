import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/_content/menu';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public info = menu;

  constructor() { }

  ngOnInit(): void {
  }

}
