import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResolverComponent} from "./resolver.component";
import ResolverRoutes from './resolver.routes';

@NgModule({
  imports: [
    CommonModule,
    ResolverRoutes
  ],
  declarations: [
    ResolverComponent
  ]
})
export default class ResolverModule { }
