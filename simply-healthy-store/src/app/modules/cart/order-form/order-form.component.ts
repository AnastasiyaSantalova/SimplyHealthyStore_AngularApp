import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  @Input() cartProducts;

  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.orderForm = this.formBuilder.group({
      firstName: [''],
      lastName: '',
      phone: [''],
      address: [''],
    });
  }

  get firstName(): AbstractControl {
    return this.orderForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.orderForm.get('lastNname');
  }

  get phone(): AbstractControl {
    return this.orderForm.get('phone');
  }

  get address(): AbstractControl {
    return this.orderForm.get('address');
  }

  onSubmit(): void {
  }

}
