import { LanguageService } from './../_services/language.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langPipe'
})
export class LangPipe implements PipeTransform {

    transform(obj: any) {
      const languageService = new LanguageService();
      const lang = languageService.getLang();
      return obj[lang];
    }

}
