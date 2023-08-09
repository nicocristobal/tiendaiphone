import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';

import { ProductosComponent } from './productos/productos.component';
import { CartComponent } from './cart/cart.component';

import { ShippingComponent } from './shipping/shipping.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';



const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: InicioSesionComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'cart', component: CartComponent},
  { path: 'shipping', component:ShippingComponent},
  { path: 'accessories', component:AccessoriesComponent},
  { path: 'payment-form', component:PaymentFormComponent },
  { path: 'acerca-de', component:AcercaDeComponent},
  { path: 'servicios', component:ServiciosComponent},
  { path: 'contacto', component:ContactoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
