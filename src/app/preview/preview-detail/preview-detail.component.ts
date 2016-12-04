import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import {POKE_SERVICE} from "../../service/index";

@Component({
  selector: 'app-preview-detail',
  templateUrl: 'preview-detail.component.html',
  styleUrls: ['preview-detail.component.css']
})
export class PreviewDetailComponent implements OnInit {

  id;
  pokemon;
  constructor(private route: ActivatedRoute,
              @Inject(POKE_SERVICE) private pokemonDataService
  ) {
    route.params
      .map((p) => p['id'])
      .startWith(1)
      .subscribe((id) => {
      console.log("id", id);
        this.id = id;
      });
  }

  ngOnInit() {
    this.pokemon = this.pokemonDataService
      .filter(p => p.id === this.id)[0];
  }
}
