import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

 
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminlayoutComponent,
    HomeComponent,
    AdminComponent
 ],
  imports: [
    AdminRoutingModule,  
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
})
export class AdminModule { }