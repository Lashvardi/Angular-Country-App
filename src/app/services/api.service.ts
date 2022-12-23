import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Currency,Weather, Welcome } from '../types/api';
import { map, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private api = "https://restcountries.com/v2/all"
  private api2 ="https://restcountries.com/res/v2/"
  private apicountry = `https://restcountries.com/v2/name/usa?fields=flags`
  private imageApi =`https://pixabay.com/api/?key=24616553-a93f502e67608fa7b8aece2d1&q=`
  private weather = `https://api.openweathermap.org/data/2.5/weather?q=`
  private WeatherAPI = `628a4d5346bc875580165e833080440f`
  constructor(private http: HttpClient) {}

  getAllCountry(){
    return this.http.get<Welcome[]>(`${this.api2}/all`);
  }



  GetCurrency(){
    return this.http.get<Currency[]>(this.api2);
  }

  getImage(name : any, capital: any){
    return this.http.get(`${this.imageApi}${capital}+${name}&image_type=photo&pretty=false`)
  }

  getWeather(capital: any){
    return this.http.get<Weather[]>(`${this.weather}${capital}+&units=metric&appid=${this.WeatherAPI}`)
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
 