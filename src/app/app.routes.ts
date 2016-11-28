import {RouterModule} from "@angular/router";
import {E404Component} from "./shared/e404/e404.component";
import {PreviewComponent} from "./preview/preview.component";
import {PreviewLeftComponent} from "./preview/preview-left/preview-left.component";
import {PreviewDetailComponent} from "./preview/preview-detail/preview-detail.component";
const indexRoute = {path: '', redirectTo: 'home', pathMatch: 'full'};
const fallbackRoute = {path: '**', component: E404Component, data: {title: 'Page not found'}};

const routes = [
  {path: 'index', redirectTo: '/home', pathMatch: 'prefix'},
  {path: 'home', loadChildren: 'app/home/home.module', data: {title: 'Pokemon List'}},
  {path: 'guards', loadChildren: 'app/guards/guards.module', data: {title: 'Router Guards'}},
  {path: 'resolver', loadChildren: 'app/resolver/resolver.module', data: {title: 'Data Resolver'}},
 // {path: 'preview', loadChildren: 'app/preview/preview.module', data: {title: 'Preview Pokemon'}},
  { path: 'preview',
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
  indexRoute,
  fallbackRoute
];

export default RouterModule.forRoot(routes, {
 // enableTracing: true
});

