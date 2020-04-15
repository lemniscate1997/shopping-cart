import { BaseService } from './../../services/base.service';
import { Component, OnInit, Input, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { constant } from '../../../app.const';
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  @Input() sidebar;

  public show = true;
  public selectedItem: Number = 1;
  public role;
  public wrapper = true;
  sidebarOpened = false;
  subscription: Subscription;
  userData;
  image: string;
  imageIcon: any;
  userId: number;

  constructor(private router: Router,
    private baseService: BaseService,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.setSidebar();
    this.selectSidebar();
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    if (window.innerWidth < 1024 && this.sidebarOpened === false) {
      this.renderer.addClass(document.body, 'overflow-filter');
    } else {
      this.renderer.removeClass(document.body, 'overflow-filter');
    }
  }

  setSidebar() {
    this.subscription = this.baseService.clickBehaviourSubject.subscribe(data => {
      this.sidebarOpened = data;
      this.getScreenSize();
    });
  }

  toggleactiveMenu(i) {
    this.selectedItem = i;
  }

  selectSidebar() {
    this.baseService.changeOfRoutesBehaviourSubject.subscribe(currentUrl => {
      if (currentUrl === '/home' || currentUrl.includes('/product')
       || currentUrl.includes('/create') || currentUrl.includes('/update')) {
        this.selectedItem = 1;
      } else if (currentUrl === '/trash') {
        this.selectedItem = 2;
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToTrash() {
    this.router.navigate(['/trash']);
  }
}
