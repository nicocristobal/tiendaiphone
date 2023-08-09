import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService, Product } from '../cart.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  products!: Observable<Product[]>; // Utilizamos el tipo Product[] para la lista de productos

  @Output() productAdded = new EventEmitter<Product>();
  searchProductName: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Obtener los productos desde el servicio al iniciar el componente
    this.products = this.cartService.getProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert('Producto agregado al carrito');
    this.productAdded.emit(product);
  }

  searchProductByName(): void {
    if (this.searchProductName.trim() === '') {
      // Si el campo de búsqueda está vacío, mostrar todos los productos
      this.products = this.cartService.getProducts();
    } else {
      // Realizar la búsqueda por nombre usando el método del servicio
      this.products = this.cartService.searchProductByName(this.searchProductName);
    }
  }
  
}
