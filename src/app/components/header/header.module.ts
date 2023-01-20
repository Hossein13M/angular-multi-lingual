import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, LanguageSelectorModule, TranslocoModule],
})
export class HeaderModule {}
