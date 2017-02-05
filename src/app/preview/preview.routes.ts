import {RouterModule, Routes} from "@angular/router";
import {PreviewDetailComponent} from "./preview-detail/preview-detail.component";
import {PreviewLeftComponent} from "./preview-left/preview-left.component";
import {PokemonDetailComponent} from "../shared/pokemon-detail/pokemon-detail.component";

const routes: Routes= [
  {
    path: '',
    component: PreviewLeftComponent
  },
  {
    path: ':id',
    component: PokemonDetailComponent
  },
  {
    path: ':id',
    outlet:'aux',
    component: PreviewDetailComponent
  }
];

export default RouterModule.forChild(routes);
