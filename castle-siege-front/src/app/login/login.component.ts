import {User} from '../data/user';
import {UserDataService} from '../data/user-data.service';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('login') login: ElementRef;
  @ViewChild('password') password: ElementRef;



  constructor(private router: Router, private userDataService: UserDataService) {}

  ngOnInit() {
  }

  onLogin() {
    const loginValue = this.login.nativeElement.value;
    const passwordValue = this.password.nativeElement.value;

    if (this.isLoginValid(loginValue, passwordValue)) {
      this.performLogin(loginValue, passwordValue);
    } else {
      this.handleWrongLogin(); {
      }
    }
  }

  performLogin(login: string, password: string) {

    this.router.navigate(['/secure']);
  }

  isLoginValid(login: string, password: string) {
    if (login == '' || password == '' || login !== password) {
      return false;
    } else {
      return true;
    }
  }

  handleWrongLogin(): any {
    alert('Login not posible');
  }

}
