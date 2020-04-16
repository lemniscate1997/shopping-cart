import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {

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
