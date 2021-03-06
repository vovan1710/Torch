import { mainSection1 } from '../../../_content/main-section1';
import { LanguageService } from './../../../_services/language.service';
import { Component, OnInit } from '@angular/core';

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
