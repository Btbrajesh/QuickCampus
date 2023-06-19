import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/pages/admin/admin.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ApplicantComponent } from './core/applicant/applicant.component';
import { UpdateApplicantComponent } from './core/update-applicant/update-applicant.component';
import { CollegeComponent } from './core/college/college.component';
import { AddCollegeComponent } from './core/add-college/add-college.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CampusWalkinComponent } from './core/campus-walkin/campus-walkin/campus-walkin.component';
import { AddCampusComponent } from './core/campus-walkin/add-campus/add-campus.component';

const routes: Routes = [
  {
    path: '',pathMatch:'full',component:AdminComponent ,
    children: [
         { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },]
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'applicant',component: ApplicantComponent},
  {path : 'updateApplicant', component:UpdateApplicantComponent},
  {path: 'college',component:CollegeComponent},
  {path : 'addCollege',component:AddCollegeComponent},
  {path: 'campus',component:CampusWalkinComponent},
  {path : 'addCampus',component:AddCampusComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [AdminModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
