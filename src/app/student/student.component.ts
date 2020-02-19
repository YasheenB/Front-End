import { Component, OnInit } from '@angular/core';
import { Student } from '../Classes/Student.model';
import { StudentService } from '../API Services/Student/student.service';
import {UniversityService} from '../API Services/University/university.service'
import { University } from '../Classes/University.model';
import {Router } from '@angular/router';
import {Location} from '@angular/common'
declare var $: any;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {
  listOfStudents: Student[];
  studentToModify: Student;
  currentStudentName;
  currentStudentSurname;
  currentStudentAge;
  currentStudentRace;
  currentStudentUniversity;
  studentIdToModify;
  listOfAllUniversities;
  universityIdentity;
  universityName;
  constructor(private studentSer: StudentService, private universitySer: UniversityService, private myRouter: Router,private myLocation: Location) { }

  ngOnInit(): void {
      $(function() {
        $('.singleFunction').click(function() {
          $('.targetFunction').hide();
          $('#function' + $(this).attr('target')).show();
        });
      });

      this.studentSer.ReadStudents().subscribe((data: Student[]) => {this.listOfStudents = data;});      
  }
  displayedColumns: string[] = ['StudentID', 'StudentName', 'StudentSurname','StudentAge','StudentRace','UniversityID','Delete','Update'];
  
  createStudent(name,surname,age,race){
    this.studentSer.CreateStudent(name,surname,age,race,this.universityIdentity);
  }

  updateStudent(updatedName, updatedSurname,updatedAge,updatedRace, StudentID){
    this.studentSer.updateStudent(updatedName, updatedSurname,updatedAge,updatedRace,this.universityIdentity, StudentID);
  }

  deleteStudent(StudentID){
    this.studentSer.deleteStudent(StudentID);
  }
  
  GetStudentToUpdateOrDelete(id){
    this.studentSer.getStudentToUpdateOrDelete(id).subscribe((data: Student) => {this.studentToModify = data; 
    this.currentStudentName = data.StudentName;
    this.currentStudentSurname = data.StudentSurname;
    this.currentStudentAge = data.StudentAge;
    this.currentStudentRace = data.StudentRace;
    this.currentStudentUniversity = data.UniversityID;
    this.studentIdToModify = data.StudentID;
    this.universitySer.getUniversityToUpdate(this.universityIdentity).subscribe((data: University) => {this.universityName = data.UniversityName; console.log(this.universityName);})
    this.getListOfUniversities(); });
  }

  getListOfUniversities(){
    this.universitySer.ReadUniversity().subscribe((data: University[]) => {this.listOfAllUniversities = data;});
 
  }

  findUniversityID(value){
    this.universityIdentity = value;
  }
}
