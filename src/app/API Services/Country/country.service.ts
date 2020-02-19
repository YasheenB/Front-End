import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Country } from 'src/app/Classes/Country.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrlRead : string = "https://localhost:44344/api/readCountry";
  private apiUrlCreate : string = "https://localhost:44344/api/CreateCountry";
  constructor(private http: HttpClient) { }

  ReadCountry():Observable<Country[]>{
    return this.http.get<Country[]>(this.apiUrlRead);
  }

  CreateCountry(nameOfCountry,populationOfCountry){
   this.http.post(this.apiUrlCreate,{
     CountryName: nameOfCountry ,
     CountryPopulation: populationOfCountry
   }).subscribe();
  }

  UpdateCountry(countryID,nameOfCountry,populationOfCountry,){
    this.http.post("https://localhost:44344/api/updateCountry/"+countryID,{
      CountryName: nameOfCountry,
      CountryPopulation: populationOfCountry
    }).subscribe();
  }

  DeleteCountry(CountryID){
    this.http.delete("https://localhost:44344/api/deleteCountry/" + CountryID).subscribe();
  }

  getCountryToUpdateOrDelete(value):Observable<Country>{
    return this.http.get<Country>("https://localhost:44344/api/getCountryToDeleteOrUpdate/" + value);
  }
}
