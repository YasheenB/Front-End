import { Injectable } from '@angular/core';
import { Faculty } from 'src/app/Classes/Faculty.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private apiUrlRead : string = "https://localhost:44344/api/readFaculty";
  private apiUrlCreate : string = "https://localhost:44344/api/createFaculty";
  constructor(private http: HttpClient) { }
  ReadFaculty() :Observable<Faculty[]>{
    return this.http.get<Faculty[]>(this.apiUrlRead);
  }

  CreateFaculty(nameOfFaculty,decriptionOfFaculty, UniversityIdentity){
    this.http.post(this.apiUrlCreate,{
        FacultyName: nameOfFaculty,
        FacultyDescription: decriptionOfFaculty,
        UniversityID: UniversityIdentity
    }).subscribe();
    console.log("asa")
  }

  UpdateFaculty(updatedNameOfFaculty,udpatedFaucltyDescription,updatedUniversityID, facultyID){
    this.http.post("https://localhost:44344/api/updateFaculty/"+facultyID,{
      FacultyName: updatedNameOfFaculty,
      FacultyDescription: udpatedFaucltyDescription,
      UniversityID: updatedUniversityID
    }).subscribe();
  }

  deleteFaculty(FacultyID){
    this.http.delete("https://localhost:44344/api/deleteFaculty/"+FacultyID).subscribe();
  }

  getFacultyToUpdateOrDelete(value):Observable<Faculty>{
    return this.http.get<Faculty>("https://localhost:44344/api/getFacultyToDeleteOrUpdate/"+value);
  }
}
