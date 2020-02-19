import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Anouncement} from 'src/app/Classes/Announcement.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private apiUrlRead: string = "https://localhost:44344/api/readAnnouncement";
  private apiUrlCreate: string = "https://localhost:44344/api/createAnnouncement";

  constructor(private http: HttpClient) { }
  ReadAnnouncements(): Observable<Anouncement []>{
    return this.http.get<Anouncement[]>(this.apiUrlRead);
  }
  CreateAnnouncement(dateOfAnnouncement,subjectOfAnnouncement,bodyOfAnnouncement,FacultyIdentity){
    this.http.post(this.apiUrlCreate,{
      announcementDate: dateOfAnnouncement,
      announcementSubject: subjectOfAnnouncement,
      announcementBody: bodyOfAnnouncement,
      FacultyID: FacultyIdentity
    }).subscribe();
  }

  UpdateAnnouncement(updatedDate,updatedSubject,updatedBody,updatedFacultyID,AnnouncementID){
    this.http.post("https://localhost:44344/api/updateAnnouncement/" + AnnouncementID,{
      announcementDate: updatedDate,
      announcementSubject: updatedSubject,
      announcementBody: updatedBody,
      FacultyID: updatedFacultyID
    }).subscribe();
  }

  deleteAnnouncement(AnnouncementID){
    this.http.delete("https://localhost:44344/api/deleteAnnouncement/" + AnnouncementID).subscribe();
  }

  getAnnuncementToUpdateOrDelete(value): Observable<Anouncement>{
    return this.http.get<Anouncement>("https://localhost:44344/api/getAnnouncementToDeleteOrUpdate/" + value);
  }
}
