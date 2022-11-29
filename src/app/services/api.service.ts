import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Currency, Welcome } from '../types/api';
import { map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = "https://restcountries.com/v2/all"
  private api2 ="https://restcountries.com/v2/"
  
  constructor(private http: HttpClient) {}

  getAllCountry(){
    return this.http.get<Welcome[]>(this.api);
  }


  GetCurrency(){
    return this.http.get<Currency[]>(this.api2);
  }



  GetcountryByname(name: string){
    return this.http.get<Welcome[]>(`${this.api2}name/${name}`).pipe(
      map(([res]) => res)
    )

  }






  GetFullCountry(codes: string[]){

    return this.http.get<Welcome[]>(`${this.api2}alpha?codes=${codes.join(',')}`);
    
  }

  


}
 