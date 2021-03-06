import { mainSection2 } from '../../../_content/main-section2';
import { LanguageService } from './../../../_services/language.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  public data = mainSection2;

  options: OwlOptions = {
    loop: false,
    dots: false,
    autoWidth: true,
    nav: false,
    navText: ['', ''],
    margin: 30
  };

  constructor() {}

  ngOnInit(): void {
  }

}
