import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { products } from 'src/app/data/products';
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
    title: new FormControl<string>(
      'Металлочерепица "СуперМонтеррей" 0,50мм RAL7024мат',
      [Validators.required, Validators.minLength(6)]
    ),
    id: new FormControl<number>(products.length + 101, [
      Validators.required,
      Validators.minLength(1),
    ]),
    price: new FormControl<number>(21.60, [
      Validators.required,
      Validators.minLength(1),
    ]),
    description: new FormControl<string>(
      `
    Полная ширина листа: 1190мм
    Полезная ширина листа: 1100мм
    Толщина: 0,50мм
    Толщина цинкового покрытия: 140 гр/м2
    Толщина полимерного покрытия: 35мкм

    Северсталь, Новолипецк, СтальКолор

    Доступные цвета: 9005мат (чёрный), 8019мат (тёмный шоколад), 7024мат     (тёмно-серый), 6005мат (зелёный мох), 3005мат (спелая вишня) и др.
    `,
      [Validators.required, Validators.minLength(6)]
    ),
    image: new FormControl<string>(
      'https://images.deal.by/285249808_w640_h640_285249808.jpg',
      [Validators.required, Validators.minLength(6)]
    ),
    category: new FormControl<string>('metalTile', [
      Validators.required,
      Validators.minLength(2),
    ]),
    rate: new FormControl<number>(4, [
      Validators.required,
      Validators.minLength(1),
    ]),
    count: new FormControl<number>(120, [
      Validators.required,
      Validators.minLength(1),
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

  get rate() {
    return this.form.controls.rate as FormControl;
  }

  get count() {
    return this.form.controls.count as FormControl;
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
          rate: this.form.value.rate as number,
          count: this.form.value.count as number,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
