import { Component } from '@angular/core';
import { CartService, Product } from '../cart.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products!: Observable<Product[]>; // Utilizamos el tipo Product[] para la lista de productos


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Obtener los productos desde el servicio al iniciar el componente
    this.products = this.cartService.getProducts();
  }

  
}


