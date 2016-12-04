import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
import {SidenavComponent} from './shared/sidenav/sidenav.component';

// Import routes
import AppRoutesModule from './app.routes';
import {E404Component} from './shared/e404/e404.component';
import {SharedServiceModule} from "./service/index";
import {PreviewLeftComponent} from "./preview/preview-left/preview-left.component";
import {PreviewDetailComponent} from "./preview/preview-detail/preview-detail.component";
import {PreviewComponent} from "./preview/preview.component";
import SharedModule from "./shared/shared.module";
import AuthService from "./service/auth/auth.service";
import {MdSnackBar} from "../../node_modules/@angular/material/snack-bar/snack-bar";
import {PreloadSelectedModuledsList} from "./shared/custom-preload";


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    E404Component,
    PreviewComponent,
    PreviewDetailComponent,
    PreviewLeftComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    SharedServiceModule.forRoot(),
    MaterialModule.forRoot(),
    AppRoutesModule
  ],
  providers: [
    AuthService,
    MdSnackBar,
    PreloadSelectedModuledsList
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
