import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeModule } from './home/home.module';
import { AccountsModule } from './accounts/accounts.module';

import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { AppComponent } from './app.component';

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
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
