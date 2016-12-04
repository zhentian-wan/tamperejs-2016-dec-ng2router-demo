import {NgModule} from '@angular/core';
import previewRoutes from './preview.routes';
import {PreviewDetailComponent} from "./preview-detail/preview-detail.component";
import {PreviewLeftComponent} from "./preview-left/preview-left.component";
import SharedModule from "../shared/shared.module";

@NgModule({
  imports: [
    previewRoutes,
    SharedModule
  ],
  declarations: [
    PreviewDetailComponent,
    PreviewLeftComponent
  ]
})
export default class PreviewModule {
}
