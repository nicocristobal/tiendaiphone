import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({}); // Inicializa loginForm vacío
  mostrarLogin: boolean = true; // Inicialmente mostrar el formulario de inicio de sesión
  

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
     if (this.loginForm.valid) {

      const formData = this.loginForm.value;
      console.log('Login exitoso')
      console.log(formData);
      this.router.navigateByUrl('/productos');
      this.loginForm.reset();
      this.mostrarLogin = false;
      }else {
        console.log('Credenciales incorrectas');
      }
  }


}

