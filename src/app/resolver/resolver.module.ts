import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResolverComponent} from "./resolver.component";
import ResolverRoutes from './resolver.routes';
import {PokemonDataResolver} from "./pokedata.resolver";
import SharedModule from "../shared/shared.module";

@NgModule({
  imports: [
    ResolverRoutes,
    SharedModule
  ],
  declarations: [
    ResolverComponent
  ],
  providers: [
    PokemonDataResolver
  ]
})
export default class ResolverModule { }
