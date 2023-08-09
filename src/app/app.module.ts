import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ProductosComponent } from './productos/productos.component';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    PieDePaginaComponent,
    EncabezadoComponent,
    InicioSesionComponent,
    ProductosComponent,
    HomeComponent,
    CartComponent,
    ShippingComponent,
    PaymentFormComponent,
    AccessoriesComponent,
    AcercaDeComponent,
    ServiciosComponent,
    ContactoComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
