import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  entrar() {
    
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'test' && password == 'Admin123') {
      // Redireccionamos al inicio
      this.router.navigate(['inicio']);


    } else if (usuario == 'Joshua' && password == 'Joshua'){
        this.router.navigate(['inicio']);
      // Mostramos mensaje de error
      // this.error();

    } else if (usuario == 'Bob' && password == 'Esponja'){
        this.router.navigate(['inicio']);
    } else {
      // Mostramos el error
        this.error();
    }
  }

  error() {
    this._snackBar.open('Usuario o Password ingresados son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
