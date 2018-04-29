import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSharedModule } from './shared';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { AuthPage, AuthService, AuthModule } from './auth';
import { HomePage } from './home/home.page';

@NgModule({
  declarations: [
    AuthPage,
    HomePage,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppSharedModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
