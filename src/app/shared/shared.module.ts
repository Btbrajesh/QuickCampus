import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';


// https://angular.io/styleguide#!#04-10
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})

export class SharedModule {
}
