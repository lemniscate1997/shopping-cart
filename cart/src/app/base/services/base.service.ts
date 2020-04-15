import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BaseService {
  isOpened: boolean = false;
  clickBehaviourSubject = new BehaviorSubject<any>(this.isOpened);
  changeOfRoutesBehaviourSubject = new BehaviorSubject<any>('/');

  constructor() { }

  collapse() {
    this.isOpened = !this.isOpened;
    this.clickBehaviourSubject.next(this.isOpened);
  }

  setRoutes(routes: String) {
    this.changeOfRoutesBehaviourSubject.next(routes);
  }
}
