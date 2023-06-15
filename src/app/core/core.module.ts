import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApplicantComponent } from './applicant/applicant.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CollegeComponent } from './college/college.component';

@NgModule({
    imports: [
        CommonModule,
        DataTablesModule,
        HttpClientModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],

    providers: [
        //need to do comman service that i need in this project
    ],
    declarations: [
        ApplicantComponent,
        UpdateApplicantComponent,
        CollegeComponent
    ],
    exports: [
    ]
})
export class CoreModule {
}