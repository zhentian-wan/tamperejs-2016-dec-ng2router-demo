import { NgModule } from '@angular/core';
import homeRouter from './home.routes';
import {HomeComponent} from "./home.component";
import SharedModule from "../shared/shared.module";

@NgModule({
  imports: [
    homeRouter,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export default class HomeModule { }
