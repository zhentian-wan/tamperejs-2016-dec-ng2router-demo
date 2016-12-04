import {RouterModule, PreloadAllModules} from "@angular/router";
import {E404Component} from "./shared/e404/e404.component";
import {CanLoadPokemon} from "./shared/guards/CanLoad.guard";
import {PreloadSelectedModuledsList} from "./shared/custom-preload";
const indexRoute = {path: '', redirectTo: 'home', pathMatch: 'full'};
const fallbackRoute = {path: '**', component: E404Component, data: {title: 'Page not found'}};

const routes = [
  {path: 'index', redirectTo: '/home', pathMatch: 'prefix'},
  {path: 'home', loadChildren: 'app/home/home.module', data: {title: 'Pokemon List', preload: true}, canLoad: [CanLoadPokemon]},
  {path: 'guards', loadChildren: 'app/guards/guards.module', data: {title: 'Router Guards', preload: true}},
  {path: 'resolver', loadChildren: 'app/resolver/resolver.module', data: {title: 'Data Resolver'}},
  {path: 'preview', loadChildren: 'app/preview/preview.module'},
  indexRoute,
  fallbackRoute
];

export default RouterModule.forRoot(routes, {
 // preloadingStrategy: PreloadAllModules
  preloadingStrategy: PreloadSelectedModuledsList
});

