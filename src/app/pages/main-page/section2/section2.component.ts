import { carouselOptions } from './../../../_types/global.config';
import { LanguageService } from './../../../_services/language.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { mainSection2 } from 'src/assets/_content/main-section2';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  public data = mainSection2;
  public carouselOptions = carouselOptions;

  constructor() {}

  ngOnInit(): void {
  }

}
