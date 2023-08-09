import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  paymentForm!: FormGroup;
  shippingForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expirationDate: ['', [Validators.required]],
      securityCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });

    this.shippingForm = this.formBuilder.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postalCode: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.paymentForm.valid && this.shippingForm.valid) {
      console.log('Pago exitoso');
      console.log('Datos de Pago:', this.paymentForm.value);
      console.log('Datos de Envío:', this.shippingForm.value);
      this.paymentForm.reset();
      this.shippingForm.reset();
    } else {
      console.log('Formulario inválido. Verifica los campos.');
    }
  }

  
  
}
