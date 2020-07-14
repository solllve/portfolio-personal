import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperianComponent } from './experian/experian.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'work/experian',
    component: ExperianComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
