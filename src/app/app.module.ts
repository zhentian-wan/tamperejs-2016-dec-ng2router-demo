import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
import {SidenavComponent} from './shared/sidenav/sidenav.component';

// Import routes
import appRouts from './app.routes';
import {E404Component} from './shared/e404/e404.component';
import {SharedServiceModule} from "./service/index";
import SharedModule from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedServiceModule.forRoot(),
    MaterialModule.forRoot(),
    appRouts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
