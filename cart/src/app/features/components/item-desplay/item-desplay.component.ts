import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-desplay',
  templateUrl: './item-desplay.component.html',
  styleUrls: ['./item-desplay.component.scss']
})
export class ItemDesplayComponent implements OnInit {

  @Input() item;
  @Input() isActive;
  @Output() changeStauts:EventEmitter<any> = new EventEmitter<any>(); 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewItem() {
    this.router.navigate(['product', this.item.id]);
  }

  deleteItem() {
    if(confirm("Are you sure you want delete product permenanty?")) {
      this.changeStauts.emit(3);
    }
  }

  restoreItem() {
    if(confirm("Are you sure you want restore the product?")) {
      this.changeStauts.emit(1);
    }
  }
}
