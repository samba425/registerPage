import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  databAse;
  message;
  success;
  successTrue = false;
  errorTrue = false;
  constructor(private router: Router) { }
  loginList = [];
  ngOnInit() { 
    this.databAse = JSON.parse(sessionStorage.getItem('storeList'));
  }

  onSubmit(res) {
    if(this.databAse) {
      this.databAse.find((check) => {
        if (check.name === res.value.name) {
          if (check.password === res.value.password) {
            this.message = '';
            this.successTrue = true;
            this.errorTrue = false;
            this.success = 'Successfully login.'; 
            sessionStorage.setItem('User', JSON.stringify(check));
            setTimeout(() =>this.router.navigate(['/']),2000)
          } else {
            this.successTrue = false;
            this.errorTrue = true;
            this.message = 'Password is wrong.';
            this.success = '';
          }
          res.reset();
          return check;
        } else {
          this.successTrue = false;
          this.errorTrue = true;
          this.message = 'Please check UserName.';
          this.success = '';
        }
      })
    } else {
      this.successTrue = false;
      this.errorTrue = true;
      this.message = 'No Records Found Please Register';
      this.success = '';
      res.reset(); 
    }
    
  }
}
