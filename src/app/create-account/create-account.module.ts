import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { RouterModule } from '@angular/router';
import { createAccountRoutes } from './create-account.routes';
import { CreateAccountDetailsComponent } from './create-account-details/create-account-details.component';
import { AccountPasswordChangeComponent } from './account-password-change/account-password-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadPassportComponent } from './upload-passport/upload-passport.component';
import { UploadSelfieComponent } from './upload-selfie/upload-selfie.component';

@NgModule({
  declarations: [
    CreateAccountComponent,
    CreateAccountDetailsComponent,
    UploadPassportComponent,
    AccountPasswordChangeComponent,
    UploadSelfieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(createAccountRoutes)
  ]
})
export class CreateAccountModule {}
