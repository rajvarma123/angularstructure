import { Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account.component';
import { CreateAccountDetailsComponent } from './create-account-details/create-account-details.component';
import { AccountPasswordChangeComponent } from './account-password-change/account-password-change.component';
import { UploadPassportComponent } from './upload-passport/upload-passport.component';
import { UploadSelfieComponent } from './upload-selfie/upload-selfie.component';

export const createAccountRoutes: Routes = [
  {
    path: '',
    component: CreateAccountComponent,
    children: [
      {
        path: 'upload-passport',
        component: UploadPassportComponent
      },
      {
        path: 'upload-selfie',
        component: UploadSelfieComponent
      },
      {
        path: 'create-account-details',
        component: CreateAccountDetailsComponent
      },
      {
        path: 'account-password-change',
        component: AccountPasswordChangeComponent
      }
    ]
  }
];
