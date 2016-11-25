import {RouterModule} from "@angular/router";
import {PreviewDetailComponent} from "./preview-detail/preview-detail.component";
import {PreviewLeftComponent} from "./preview-left/preview-left.component";
import {PreviewComponent} from "./preview.component";
import {PokemonDetailComponent} from "../shared/pokemon-detail/pokemon-detail.component";
import {PreviewTestComponent} from "./preview-test/preview-test.component";
const routes = [
  { path: '',
    component: PreviewComponent,
    children: [
      {
        path: '',
        component: PreviewLeftComponent
      },
      {
        path: '',
        component: PreviewDetailComponent,
        outlet: 'aux'
      },
      {
        path: ':id',
        component: PreviewDetailComponent,
        outlet: 'aux'
      }
  ]},

];

export default RouterModule.forChild(routes);
