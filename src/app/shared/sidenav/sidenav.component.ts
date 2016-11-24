import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nav(event, path) {
    event.preventDefault();
    this.router.navigate([{outlets: {primary: 'preview', aux: 'aux'}}])
  }
}
