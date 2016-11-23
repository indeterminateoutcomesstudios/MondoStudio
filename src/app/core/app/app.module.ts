import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { HomeModule } from '../../home/home.module';
import { AccountsModule } from '../../accounts';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { AppComponent } from './app.component';

import { firebaseConfig, authConfig } from '../../../firebase-config';

@NgModule({
  declarations: [
    ToolbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AccountsModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
