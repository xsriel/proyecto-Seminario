import { Component, OnInit } from '@angular/core';
import { FetchdataServiceService } from '../fetchdata-service.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  Url = "./assets/prueba.txt";
  data = "";
  constructor(private srv:FetchdataServiceService)
  {}
  getPost():void
  {
    //this.srv.getData(this.Url).subscribe(data=>console.log(data));
    fetch(this.Url)
    .then(response => response.text())
    .then(data => {
  	// Do something with your data
  	console.log(data);
    this.data = data;
  });
  }
  ngOnInit(): void {
    this.getPost();
  }

}
