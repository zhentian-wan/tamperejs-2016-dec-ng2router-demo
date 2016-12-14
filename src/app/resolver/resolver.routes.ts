
import {ResolverComponent} from "./resolver.component";
import {RouterModule} from "@angular/router";
import {PokemonDataResolver} from "./pokedata.resolver";

const routes = [
  {path: '', component: ResolverComponent, resolve: {
    pokeData: PokemonDataResolver
  }}
];

export default RouterModule.forChild(routes);
