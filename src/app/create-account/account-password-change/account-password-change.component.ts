import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-password-change',
  templateUrl: './account-password-change.component.html',
  styleUrls: ['./account-password-change.component.css']
})
export class AccountPasswordChangeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigate(['./login']);
  }
}
