import { Component, OnInit } from '@angular/core';
import AuthService from "../service/auth/auth.service";

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit {

  toggle: boolean;
  constructor(private auth: AuthService) {
    this.toggle = this.auth.isAuth;
  }

  ngOnInit() {
  }

  toggleAuth(e: boolean){
    this.auth.setAuth(e['checked']);
  }

}
