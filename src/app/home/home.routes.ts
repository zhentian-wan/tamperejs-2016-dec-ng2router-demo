
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {PokemonDetailComponent} from "../shared/pokemon-detail/pokemon-detail.component";
const routes = [
  {path: '', component: HomeComponent},
  {path: ':id', component: PokemonDetailComponent}
];

export default RouterModule.forChild(routes);
