import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jquery } from 'src/app/static/js/jquery-3.2.1.js';
import { face_query } from 'src/app/static/js/face-query.js';
import { video_controls } from 'src/app/static/js/video_controls.js';
import { Event } from '@angular/router';

@Component({
  selector: 'app-upload-selfie',
  templateUrl: './upload-selfie.component.html',
  styleUrls: ['./upload-selfie.component.css']
})
export class UploadSelfieComponent implements OnInit {
  constructor(private router: Router) {}
  async ngOnInit() {}
}
