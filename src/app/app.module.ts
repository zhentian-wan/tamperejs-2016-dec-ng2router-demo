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
import { PreviewTestComponent } from './preview/preview-test/preview-test.component';
import {PreviewLeftComponent} from "./preview/preview-left/preview-left.component";
import {PreviewDetailComponent} from "./preview/preview-detail/preview-detail.component";
import {PreviewComponent} from "./preview/preview.component";
import SharedModule from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    E404Component,
    PreviewComponent,
    PreviewDetailComponent,
    PreviewLeftComponent,
    PreviewTestComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
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
