import { mainSection1 } from './../../../_content/mainSection1';
import { LanguageService } from './../../../_services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  public text = {
    title: '',
    descr: ''
  };

  constructor(public languageService: LanguageService) {
    this.text = mainSection1[languageService.getLang()];
  }

  ngOnInit(): void {
  }

}
