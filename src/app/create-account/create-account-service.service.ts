import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterAccount } from '../models/register-account';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountServiceService {
  baseProject = environment.api.baseProject;
  endPointsUrl = environment.api.endPoints;
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
    })
  };

  registerAccount(registerAccount: RegisterAccount) {
    return this.httpClient.post(
      this.baseProject + this.endPointsUrl.registerAccount,
      registerAccount,
      this.httpOptions
    );
  }

  sendOtp(id) {
    return this.httpClient.get(
      `${this.baseProject + this.endPointsUrl.otpGeneration}/${id}`,
      this.httpOptions
    );
  }
}
