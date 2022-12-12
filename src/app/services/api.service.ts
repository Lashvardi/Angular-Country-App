import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Currency, Welcome } from '../types/api';
import { map, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = "https://restcountries.com/v2/all"
  private api2 ="https://restcountries.com/v2/"
  private apicountry = `https://restcountries.com/v2/name/usa?fields=flags`
  private imageApi =`https://pixabay.com/api/?key=24616553-a93f502e67608fa7b8aece2d1&q=`
  
  constructor(private http: HttpClient) {}

  getAllCountry(){
    return this.http.get<Welcome[]>(this.api);
  }



  GetCurrency(){
    return this.http.get<Currency[]>(this.api2);
  }

  getImage(name : any){
    return this.http.get(`${this.imageApi}${name}+nature&image_type=photo&pretty=true`)
  }


  GetcountryByname(name: string){
    return this.http.get<Welcome[]>(`${this.api2}name/${name}`).pipe(
      map(([res]) => res)
    )
  }


  getcountryflag(name: string){
    return this.http.get<Welcome[]>(`https://restcountries.com/v2/name/${name}/?fields=flags`).pipe(
      map(([res]) => res)
    )
  }


  GetFullCountry(codes: string[]){
    return this.http.get<Welcome[]>(`${this.api2}alpha?codes=${codes.join(',')}`);
  
  }

  


}
 