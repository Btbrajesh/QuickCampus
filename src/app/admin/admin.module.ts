import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

 
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
 ],
  imports: [
    AdminRoutingModule,  
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
})
export class AdminModule { }