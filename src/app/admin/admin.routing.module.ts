import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
 
const routes: Routes = [
    {   path: 'login', component: AdminComponent},
    { path: 'dashboard', component: DashboardComponent},
];
 
@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }