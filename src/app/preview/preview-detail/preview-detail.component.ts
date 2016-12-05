import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
              private router: Router,
              @Inject(POKE_SERVICE) private pokemonDataService
  ) {
    route.params
      .map((p) => p['id'])
      .startWith(1)
      .subscribe((id) => {
        this.id = id;
      });
  }

  ngOnInit() {
    this.pokemon = this.pokemonDataService
      .filter(p => p.id === this.id)[0];
  }

  previous() {
    if(this.id && Number(this.id) > 1){
      const id = Number(this.id) - 1;
      this.router.navigate(['/preview', {outlets: {aux: `${id}`}}]);
    }
  }

  next() {
    if(this.id && Number(this.id) < this.pokemonDataService.length){
      const id = Number(this.id) + 1;
      this.router.navigate(['/preview', {outlets: {aux: `${id}`}}]);
    }
  }
}
