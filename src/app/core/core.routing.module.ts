import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../shared/main-layout/main-layout.component';
 
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent ,
    children: [
    ],
  },

];
 
@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: []
})
export class CoreRoutingModule { }