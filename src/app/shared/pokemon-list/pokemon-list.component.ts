import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: 'pokemon-list.component.html',
  styleUrls: ['pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input('pokemons') pokemons;
  @Input('cols') cols;
  @Input('preview-mode') previewMode;
  @Output('preview-pokemon') previewPokemon = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  get pokemon() {
    return this.previewPokemon;
  }

  setPreviewPokemon(pokemon) {
    this.previewPokemon.emit(pokemon);
  }

  clearPreviewPokemon() {
    this.previewPokemon = null;
  }

}
