import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { University } from 'src/app/Classes/University.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiUrlRead: string = "https://localhost:44344/api/readUniversity";
  private apiUrlCreate: string = "https://localhost:44344/api/createUniversity";
  constructor(private http: HttpClient) { }

  ReadUniversity(): Observable<University[]>{
    return this.http.get<University[]>(this.apiUrlRead);
  }

  CreateUniversity(nameOfUniversity,sloganOfUniversity,CountryID){
    this.http.post(this.apiUrlCreate,{
      UniversityName: nameOfUniversity,
      UniversitySlogan: sloganOfUniversity,
      CountryID: CountryID
    }).subscribe();
  }

  updateUnviersity(updatedNameOfUniversity,updatedUnviersitySlogan,updatedCountryID, idOfUniversity){
  
    this.http.post("https://localhost:44344/api/updateUniversity/"+idOfUniversity,{
      UniversityName: updatedNameOfUniversity,
      UniversitySlogan: updatedUnviersitySlogan,
      CountryID: updatedCountryID
    }).subscribe();

  }

  deleteUniversty(UniversityID){
    this.http.delete("https://localhost:44344/api/deleteUniversity/"+UniversityID).subscribe();
  }

  getUniversityToUpdate(value):Observable<University>{
    return this.http.get<University>("https://localhost:44344/api/getUniversityToDeleteOrUpdate/"+value);
  }
}
