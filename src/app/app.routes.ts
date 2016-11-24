import {RouterModule} from "@angular/router";
import {E404Component} from "./shared/e404/e404.component";
const indexRoute = {path: '', redirectTo: 'home', pathMatch: 'full'};
const fallbackRoute = {path: '**', component: E404Component, data: {title: 'Page not found'}};

const routes = [
  {path: 'index', redirectTo: '/home', pathMatch: 'prefix'},
  {path: 'home', loadChildren: 'app/home/home.module', data: {title: 'Pokemon List'}},
  {path: 'preview', loadChildren: 'app/preview/preview.module', data: {title: 'Preview Pokemon'}},
  indexRoute,
  fallbackRoute
];

export default RouterModule.forRoot(routes, {
 // enableTracing: true
});

