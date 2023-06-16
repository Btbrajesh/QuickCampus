import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ApplicantComponent } from './applicant/applicant.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CollegeComponent } from './college/college.component';
import { AddCollegeComponent } from './add-college/add-college.component';

@NgModule({
    imports: [
        CommonModule,
        DataTablesModule,
        HttpClientModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        SharedModule
    ],

    providers: [
        //need to do comman service that i need in this project
    ],
    declarations: [
        ApplicantComponent,
        UpdateApplicantComponent,
        CollegeComponent,
        AddCollegeComponent,
    ],
    exports: [
    ]
})
export class CoreModule {
}