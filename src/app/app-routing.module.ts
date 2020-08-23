import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkNasdaqComponent } from './work-nasdaq/work-nasdaq.component'
const routes: Routes = [
  {
    path:  'work/nasdaq',
    component:  WorkNasdaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
