import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { Page404Component } from './layout/page404/page404.component';
import { Page500Component } from './layout/page500/page500.component';

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
    MainLayoutComponent,
    SidebarComponent,
    Page404Component,
    Page500Component
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Page404Component,
    Page500Component
  ],
})

export class SharedModule {
}
