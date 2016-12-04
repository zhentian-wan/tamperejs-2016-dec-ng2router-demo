import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "../../../node_modules/@angular/router/src/router_state";

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.css']
})
export class ResolverComponent implements OnInit {
  pokemons;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(
      d => this.pokemons = d['pokeData']
    )
  }

  ngOnInit() {
  }

}
