import {RouterModule} from "@angular/router";
import {E404Component} from "./shared/e404/e404.component";
import {HomeComponent} from "./home/home.component";
const indexRoute = {path: '', redirectTo: 'home', pathMatch: 'full'};
const fallbackRoute = {path: '**', component: E404Component};

const routes = [
  {path: 'index', redirectTo: '/home', pathMatch: 'prefix'},
  {path: 'home', component: HomeComponent},
  indexRoute,
  fallbackRoute
];

export default RouterModule.forRoot(routes);

