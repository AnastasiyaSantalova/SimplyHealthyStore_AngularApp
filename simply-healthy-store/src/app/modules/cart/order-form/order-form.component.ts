import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @Input() cartProducts;

  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.orderForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: '',
      phone: ['', Validators.required],
      address: ['', Validators.required],
    })
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

  onSubmit() {
  }

}
