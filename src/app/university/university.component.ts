import { Component, OnInit } from '@angular/core';
import { University } from '../Classes/University.model';
import {UniversityService} from '../API Services/University/university.service'
import {CountryService} from '../API Services/Country/country.service'
import { Country } from '../Classes/Country.model';
declare var $: any;
@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.sass']
})
export class UniversityComponent implements OnInit {
  listOfUniversities: University[];
  listOfCountries: Country [];
  univeristyToUpdateOrDelete: University;
  curentUniversityName;
  currentUniversitySlogan;
  currentCountry;
  idOfUniversityToModify;
  countryID;
  currentCountryName;
  constructor(private universitySer: UniversityService, private countrySer: CountryService) { }

  ngOnInit(): void {
    $(function() {
      $('.singleFunction').click(function() {
        $('.targetFunction').hide();
        $('#function' + $(this).attr('target')).show();
      });
    });
    this.universitySer.ReadUniversity().subscribe((data: University[]) => {this.listOfUniversities = data;} );
  }
  displayedColumns: string[] = ['UniversityID', 'UniversityName', 'UniversitySlogan','CountryID','Update','Delete'];

  CreateUniversity(nameOfUniversity,sloganOfUniversity){
    this.universitySer.CreateUniversity(nameOfUniversity,sloganOfUniversity,this.countryID);   
  }

  updateUniversity(updatedUniversityName,updatedUniversitySlogan,UniversityID){
    this.universitySer.updateUnviersity(updatedUniversityName,updatedUniversitySlogan,this.countryID,UniversityID);
  }

  deleteUniversity(universityID){
    this.universitySer.deleteUniversty(universityID);

  }

  getUniversityToDelteOrUpdate(value){
    this.universitySer.getUniversityToUpdate(value).subscribe((data: University) => {this.univeristyToUpdateOrDelete = data;
    this.curentUniversityName = this.univeristyToUpdateOrDelete.UniversityName;
    this.currentUniversitySlogan = this.univeristyToUpdateOrDelete.UniversitySlogan;
    this.currentCountry = this.univeristyToUpdateOrDelete.CountryID;
    this.countrySer.getCountryToUpdateOrDelete(this.currentCountry).subscribe((data: Country) => this.currentCountryName = data.CountryName );
    this.idOfUniversityToModify = this.univeristyToUpdateOrDelete.UniversityID;
  });
  this.loadCountries();
  }

  loadCountries(){
    this.countrySer.ReadCountry().subscribe((data: Country []) => {this.listOfCountries = data;})
  }

  findCountryID(value){
    this.countryID = value;
  }
}
