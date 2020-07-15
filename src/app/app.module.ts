import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { ExperianComponent } from './experian/experian.component';
import { HomeComponent } from './home/home.component';

import { Router } from '@angular/router';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { NasdaqComponent } from './nasdaq/nasdaq.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperianComponent,
    HomeComponent,
    NasdaqComponent
  ],
  imports: [
    RouterModule.forRoot(
      [{
        path: '',
        component: HomeComponent
      },
      {
        path: 'experian',
        component: ExperianComponent
      },
      {
        path: 'nasdaq',
        component: NasdaqComponent
      }
    ]
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }