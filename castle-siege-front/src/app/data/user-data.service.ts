import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {

  user: User;

  performLogin(login: string, password: string) {
    this.user = new User(login, password);
  }

  constructor() { }

}
