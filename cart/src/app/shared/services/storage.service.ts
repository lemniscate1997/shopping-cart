import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements Resolve<any> {

  constructor() { }

  resolve() {
    localStorage.clear();
}
}
