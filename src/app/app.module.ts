import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LogoComponent } from './logo.component';
import { LogoLeftComponent } from './logo-left.component';

@NgModule({
  declarations: [
    AppComponent, LogoComponent, LogoLeftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
