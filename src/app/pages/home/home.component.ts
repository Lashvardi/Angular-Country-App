import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Welcome } from 'src/app/types/api';
import { Observable } from 'rxjs';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  source: Welcome[];
  searcFilter: string;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllCountry().subscribe(countries => {
      this.source = countries;
    });
  }

}
 