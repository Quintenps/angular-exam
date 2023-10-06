import { Countries } from './../../core/data/countries';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country.model';
import { StateService } from 'src/app/core/services/state.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {
  @Output('SelectedCountryId') selectedCountryEvent = new EventEmitter<Country>()
  Countries: Country[] = Countries

  constructor(public stateService: StateService){ }

  ngOnInit(): void {
    this.stateService.SelectedCountry = this.stateService.SelectedCountry
  }

  changeCountry(id: number){
    const selectedCountry = this.Countries.filter(c => c.id == id)[0]
    
    this.stateService.changeCountry(selectedCountry)
    this.selectedCountryEvent.emit(selectedCountry)
  }
}
