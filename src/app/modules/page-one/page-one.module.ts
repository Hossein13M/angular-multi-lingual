import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent,
  },
];

@NgModule({
  declarations: [PageOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslocoModule],
  exports: [PageOneComponent],
})
export class PageOneModule {}
