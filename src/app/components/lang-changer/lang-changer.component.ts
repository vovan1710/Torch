import { LanguageService } from './../../_services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-changer',
  templateUrl: './lang-changer.component.html',
  styleUrls: ['./lang-changer.component.scss']
})
export class LangChangerComponent implements OnInit {
  public language = '';

  constructor(private languageService: LanguageService) {
    this.language = languageService.getLang();
  }

  ngOnInit(): void {
  }

  setLanguage(newLanguage: string) {
    this.languageService.setLang(newLanguage);
    window.location.href = window.location.protocol;
  }

}
