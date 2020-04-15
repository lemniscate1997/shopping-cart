import { BaseService } from './../../services/base.service';
import { Component, Input, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { constant } from 'src/app/app.const';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.scss']
})
export class HeaderBaseComponent implements OnInit {
  @Input() show;
  @Output() changeWidth: EventEmitter<any> = new EventEmitter<any>();

  constructor(private baseService: BaseService, private _router: Router) { }

  ngOnInit() { }

  onClick() {
    this.baseService.collapse();
  }

  homeredirect() {
    this._router.navigate(['/home']);
  }
}