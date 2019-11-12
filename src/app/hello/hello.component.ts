import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name;
  constructor(private authServiceService: AuthServiceService) {}

  ngOnInit() {
    this.name = sessionStorage.getItem('user-profile');
  }

  submit() {
    this.authServiceService.getHello().subscribe((res: any) => {
      console.log(res);
    });
  }
}
