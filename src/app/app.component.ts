import { Component } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Country';
  searchText: any;


  constructor(private api:ApiService){}



  ngOnInit(){
    this.api.getAllCountry().subscribe((res) => console.log(res));
  }
  }

