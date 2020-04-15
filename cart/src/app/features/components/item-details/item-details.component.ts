import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item: any;
  id: String;

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params.id;
    this.loadItem();
  }

  loadItem() {
    this.productService.getItem(this.id).subscribe(data => {
      if (data != null) {
        this.item = data;
      } else {
        alert("Invalid request for product");
        this.router.navigate(['home']);
      }
    });
  }

  editItem() {
    this.router.navigate(['update',this.id]);
  }

  moveToTrash() {
    if (confirm("Are you sure you want to move product to trash?")) {
      this.productService.changeStatus(this.item.id, 2).subscribe(data => {
        this.back();
      })
    }
  }

  back() {
    this.router.navigate(["home"]);
  }
}
