import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector.component';

@NgModule({
  declarations: [LanguageSelectorComponent],
  exports: [LanguageSelectorComponent],
  imports: [CommonModule],
})
export class LanguageSelectorModule {}
