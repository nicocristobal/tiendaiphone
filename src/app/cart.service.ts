import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Shipping {
  type: string;
  price: number;
}

export interface Accessorie {
  type: string;
  price: number;
}

export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  shippings: Shipping[] = [];
  accessories: Accessorie[] = [];
  private cartKey = 'cartItems';

  private productsUrl = '/assets/products.json';
 
  getItems(): Product[] {
    return this.items;
  }

  getShippings(): Shipping[] {
    return this.shippings;
  }

  getAccessories(): Accessorie[] {
    return this.accessories;
  }
  // Eliminar el carrito 
  clearCart() {
    this.items = [];
    this.shippings = []; // Vaciar la lista de envíos
    this.accessories = [];
    this.saveToLocalStorage();
  }
  //Obtener el precio de un producto 
  getTotalPrice(): number {
    return this.items.reduce((total, product) => total + product.price, 0);
  }

  constructor(private http: HttpClient) {
    const storedItems = localStorage.getItem(this.cartKey);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
   }
  }
  // Guardar lo seleccionado en carrito 
  private saveToLocalStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.items));
  }
  
  // Obtener la lista de roductos desde el archivo "products.json"
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/products.json');
  }
// Buscar los productos por el nombre iphone...
  searchProductByName(name: string): Observable<Product[]> {
    return this.getProducts().pipe(
      // Utilizar el operador map para filtrar los productos por nombre
      map((products: Product[]) => products.filter(product => product.name.toLowerCase().includes(name.toLowerCase())))
    );
  }
  // Obtener la lista de envios desde el archivo "shhiping.json"
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
   // Obtener la lista de accesorios desde el archivo "accessories.json"
  getAccessoriesPrices(): Observable<{ type: string; price: number; }[]>{
    return this.http.get<{type: string, price: number}[]>('/assets/accessories.json');
  }
// Agregar un producto al carrito
  addToCart(product: Product) {
    this.items.push(product);
    this.saveToLocalStorage();
  }
  // Agregar un Accesorio al carrito
  addAccessorieToCart(accesorie: Accessorie): void {
    this.accessories.push(accesorie);
    this.saveToLocalStorage();
  }
  // Agregar un envio al carrito
  addShippingToCart(shipping: Shipping): void {
    this.shippings.push(shipping);
    this.saveToLocalStorage();
  }

  // Suma el precio de productos + accesorios + envio
  getTotalPriceWithShippingAccessories(): number {
    const productPrice = this.items.reduce((total, product) => total + product.price, 0);
    const shippingPrice = this.shippings.reduce((total, shipping) => total + shipping.price, 0);
    const accesoriePrice = this.accessories.reduce((total, accesorie) => total + accesorie.price, 0);
    return productPrice + shippingPrice + accesoriePrice;
  }
  // Eliminar un producto del carrito
  removeProduct(product: Product): void {
    const index = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.saveToLocalStorage();
    }
  }
  // Eliminar un envio del carrito
  removeShipping(shipping: Shipping): void {
    const index = this.shippings.indexOf(shipping);
    if (index !== -1) {
      this.shippings.splice(index, 1);
      this.saveToLocalStorage();
    }
  }
  // Eliminar un accesorio del carrito
  removeAccessorie(accessorie: Accessorie): void {
    const index = this.accessories.indexOf(accessorie);
    if (index !== -1) {
      this.accessories.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

}

