import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import AuthService from "../../service/auth/auth.service";
import {Subject} from "rxjs/Subject";
import {MdSnackBar} from "../../../../node_modules/@angular/material/snack-bar/snack-bar";

@Injectable()
export default class ComponentCanActivate implements CanActivate {
  constructor(private auth: AuthService, private snackBar: MdSnackBar) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const sub = new Subject<boolean>();

    // mock auth service
    setTimeout(() => {

      sub.next(this.auth.isAuth);
      sub.complete();

      if(!this.auth.isAuth){
        this.snackBar.open('Can\'t activate component', 'OK');
      }
    }, 100);
    return sub;
  }

}
