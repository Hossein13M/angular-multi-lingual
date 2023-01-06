import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './page-two.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageTwoComponent,
  },
];

@NgModule({
  declarations: [PageTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PageTwoComponent],
})
export class PageTwoModule {}
