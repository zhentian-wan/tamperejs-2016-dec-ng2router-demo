import {Injectable} from '@angular/core';
@Injectable()
export default class AuthService {

  auth: boolean = true;
  constructor() {

  }

  get isAuth() {
    return this.auth;
  }

  setAuth(auth) {
    this.auth = auth;
  }
}
