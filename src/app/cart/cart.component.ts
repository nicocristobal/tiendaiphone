// cart.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Accessorie, CartService, Product, Shipping } from '../cart.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartItems: Product[] = [];
  items = this.cartService.getItems();
  shippings = this.cartService.getShippings();
  accessories = this.cartService.getAccessories();
  totalPrice: number = 0;

 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.shippings = this.cartService.getShippings(); // Obtiene la lista de envíos seleccionados
    this.accessories = this.cartService.getAccessories();
    this.calculateTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
    this.shippings = [];
    this.accessories=[];
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  getTotalPriceWithShippingAccessories(): number {
    return this.cartService.getTotalPriceWithShippingAccessories();
  }

  removeProduct(product: Product): void {
    this.cartService.removeProduct(product);
    this.calculateTotalPrice();
  }

  removeShipping(shipping: Shipping): void {
    this.cartService.removeShipping(shipping);
    this.calculateTotalPrice();
  }

  removeAccessorie(accessorie: Accessorie): void {
    this.cartService.removeAccessorie(accessorie);
    this.calculateTotalPrice();
  }
  
}
