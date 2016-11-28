import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import GuardsRoutes from './guards.routers';
import {GuardsComponent} from "./guards.component";
import { CanActivateComponent } from './can-activate/can-activate.component';
import { CanLoadComponent } from './can-load/can-load.component';
import {CanDeactivatedComponent} from "./can-deactivated/can-deactivated.component";
import SharedModule from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    GuardsRoutes,
    SharedModule
  ],
  declarations: [
    GuardsComponent,
    CanActivateComponent,
    CanLoadComponent,
    CanDeactivatedComponent
  ]
})
export default class GuardsModule { }
