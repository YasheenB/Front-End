import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from 'src/app/Classes/Student.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrlRead: string = "https://localhost:44344/api/readstudent";
  private apiUrlCreate: string = "https://localhost:44344/api/createStudent";
  constructor(private http: HttpClient) { }

  ReadStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrlRead);
  }

  CreateStudent(nameOfStudent,surnameOfStudent,ageOfStudent,raceOfStudent,identityOfUniversity){
    this.http.post(this.apiUrlCreate,{
      StudentName:nameOfStudent,
      StudentSurname: surnameOfStudent,
      StudentAge: ageOfStudent,
      StudentRace: raceOfStudent,
      UniversityID: identityOfUniversity,
    }).subscribe();
  }

  updateStudent(updatedName, updatedSurname,updatedAge,updatedRace,updatedUniversityID, StudentID){
    this.http.post("https://localhost:44344/api/updateStudent/" + StudentID,{
      StudentName:updatedName,
      StudentSurname: updatedSurname,
      StudentAge: updatedAge,
      StudentRace: updatedRace,
      UniversityID: updatedUniversityID,
    }).subscribe();
  }

  deleteStudent(StudentID){
    this.http.delete("https://localhost:44344/api/deleteStudent/" + StudentID).subscribe();
  }

  getStudentToUpdateOrDelete(value): Observable<Student>{
    return this.http.get<Student>("https://localhost:44344/api/getStudentToDeleteOrUpdate/" + value);
  }
}
  