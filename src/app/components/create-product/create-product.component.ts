import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    id: new FormControl<number>(0, [
      Validators.required,
      Validators.minLength(1),
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
      Validators.minLength(6),
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    image: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    category: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  get id() {
    return this.form.controls.price as FormControl;
  }

  get price() {
    return this.form.controls.price as FormControl;
  }

  get description() {
    return this.form.controls.description as FormControl;
  }

  get image() {
    return this.form.controls.image as FormControl;
  }

  get category() {
    return this.form.controls.category as FormControl;
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.productService
      .create({
        title: this.form.value.title as string,
        id: this.form.value.id as number,
        price: this.form.value.price as number,
        description: this.form.value.description as string,
        image: this.form.value.image as string,
        category: this.form.value.category as string,
        rating: {
          rate: 42,
          count: 1,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
