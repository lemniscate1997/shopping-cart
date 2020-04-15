import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  @ViewChild('firstelm', null) elementRef: ElementRef;

  productForm: FormGroup;
  id = null;
  isEditForm = false;
  btnText = 'Create';
  submitted = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private fBuilder: FormBuilder,
    private productService: ProductService) { }

  ngOnInit() {
    this.productForm = this.fBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      image: ['', [Validators.required, Validators.pattern(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/i)]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      seller: ['', [Validators.required, Validators.maxLength(50)]],
      instoke: [true]
    });

    this.id = this.activeRoute.snapshot.params.id;
    if (this.id != null) {
      this.isEditForm = true;
      this.btnText = 'Update';
      this.setValue();
    }

    this.elementRef.nativeElement.focus();
  }

  changeAvailability(instoke) {
    this.productForm.patchValue({ instoke: instoke });
  }

  setValue() {
    this.productService.getItem(this.id).subscribe(({ id, review, status, ...product }) => {
      this.productForm.setValue(product);
    })
  }

  get imageValidation() { return !this.productForm.controls.image.errors; }

  get imageValue() { return this.productForm.controls.image.value; }

  get f() { return this.productForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      this.submitted = false;
      return;
    }

    if (this.isEditForm) {
      this.productService.updateItem(this.id, this.productForm.value).subscribe((data) => {
        alert("Product updated succsessfully");
        this.router.navigate(['product', this.id]);
      }, (error) => { this.submitted = false; });
    } else {
      this.productService.addItem(this.productForm.value).subscribe((data) => {
        alert("Product created succsessfully");
        this.router.navigate(['home']);
      }, (error) => { this.submitted = false; });
    }
  }

  cancelForm() {
    if (this.isEditForm) {
      this.router.navigate(['product', this.id]);
    } else {
      this.router.navigate(['home']);
    }
  }
}
