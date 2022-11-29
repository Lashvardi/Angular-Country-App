import { JsonPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, merge, mergeMap, Observable, observable, of, tap } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';
import { Welcome } from 'src/app/types/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
GetCurrency(arg0: import("src/app/types/api").Currency[]) {
throw new Error('Method not implemented.');
}
  $country: Observable<Welcome>;
  $borderCountry: Observable<Welcome[]>;
  
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.$country = this.api.GetcountryByname(params.Country)
      .pipe(tap((res)=> res),
      mergeMap(res =>{
        JSON.stringify(res)
        if(JSON.stringify(res).includes("border"))
        {
          console.log("has border")
          this.$borderCountry = this.api.GetFullCountry(res.borders)
        }else{
          console.log("No Borders")
        }

        return of(res)
      }))
    })
  }

}
  