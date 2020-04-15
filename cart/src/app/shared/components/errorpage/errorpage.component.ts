import { Component, OnInit } from '@angular/core';
import { ErrorpageService } from '../../services/errorpage.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.scss']
})
export class ErrorpageComponent implements OnInit {

  errormessage: string = "";
  errorCode: number;

  constructor(private errorpageservice: ErrorpageService, private _router: Router,
    private _location: Location) {
  }

  ngOnInit() {
    this.setError();
  }

  setError() {
    this.errormessage = this.errorpageservice.geterrormessage();
    if (this.errormessage === 'You are not authorized to access this page, Please contact administrator') {
      this.errorCode = 401;
    } else {
      this.errorCode = 404;
    }
    this.errorpageservice.seterrormessage('');
  }

  goBack() {
    this._location.back();
  }
  goHome() {
    window.location.href = '';
  }
}
