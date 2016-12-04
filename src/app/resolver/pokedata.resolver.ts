
import {Resolve} from "../../../node_modules/@angular/router/src/interfaces";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "../../../node_modules/@angular/router/src/router_state";
import {POKE_SERVICE} from "../service/index";
import {Inject} from "../../../node_modules/@angular/core/src/di/metadata";
import {Observable} from "../../../node_modules/rxjs/Observable";
export class PokemonDataResolver implements Resolve<any> {
  constructor(
    @Inject(POKE_SERVICE) private pokemonDataService
  ){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.pokemonDataService;
  }

}
