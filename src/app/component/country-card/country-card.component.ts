import { Component, OnInit, Input } from '@angular/core';
import { Welcome } from 'src/app/types/api';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})


export class CountryCardComponent{
searchtext: string = '';
  @Input()
  country: Welcome;

}
