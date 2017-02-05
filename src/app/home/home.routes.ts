
import {HomeComponent} from "./home.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonDetailComponent} from "../shared/pokemon-detail/pokemon-detail.component";
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':id', component: PokemonDetailComponent}
];

export default RouterModule.forChild(routes);
