import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public onLoginClick( username, password ){
    if(username.value == 'demoLogin' && password.value == 'Qwerty@123'){
    this.router.navigate(['./homepage']);
  }
  else{
    window.alert('Invalid Credentials');
  }
}
}
