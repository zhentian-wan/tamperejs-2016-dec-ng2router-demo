import {RouterModule} from '@angular/router';
import {GuardsComponent} from "./guards.component";
import {CanActivateComponent} from "./can-activate/can-activate.component";
import {CanLoadComponent} from "./can-load/can-load.component";
import {CanDeactivatedComponent} from "./can-deactivated/can-deactivated.component";
import ComponentCanActivate from "../shared/guards/CanActivate.guard";
import CanComponentDeactivate from "../shared/guards/CanDeactivated.guard";
const routers = [
  {
    path: '', component: GuardsComponent, children: [
    {path: 'can-activate', component: CanActivateComponent, canActivate: [ComponentCanActivate]},
    {path: 'can-deactivated', component: CanDeactivatedComponent, canDeactivate: [CanComponentDeactivate]},
    {path: 'can-load', component: CanLoadComponent},
    {path: '', redirectTo: '/guards/can-activate', pathMatch: 'full'},
  ]
  }
];

export default RouterModule.forChild(routers);
