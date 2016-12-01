import { Component, OnInit } from '@angular/core';
import AuthService from "../../service/auth/auth.service";

@Component({
  selector: 'app-can-activate',
  templateUrl: './can-activate.component.html',
  styleUrls: ['./can-activate.component.css']
})
export class CanActivateComponent implements OnInit {
  canActive: boolean;
  constructor(private auth: AuthService) {
    this.canActive = this.auth.isAuth;
  }

  ngOnInit() {

  }

  toggleAuth(e: boolean){
    this.auth.setAuth(e['checked']);
  }

}
