import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import { SidenavComponent } from './shared/sidenav/sidenav.component';

// Import routes
import appRouts from './app.routes';
import { E404Component } from './shared/e404/e404.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    E404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    appRouts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
