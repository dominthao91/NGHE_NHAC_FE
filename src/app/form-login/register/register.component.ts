import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {SignUpForm} from '../../model/SignUpForm';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hide1 = true;
  form: any = {};
  signUpForm: SignUpForm;
  error1: any = {
    message: 'no_user'
  };
  error2: any = {
    message: 'no_phoneNumber'
  };
  success: any = {
    message: 'yes'
  };
  status = 'Fill in the Form to Register!';
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signUpForm = new SignUpForm(
      this.form.username,
      this.form.password,
      this.form.re_password,
      this.form.phoneNumber,
    );
    this.authService.signUp(this.signUpForm).subscribe(data => {
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.error1)) {
        window.location.reload();
        this.status = 'The username is existed! Please try again!';
      }
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.error2)){
        window.location.reload();
        this.status = 'The PhoneNumber is existed! Please try again!';
      }
      // tslint:disable-next-line:triple-equals
      if (JSON.stringify(data) == JSON.stringify(this.success)){
        this.status = 'Create account success !';
        this.router.navigate(['login']).then(() => {
          window.location.reload();
        });
      }
    });
  }
}
