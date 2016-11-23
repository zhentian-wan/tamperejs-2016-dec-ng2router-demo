import {Component, OnInit, Inject} from '@angular/core';
import {POKE_SERVICE} from "../service/index";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(POKE_SERVICE) private pokeDataService) { }

  ngOnInit() {
  }

}
