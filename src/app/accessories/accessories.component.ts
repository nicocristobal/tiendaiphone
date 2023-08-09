import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessorie, CartService } from '../cart.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {

  accessories!: Observable<Accessorie[]>

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.accessories = this.cartService.getAccessoriesPrices();
    
  }
 
  addAccessorieToCart(accesories: Accessorie): void {
    this.cartService.addAccessorieToCart(accesories);
    window.alert('Accesorios agregado al carrito'); 
  }


}
