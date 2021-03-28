import { carouselOptions } from './../../../_types/global.config';
import { Component, OnInit } from '@angular/core';
import { mainSection3 } from 'src/assets/_content/main-section3';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  public data = mainSection3;
  public carouselOptions = carouselOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
