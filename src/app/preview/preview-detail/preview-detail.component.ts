import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-preview-detail',
  templateUrl: 'preview-detail.component.html',
  styleUrls: ['preview-detail.component.css']
})
export class PreviewDetailComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute) {
    route.params
      .map(p => p['id'])
      .subscribe((id) => {
        this.id = id;
      });
  }

  ngOnInit() {
  }

}
