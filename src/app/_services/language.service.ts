import { Injectable } from '@angular/core';

const langKey = 'Torch_lang';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private activeLang = 'UA';

  constructor() {
    if (localStorage.getItem(langKey)) {
      this.activeLang = localStorage.getItem(langKey)
    }
  }

  setLang(newLang: string) {
    localStorage.setItem(langKey, newLang);
    this.activeLang = newLang;
  }

  getLang() {
    return this.activeLang;
  }
}
