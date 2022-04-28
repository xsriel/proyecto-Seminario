import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchdataServiceService {

  constructor(private http:HttpClient ) 
  {

  }
  getData(url:string)
  {
    return this.http.get(url);
  }
}
