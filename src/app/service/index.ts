
import {NgModule, OpaqueToken} from "@angular/core";
import {pokemonData} from "../shared/data";

const POKE_SERVICE = new OpaqueToken('poke_service');

@NgModule({})
export class SharedServiceModule {
  static forRoot(){
    return {
      ngModule: SharedServiceModule,
      providers: [
        {provide: POKE_SERVICE, useValue: pokemonData}
      ]
    }
  }
};

export {
  POKE_SERVICE
}


