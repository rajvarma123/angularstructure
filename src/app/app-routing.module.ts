import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { RegisterComponent } from './register/register.component';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'debit-card',
    component: DebitCardComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'create-account',
    loadChildren: './create-account/create-account.module#CreateAccountModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
