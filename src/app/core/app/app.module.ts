import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { HomeModule } from '../../home/home.module';
import { AccountsModule } from '../../accounts';
import { ProjectsModule } from '../../projects';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { UserComponent } from '../toolbar/user.component';
import { AppComponent } from './app.component';

import { firebaseConfig, authConfig } from '../../../firebase-config';

@NgModule({
  declarations: [
    UserComponent,
    ToolbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    HomeModule,
    AccountsModule,
    ProjectsModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
