import {RouterModule} from "@angular/router";
import {PreviewDetailComponent} from "./preview-detail/preview-detail.component";
import {PreviewLeftComponent} from "./preview-left/preview-left.component";

const routes = [
  {
    path: '',
    component: PreviewLeftComponent
  },
  {
    path: ':id',
    outlet:'aux',
    component: PreviewDetailComponent
  }
];

export default RouterModule.forChild(routes);
