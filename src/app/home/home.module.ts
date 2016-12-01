import { NgModule } from '@angular/core';
import HomeRoutesModule from './home.routes';
import {HomeComponent} from "./home.component";
import SharedModule from "../shared/shared.module";

@NgModule({
  imports: [
    HomeRoutesModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export default class HomeModule { }
