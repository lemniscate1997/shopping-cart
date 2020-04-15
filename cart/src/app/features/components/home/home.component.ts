import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { constant } from '../../../app.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [];
  searchFilterForm: FormGroup;
  sortForm: FormGroup;
  sortData: any[];

  constructor(private fb: FormBuilder, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.searchFilterForm = this.fb.group({
      searchString: ['']
    });
    this.sortForm = this.fb.group({
      sort: constant.SORT[0]
    });
    this.sortData = constant.SORT;
    this.fetchProductData();
    this.onFormFieldValueChange();
  }

  get searchStringValue() {
    return this.searchFilterForm.get('searchString').value;
  }

  onFormFieldValueChange() {
    this.searchFilterForm.get('searchString').valueChanges.pipe(debounceTime(2000),
    ).
      subscribe(val => {
        this.fetchProductData(val);
      });
  }

  fetchProductData(searchString = '') {
    this.productService.getItems(1, searchString).subscribe(data => {
      this.products = data;
    })
  }

  create() {
    this.router.navigate(['create']);
  }
}
