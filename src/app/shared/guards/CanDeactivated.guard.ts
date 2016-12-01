import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export default class CanComponentDeactivate implements CanDeactivate<any>{
  canDeactivate(component: any,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean>|boolean {

    return component.canDeactivate();
  }
}
