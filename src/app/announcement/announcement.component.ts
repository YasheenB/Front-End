import { Component, OnInit, ɵConsole } from '@angular/core';
import { Anouncement } from '../Classes/Announcement.model';
import { AnnouncementService } from '../API Services/Announcement/announcement.service';
import {FacultyService} from '../API Services/Faculty/faculty.service'
import { Faculty } from '../Classes/Faculty.model';
declare var $: any;
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.sass']
})
export class AnnouncementComponent implements OnInit {
  listOfAnnouncements: Anouncement[];
  announcementToModify: Anouncement;
  currentAnnuncementDate;
  currentAnnouncementSubject;
  currentAnnouncementBody;
  currentAnnouncementFaculty;
  announcememtToModifyID;
  listOfFaculties: Faculty [];
  faculityIdentity;
  facultyName;
  constructor(private announcementSer: AnnouncementService, private facultySer: FacultyService) { }

  ngOnInit(): void {
    $(function() {
      $('.singleFunction').click(function() {
        $('.targetFunction').hide();
        $('#function' + $(this).attr('target')).show();
      });
    });
    this.announcementSer.ReadAnnouncements().subscribe((data: Anouncement[]) => {this.listOfAnnouncements = data;});
  }
  displayedColumns: string[] = ['AnnouncementID', 'AnnouncementDate', 'AnnouncementSubject','AnnouncementBody','FacultyID','Update','Delete'];
  dataSourceOfAnouncements = this.listOfAnnouncements;

  createAnnouncement(dateOfAnnouncement,subjectOfAnnouncement,bodyOfAnnouncement,){
    this.announcementSer.CreateAnnouncement(dateOfAnnouncement,subjectOfAnnouncement,bodyOfAnnouncement,this.faculityIdentity);
  }

  updateAnnouncement(updatedDate,updatedSubject,updatedBody,AnnouncementID){
    this.announcementSer.UpdateAnnouncement(updatedDate,updatedSubject,updatedBody,this.faculityIdentity,AnnouncementID);
  }

  deleteAnnouncement(AnnouncementID){
    this.announcementSer.deleteAnnouncement(AnnouncementID);
  }

  GetAnnouncementToUpdateOrDelete(value){ //date range does not match required range
    this.announcementSer.getAnnuncementToUpdateOrDelete(value).subscribe((data: Anouncement) => {this.currentAnnuncementDate = data.announcementDate;
    this.currentAnnouncementBody = data.announcementBody;
    this.currentAnnouncementSubject = data.announcementSubject;
    this.currentAnnouncementFaculty = data.FacultyID;
    this.announcememtToModifyID = data.AnnouncementID;
    this.facultySer.getFacultyToUpdateOrDelete(this.faculityIdentity).subscribe((data: Faculty) => this.facultyName = data.FacultyName)});
    this.getListOfFaculties();
}

getListOfFaculties(){
  this.facultySer.ReadFaculty().subscribe((data: Faculty []) => this.listOfFaculties = data);
}
findFacultyID(value){
  this.faculityIdentity = value;
}
}
