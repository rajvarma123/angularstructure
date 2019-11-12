import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterAccount } from 'src/app/models/register-account';
import { CreateAccountServiceService } from 'src/app/create-account/create-account-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account-details',
  templateUrl: './create-account-details.component.html',
  styleUrls: ['./create-account-details.component.css']
})
export class CreateAccountDetailsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private createAccountServiceService: CreateAccountServiceService
  ) {}

  registerAccountInfo = <RegisterAccount>{};
  userId;
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  registerAccount() {
    this.createAccountServiceService
      .registerAccount(this.registerAccountInfo)
      .subscribe((res: any) => {
        if (res) {
          this.userId = res.userId;
          this.sendOtpToPhoneAndEmail(this.userId);
          this.registerAccountInfo = <RegisterAccount>{};
        }
      });
  }

  sendOtpToPhoneAndEmail(userId) {
    this.createAccountServiceService.sendOtp(userId).subscribe((res: any) => {
      console.log(res);
    });
  }

  onSubmit() {
    console.log(this.addForm);
  }

  navigate() {
    this.router.navigate(['create-account/account-password-change']);
  }
}
