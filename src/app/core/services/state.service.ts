import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { Countries } from '../data/countries';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public SelectedCountry: Country;

  constructor() { 
    this.SelectedCountry = Countries[0]
  }

  changeCountry(country: Country){
    this.SelectedCountry = country;
  }
}
