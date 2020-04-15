import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.fetchProductData();
  }

  fetchProductData() {
    this.productService.getItems(2).subscribe( data => {
      this.products = data;
    })
  }

  restoreAll() {
    if(confirm("Are you sure you want restore all the products?")) {
      this.fetchIdAndChangeStatus(1);
    }
  }

  deleteAll() {
    if(confirm("Are you sure you want delete all the products permenantly?")) {
      this.fetchIdAndChangeStatus(3);
    }
  }

  fetchIdAndChangeStatus(status) {
    let ids = this.products.map(({id, ...rest}) => (id));
    this.changeStatus(status, ids);
  }

  changeStatus(status, id) {
    this.productService.changeStatus(id, status).subscribe(data => {
      this.fetchProductData();
    })
  }

}
