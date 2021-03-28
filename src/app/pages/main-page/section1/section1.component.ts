import { Component, OnInit } from '@angular/core';
import { mainSection1 } from 'src/assets/_content/main-section1';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  public text = mainSection1;

  constructor() {}

  ngOnInit(): void {
  }

}
