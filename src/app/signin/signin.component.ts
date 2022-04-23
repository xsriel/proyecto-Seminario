import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formSignin: FormGroup;

  constructor() {
    this.formSignin = new FormGroup({
      usuario: new FormControl(),
      passwd: new FormControl(),
      repite_passwd: new FormControl(),
      correo: new FormControl(),
      nombre: new FormControl(),
      ape_pat: new FormControl(),
      ape_mat: new FormControl(),
      edad: new FormControl(),
      peso: new FormControl(),
      altura: new FormControl(),
      genero: new FormControl()
    });
  }

  ngOnInit(): void {
  }

}
