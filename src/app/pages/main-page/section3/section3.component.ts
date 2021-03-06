import { mainSection3 } from './../../../_content/main-section3';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  public data = mainSection3;

  constructor() { }

  ngOnInit(): void {
  }

}
