import { Component, OnInit } from '@angular/core';
import { CountryService } from '../API Services/Country/country.service';
import { Country } from '../Classes/Country.model';
import { DataSource } from '@angular/cdk/table';

declare var $: any;
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass']
})

export class CountryComponent implements OnInit {
  listOfCountries: Country [];
  countryToUpdateOrDelete: Country;
  currentNameOfCountry;
  currentPopulation;
  idOfCountryToModify;
  dataSourceOfCountries;
  constructor(private countrySer: CountryService) { }

  ngOnInit(){
    $(function() {
      $('.singleFunction').click(function() {
        $('.targetFunction').hide();
        $('#function' + $(this).attr('target')).show();
      });
    });
    this.countrySer.ReadCountry().subscribe((data: Country[]) => { this.dataSourceOfCountries = data; this.listOfCountries = this.dataSourceOfCountries; });
  }
  displayedColumns: string[] = ['CountryID', 'CountryName', 'CountryPopulation','Update','Delete'];

  CreateCountry(Name, Population){
    this.countrySer.CreateCountry(Name,Population);
  }

  updateCountry(updatedCountryName,updatedCountryPopulation,countryID){ // remmeber to push country id throuugh
      this.countrySer.UpdateCountry(countryID,updatedCountryName,updatedCountryPopulation);
  }

  deleteCountry(CountryID){
    this.countrySer.DeleteCountry(CountryID);
    console.log(CountryID);
  }

  getCountryToUpdateOrDelete(value){
  this.countrySer.getCountryToUpdateOrDelete(value).subscribe((data: Country) => {this.countryToUpdateOrDelete = data; 
  this.currentNameOfCountry = data.CountryName;
  this.currentPopulation = data.CountryPopulation;
  this.idOfCountryToModify = data.CountryID;
  });
  }
}

  