import {Component, OnInit, Inject} from '@angular/core';
import {POKE_SERVICE} from "../../service/index";
import {Router, ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/distinctUntilChanged";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-preview-left',
  templateUrl: 'preview-left.component.html',
  styleUrls: ['preview-left.component.css']
})
export class PreviewLeftComponent implements OnInit {

  setPokemon$ = new Subject();

  constructor(@Inject(POKE_SERVICE) private pokemonDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setPokemon$
      .debounceTime(300)
      .map((pokemon) => pokemon && pokemon['id'].toString())
      .filter((id) => !!id)
      .distinctUntilChanged()
      .subscribe(
        (id) => {
          this.router.navigate([{outlets: {aux: id}}], {relativeTo: this.route});
        }
      )
  }
}
