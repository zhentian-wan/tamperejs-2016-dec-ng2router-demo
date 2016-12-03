
import {CanLoad} from "../../../../node_modules/@angular/router/src/interfaces";
import {Route} from "../../../../node_modules/@angular/router/src/config";
import {Observable} from "../../../../node_modules/rxjs/Observable";
import AuthService from "../../service/auth/auth.service";
import {Injectable} from "../../../../node_modules/@angular/core/src/di/metadata";
@Injectable()
export class CanLoadPokemon implements CanLoad {

  constructor(private authService: AuthService) {

  }
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.authService.isAuth;
  }

}
