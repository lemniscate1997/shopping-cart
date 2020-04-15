import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from './base/services/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showBars: boolean;
  sidebarOpened: boolean = false;
  subscription: Subscription;
  constructor(private router: Router, private baseService: BaseService) { }
  changeOfRoutes() {
    if (this.router.url === '/' || this.router.url === '/errorpage' || this.router.url === '/sessionexpire') {
      this.showBars = false;
    } else {
      this.showBars = true;
      this.baseService.setRoutes(this.router.url);
    }
  }

  ngOnInit() {
    this.setSidebar();
  }

  setSidebar() {
    this.subscription = this.baseService.clickBehaviourSubject.subscribe(data => {
      this.sidebarOpened = data;
    });
  }

  closeSidebar() {
    this.baseService.collapse();
  }
}
