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
  filterForm: FormGroup;
  filterResponse = {};
  sortData: any[];
  filterData: any;

  constructor(private fb: FormBuilder, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.searchFilterForm = this.fb.group({
      searchString: ['']
    });
    this.sortForm = this.fb.group({
      sort: constant.SORT[0]
    });
    this.filterForm = this.fb.group({
      price: ['']
    });
    
    if(localStorage.getItem('sort')!=null) {
      this.sortForm.patchValue({sort: JSON.parse(localStorage.getItem('sort'))});
    }
    if(localStorage.getItem('filters')!=null) {
      this.filterResponse = JSON.parse(localStorage.getItem('filters'));
      this.filterForm.patchValue(this.filterResponse);
    }
    
    this.sortData = constant.SORT;
    this.filterData = constant.FILTER;
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
        this.fetchProductData(value);
      });

    this.sortForm.get('sort').valueChanges.subscribe(selected => {
      localStorage.setItem('sort', JSON.stringify(selected));
      this.fetchProductData(this.searchStringValue)
    });

    this.filterForm.get('price').valueChanges.subscribe(selected => {
      if (selected != null) {
        this.filterResponse = { ...this.filterResponse, price: selected };
        this.storeFilters();
      }
    })
  }

  storeFilters() {
    localStorage.setItem('filters', JSON.stringify(this.filterResponse));
    this.fetchProductData(this.searchStringValue);
  }

  fetchProductData(searchString = '') {
    this.productService.getItems(1, searchString, this.sortObject.value, this.filterResponse).subscribe(data => {
      this.products = data;
    })
  }

  clearFilter() {
    this.filterResponse = {};
    localStorage.removeItem('filters');
    this.filterForm.reset();
    this.fetchProductData(this.searchStringValue);
  }

  create() {
    this.router.navigate(['create']);
  }
}
