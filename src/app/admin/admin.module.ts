import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';

 
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminlayoutComponent
 ],
  imports: [
    AdminRoutingModule,  
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
})
export class AdminModule { }