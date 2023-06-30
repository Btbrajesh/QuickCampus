import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';
import { LoginComponent } from './admin/pages/login/login.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { AdminComponent } from './admin/pages/admin/admin.component';
import { ApplicantComponent } from './core/applicant/applicant.component';
import { UpdateApplicantComponent } from './core/update-applicant/update-applicant.component';
import { AddCollegeComponent } from './core/add-college/add-college.component';
import { AddCampusComponent } from './core/campus-walkin/add-campus/add-campus.component';
import { CampusWalkinComponent } from './core/campus-walkin/campus-walkin/campus-walkin.component';
import { CollegeComponent } from './core/college/college.component';
import { Page404Component } from './shared/layout/page404/page404.component';
import { Page500Component } from './shared/layout/page500/page500.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
     canActivate: [AuthGuard]
},
{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},
{path: 'applicant',component: ApplicantComponent},
{path : 'updateApplicant/:Id', component:UpdateApplicantComponent},
{path: 'college',component:CollegeComponent},
{path : 'addCollege',component:AddCollegeComponent},
{path: 'campus',component:CampusWalkinComponent},
{path : 'addCampus',component:AddCampusComponent},

{
    path: 'login',
    component: LoginComponent
},
{   path: 'adminUser',
loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard],  data: { roles: [Role.Admin]}
},
{   path: 'core',
loadChildren: () => import('./core/core.module').then(m => m.CoreModule),canActivate: [AuthGuard],  data: { roles: [Role.Admin]}
},
{
  path: '404',
  component: Page404Component,
  data: {
    title: 'Page 404'
  }
},
{
  path: '500',
  component: Page500Component,
  data: {
    title: 'Page 500'
  }
},
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
