import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';
import { LoginComponent } from './admin/pages/login/login.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { AdminComponent } from './admin/pages/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' }, // Redirect to admin login page
  {   path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
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
{
    path: 'login',
    component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
