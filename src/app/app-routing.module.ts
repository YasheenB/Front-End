import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CountryComponent} from "./country/country.component";
import {UniversityComponent} from "./university/university.component";
import {FacultyComponent} from "./faculty/faculty.component";
import {AnnouncementComponent} from "./announcement/announcement.component";
import {StudentComponent} from "./student/student.component";
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'LoginWorldUniversities', component: LoginComponent},
  {path: '',redirectTo:'/LoginWorldUniversities', pathMatch: 'full'},
  {path: 'RegisterUser',component: RegisterComponent},
  {path: 'Country',component: CountryComponent},
  {path: 'University',component: UniversityComponent},
  {path: 'Faculty',component: FacultyComponent},
  {path: 'Announcement',component: AnnouncementComponent},
  {path: 'Student',component: StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
