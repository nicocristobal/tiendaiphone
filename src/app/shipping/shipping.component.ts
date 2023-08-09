import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService, Shipping } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.shippingCosts =  this.cartService.getShippingPrices();
    
  }
 
  addShippingToCart(shipping: Shipping): void {
    this.cartService.addShippingToCart(shipping);
    window.alert('Envío agregado al carrito'); 
  }

  

}
