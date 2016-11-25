import {Component, OnInit, Input, Inject, ViewChild} from '@angular/core';
import {POKE_SERVICE} from "../../service/index";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-preview-left',
  templateUrl: 'preview-left.component.html',
  styleUrls: ['preview-left.component.css']
})
export class PreviewLeftComponent implements OnInit {

  constructor(@Inject(POKE_SERVICE) private pokemonDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  setPreviewPokemon(pokemon){
    const path = pokemon.id.toString();
    this.router.navigate([{outlets: {aux: path}}], {relativeTo: this.route});
  }
}
