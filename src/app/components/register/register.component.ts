import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  loginList;
  message;
  successTrue = false;
  ngOnInit() {
    this.loginList = JSON.parse(sessionStorage.getItem('storeList'));
    if (this.loginList === null) {
      this.loginList = [];
    }
  }

  onSubmit(res) {
    const unique = this.loginList.findIndex((c) => c.name === res.value.name); 
    if (unique !== 0) {
      this.loginList.push(res.value);
      sessionStorage.setItem('storeList', JSON.stringify(this.loginList));
      this.message = 'Registred Successfully.'
      this.successTrue = true;
      res.reset();
    } else {
      this.message = "User Name already exits.";
      this.successTrue = true;
    }

  }
}
