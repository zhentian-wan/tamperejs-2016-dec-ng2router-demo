import { Component, OnInit, Inject, Input } from '@angular/core';
import {POKE_SERVICE} from "../../service/index";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: 'pokemon-detail.component.html',
  styleUrls: ['pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  id;
  pokemon;
  @Input('pokemon') data;
  constructor(private route: ActivatedRoute, @Inject(POKE_SERVICE) private pokeDataService) {
    this.route.params
      .map(p => p['id'])
      .subscribe((id) => {
        this.id = id;
        this.pokemon = pokeDataService
          .filter(p => Number(p.id) === Number(id))[0];
      });

  }

  ngOnInit() {
    if(this.data) {
      this.pokemon = this.data;
    }
  }
}
