import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import { SidenavComponent } from './shared/sidenav/sidenav.component';

// Import routes
import appRouts from './app.routes';
import { E404Component } from './shared/e404/e404.component';
import { HomeComponent } from './home/home.component';
import {SharedServiceModule} from "./service/index";
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonCardComponent } from './pokemon-list/pokemon-card/pokemon-card.component';
import {CapitalizePipe} from "./shared/pipes/capitalizePipes";


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    E404Component,
    HomeComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonCardComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedServiceModule.forRoot(),
    MaterialModule.forRoot(),
    appRouts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
