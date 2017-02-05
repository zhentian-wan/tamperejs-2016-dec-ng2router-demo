
import {ResolverComponent} from "./resolver.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonDataResolver} from "./pokedata.resolver";

const routes: Routes = [
  {path: '', component: ResolverComponent, resolve: {
    pokeData: PokemonDataResolver
  }}
];

export default RouterModule.forChild(routes);
