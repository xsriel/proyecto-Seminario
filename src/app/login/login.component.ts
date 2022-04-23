import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor() {
    this.formLogin = new FormGroup({
      usuario: new FormControl,
      passwd: new FormControl
    })
  }

  ngOnInit(): void {
  }

}
