import { NgModule, Optional, SkipSelf } from '@angular/core';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CampusWalkinComponent } from './campus-walkin/campus-walkin/campus-walkin.component';
import { AddCampusComponent } from './campus-walkin/add-campus/add-campus.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        DataTablesModule,
        HttpClientModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        SharedModule,
        ToastrModule
    ],

    providers: [
        //need to do comman service that i need in this project
    ],
    declarations: [
        ApplicantComponent,
        UpdateApplicantComponent,
        CollegeComponent,
        AddCollegeComponent,
        PageNotFoundComponent,
        CampusWalkinComponent,
        AddCampusComponent,
    ],
    exports: [
    ]
})
export class CoreModule {
}