import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './page-two.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

const routes: Routes = [
  {
    path: '',
    component: PageTwoComponent,
  },
];

@NgModule({
  declarations: [PageTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule],
  exports: [PageTwoComponent],
})
export class PageTwoModule {}
