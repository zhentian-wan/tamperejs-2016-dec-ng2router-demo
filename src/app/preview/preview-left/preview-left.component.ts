import {Component, OnInit, Input, Inject} from '@angular/core';
import {POKE_SERVICE} from "../../service/index";

@Component({
  selector: 'app-preview-left',
  templateUrl: 'preview-left.component.html',
  styleUrls: ['preview-left.component.css']
})
export class PreviewLeftComponent implements OnInit {

  constructor(@Inject(POKE_SERVICE) private pokemonDataService) { }

  ngOnInit() {
  }

}
