import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { ExperianComponent } from './experian/experian.component';
import { HomeComponent, DialogExperian } from './home/home.component';

import { Router } from '@angular/router';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { NasdaqComponent } from './nasdaq/nasdaq.component';
import { MatInputModule } from '@angular/material';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { MainComponent } from './main/main.component';
import { WorkNasdaqComponent } from './work-nasdaq/work-nasdaq.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperianComponent,
    HomeComponent,
    DialogExperian,
    NasdaqComponent,
    ContactPanelComponent,
    MainComponent,
    WorkNasdaqComponent
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
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    DialogExperian
  ],
  entryComponents: [
    DialogExperian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
