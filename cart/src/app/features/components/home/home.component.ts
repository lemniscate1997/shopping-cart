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

  get sortObject() {
    return this.sortForm.get('sort').value;
  }

  onFormFieldValueChange() {
    this.searchFilterForm.get('searchString').valueChanges.pipe(debounceTime(2000),
    ).
      subscribe(value => {
        this.fetchProductData(value, this.sortObject);
      });

    this.sortForm.get('sort').valueChanges.subscribe(selected => {
      this.fetchProductData(this.searchStringValue, selected.value)
    });
  }

  fetchProductData(searchString = '', sortObj = ['price', '1']) {
    this.productService.getItems(1, searchString, sortObj).subscribe(data => {
      this.products = data;
    })
  }

  create() {
    this.router.navigate(['create']);
  }
}
