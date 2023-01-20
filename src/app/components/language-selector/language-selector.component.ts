import { Component } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  public languagesList: Array<
    Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>
  > = [
    {
      imgUrl: '/assets/images/Deutsch.png',
      code: 'de',
      name: 'German',
      shorthand: 'GER',
    },
    {
      imgUrl: '/assets/images/English.png',
      code: 'en',
      name: 'English',
      shorthand: 'ENG',
    },
  ];
  public changeLanguage(languageCode: string): void {
    console.log(languageCode);
  }
}
