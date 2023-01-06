import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent,
  },
];

@NgModule({
  declarations: [PageOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [PageOneComponent],
})
export class PageOneModule {}
