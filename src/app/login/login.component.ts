import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthServiceService } from '../auth/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authServiceService: AuthServiceService
  ) {}
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.authServiceService
      .login(this.loginForm.value)
      .subscribe((res: any) => {
        console.log(res.token);
        sessionStorage.setItem('token', res.token);
        const jwt = new JwtHelperService();
        const currentUser = jwt.decodeToken(res.token);
        console.log(currentUser);
        sessionStorage.setItem('user-profile', currentUser.sub);
      });
    this.router.navigate(['./hello']);
    // if (this.loginId && this.password) {
    //   this.authServiceService.login(this.loginId, this.password);
    //    this.router.navigate(['./debit-card']);
    //  }
  }
}
