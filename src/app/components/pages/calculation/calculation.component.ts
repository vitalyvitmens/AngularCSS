import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
})
export class CalculationComponent {
  itemsTitles = [
    'Category',
    'Items',
    'Gl Code',
    'Amount',
    'Sales Tax',
    'Total',
  ];

  localItems = [
    {
      id: 1,
      name: '',
      items: [
        {
          id: 1,
          name: '',
          glCode: null,
          amount: null,
          salesTax: null,
        },
      ],
    },
  ];

  submitForm(form: NgForm) {
    console.log(form);
    console.log(form.value.product);
    console.log(form.value.thickness);
    console.log(form.value.RAL);
    console.log(form.value.coating);
  }

  calcFormReact: FormGroup = new FormGroup({
    product: new FormControl('металлочерепица'),
    thickness: new FormControl('0.45'),
    RAL: new FormControl('8017', [
      Validators.required,
      Validators.pattern(/^[0-9]{4}\b/),
    ]),
    coating: new FormControl('глянец'),
  });
  submitFormReact() {
    // this.calcFormReact.reset();
    console.log(this.calcFormReact);
    console.log(this.calcFormReact.value.product);
    console.log(this.calcFormReact.value.thickness);
    console.log(this.calcFormReact.value.RAL);
    console.log(this.calcFormReact.value.coating);
  }
}
