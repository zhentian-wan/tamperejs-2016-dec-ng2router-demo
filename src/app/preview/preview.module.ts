import {NgModule} from '@angular/core';
import previewRoutes from './preview.routes';
import {PreviewComponent} from "./preview.component";
import {PreviewDetailComponent} from "./preview-detail/preview-detail.component";
import {PreviewLeftComponent} from "./preview-left/preview-left.component";
import SharedModule from "../shared/shared.module";
import {PreviewTestComponent} from "./preview-test/preview-test.component";

@NgModule({
  imports: [
    previewRoutes,
    SharedModule
  ],
  declarations: [
    PreviewComponent,
    PreviewDetailComponent,
    PreviewLeftComponent,
    PreviewTestComponent
  ]
})
export default class PreviewModule {
}
