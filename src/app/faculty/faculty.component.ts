import { Component, OnInit } from '@angular/core';
import { Faculty } from '../Classes/Faculty.model';
import {FacultyService} from '../API Services/Faculty/faculty.service'
import { University } from '../Classes/University.model';
import {UniversityService} from '../API Services/University/university.service'
declare var $: any;

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.sass']
})
export class FacultyComponent implements OnInit {
listOfFaculties : Faculty[];
getFacultyToModify: Faculty;
currentFacultyName;
currentFacultyDescription;
currentFacultyUniversity;
facultyIDToModify;
listOfUniversities: University[];
UniversityID;
currentUniverstyName;
  constructor(private facultySer : FacultyService,private universityServ: UniversityService) { }

  ngOnInit(): void {
    $(function() {
      $('.singleFunction').click(function() {
        $('.targetFunction').hide();
        $('#function' + $(this).attr('target')).show();
      });
    });
    this.facultySer.ReadFaculty().subscribe((data: Faculty[]) => {this.listOfFaculties = data; });
  }
  displayedColumns: string[] = ['FacultyID', 'FacultyName', 'FacultyDescription','UniversityID','Update','Delete'];
  dataSourceOfFaculties = this.listOfFaculties;

  createFaculty(nameOfFaculty,descriptionOfFaculty){
    this.facultySer.CreateFaculty(nameOfFaculty,descriptionOfFaculty,this.UniversityID);
  }

  updateFaculty(updatedName, updatedDescription, FacultyID){
    this.facultySer.UpdateFaculty(updatedName,updatedDescription,this.UniversityID,FacultyID);  
  }

  deleteFaculty(inputID){
    this.facultySer.deleteFaculty(inputID);
  }

  getFacultyToUpdateOrDelete(value){
    this.facultySer.getFacultyToUpdateOrDelete(value).subscribe((data: Faculty) => {this.getFacultyToModify = data; 
      this.currentFacultyName =  this.getFacultyToModify.FacultyName;
      this.currentFacultyDescription = this.getFacultyToModify.FacultyDescription;
      this.currentFacultyUniversity = this.currentFacultyUniversity;
      this.facultyIDToModify = data.FacultyID;
      this.universityServ.getUniversityToUpdate(this.UniversityID).subscribe((data: University) => this.currentUniverstyName   = data.UniversityName);
      this.getListOfFaculties();
  })}

  getListOfFaculties(){
    this.universityServ.ReadUniversity().subscribe((data: University[]) => this.listOfUniversities = data);
  }
  findUniversityID(value){
    this.UniversityID = value;
  }
}
