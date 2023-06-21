import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent, // Use the MainLayoutComponent as the layout for authenticated pages
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ],
  }

];
 
@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }