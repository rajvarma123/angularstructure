import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  currentUser;
  baseurl = 'http://10.14.31.169:8090/';
  registerid = 'register';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
    })
  };
  constructor(private httpClient: HttpClient) {}

  token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InJhanZhcm1hIG5haWR1IiwiYWRtaW4iOnRydWUsImp0aSI6IjczZTk4MzhjLTMyZmQtNDg5MS1hNjdhLWZlYjNiZjM0ZThmMyIsImlhdCI6MTU3MDQ0OTgxNCwiZXhwIjoxNTcwNDUzNDI0fQ.s4-UhlAlrfH_zysZn6RAdbpl5j_y-WNeLokRD_uxFA8';

  public login1(loginId, password) {
    if (loginId === 'rajvarma007009@gmail.com' && password === '1234') {
      let jwt = new JwtHelperService();
      this.currentUser = jwt.decodeToken(this.token);
      console.log(this.currentUser);
      localStorage.setItem('user-profile', this.currentUser.name);
      localStorage.setItem('accessToken', this.token);
    }
  }

  public register(data) {
    return this.httpClient.post(this.baseurl + this.registerid, data);
  }

  public login(data) {
    return this.httpClient.post(this.baseurl + 'authenticate', data);
  }

  public getHello() {
    const token1 = sessionStorage.getItem('token');
    console.log(token1);
    return this.httpClient.get(this.baseurl + 'hello', {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token1
      })
    });
  }
}
