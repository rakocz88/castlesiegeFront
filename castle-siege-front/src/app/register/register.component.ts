import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailSend: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.validationSuccessfull()) {
      this.emailSend = true;
    }

  }

  validationSuccessfull() {
    return true;
  }

  verifyCode() {
    this.router.navigate(['']);
  }

}
