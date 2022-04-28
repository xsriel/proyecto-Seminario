import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  formSignin: FormGroup;

  constructor() {
    this.formSignin = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
        Validators.minLength(3),

      ]),
      passwd: new FormControl('', [
        Validators.required,
        //validacion del passwd debe tener de 6-12 caracteres minimo una minuscula, una mayuscula 1 digito y un caracter especial
        Validators.pattern(/(?=^.{6,12}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/),
      ]),
      repite_passwd: new FormControl('', [
        Validators.required
      ]),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/)
      ]),
      nombre: new FormControl('', [
        Validators.required
      ]),
      ape_pat: new FormControl('', [
        Validators.required
      ]),
      ape_mat: new FormControl(),
      edad: new FormControl('', [
        Validators.required
      ]),
      peso: new FormControl('', [
        Validators.required
      ]),
      altura: new FormControl('', [
        Validators.required
      ]),
      genero: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formSignin.value);
  }
  passwdValidator(formControl: FormControl){
    return null
  }

}
