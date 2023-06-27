import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
import { AddCollegeComponent } from './add-college/add-college.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { AddCampusComponent } from './campus-walkin/add-campus/add-campus.component';
import { CampusWalkinComponent } from './campus-walkin/campus-walkin/campus-walkin.component';
import { CollegeComponent } from './college/college.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
 
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
       {path: 'applicant',component: ApplicantComponent},
       {path : 'updateApplicant/:Id', component:UpdateApplicantComponent},
       {path: 'college',component:CollegeComponent},
       {path : 'addCollege',component:AddCollegeComponent},
       {path: 'campus',component:CampusWalkinComponent},
       {path : 'addCampus',component:AddCampusComponent},
    ],
  },

];
 
@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }