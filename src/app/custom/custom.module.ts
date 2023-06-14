import { NgModule } from '@angular/core';
import { AdminRoutingModule } from '../admin/admin.routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';
 
@NgModule({
  declarations: [
 ],
  imports: [
    AdminRoutingModule
  ],
  providers: [],
})
export class CustomModule { }