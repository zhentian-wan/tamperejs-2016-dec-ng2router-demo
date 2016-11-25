import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: 'pokemon-card.component.html',
  styleUrls: ['pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input('pokemon') pokemon;
  @Input('enable-preview') enablePreview;
  @Output() show = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  navToDetail(id){
    this.router.navigate([id], {relativeTo: this.route})
  }

  showPokemonDetail(pokemon) {

    this.show.emit(pokemon)

  }
}
