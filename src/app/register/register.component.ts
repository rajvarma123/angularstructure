import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authServiceService: AuthServiceService
  ) {}

  registerForm: FormGroup;
  userNotValid;
  passNotValid;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.validate()) {
      console.log(this.registerForm.value);
      this.authServiceService
        .register(this.registerForm.value)
        .subscribe(result => {});
      this.router.navigate(['login']);
    }
  }

  validate() {
    if (this.registerForm.value.username === '') {
      this.userNotValid = true;
      return false;
    }
    if (this.registerForm.value.password === '') {
      this.passNotValid = true;
      return false;
    }
    return true;
  }
}
