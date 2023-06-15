import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/pages/admin/admin.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ApplicantComponent } from './core/applicant/applicant.component';
import { UpdateApplicantComponent } from './core/update-applicant/update-applicant.component';
import { SharedModule } from './shared/shared.module';
import { CollegeComponent } from './core/college/college.component';

const routes: Routes = [
  {
    path: '',component:AdminComponent ,
    children: [
         { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },]
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'applicant',component: ApplicantComponent},
  {path : 'updateApplicant', component:UpdateApplicantComponent},
  {path: 'college',component:CollegeComponent}
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [AdminModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
