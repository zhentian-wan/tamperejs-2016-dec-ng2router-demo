
import {NgModule, OpaqueToken} from "@angular/core";
import {pokemonData} from "../shared/data";
import ComponentCanActivate from "../shared/guards/CanActivate.guard";
import CanComponentDeactivate from "../shared/guards/CanDeactivated.guard";
import {CanLoadPokemon} from "../shared/guards/CanLoad.guard";

const POKE_SERVICE = new OpaqueToken('poke_service');

@NgModule({})
export class SharedServiceModule {
  static forRoot(){
    return {
      ngModule: SharedServiceModule,
      providers: [
        {provide: POKE_SERVICE, useValue: pokemonData},
        ComponentCanActivate,
        CanComponentDeactivate,
        CanLoadPokemon
      ]
    }
  }
};

export {
  POKE_SERVICE
}


