
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";
import {PokemonCardComponent} from "./pokemon-list/pokemon-card/pokemon-card.component";
import {CapitalizePipe} from "./pipes/capitalizePipes";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    CapitalizePipe
  ]
})
export default class SharedModule {}
