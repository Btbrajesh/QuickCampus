import { Component, NgModule, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ApplicantService } from './applicant.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit,OnDestroy  {

  posts: any;
  @ViewChild(DataTableDirective, { static: false })
  datatableElement: any = DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dtColumns: DataTables.ColumnSettings[] = [];
  pageLength:number = 10;
  lastPage = 0;
  dtInstance: any;
  isLength!: boolean;
  allUsers: any = [];
  applicantList :any[]=[];
 
  constructor(private applicantService: ApplicantService,private router: Router){
   
  }

ngOnInit(): void {
  this.getApplicantList();
}

getApplicantList(){
  this.applicantService.getApplicantList().subscribe(resp =>{
    console.log(resp);
    if(resp.isSuccess){
      this.applicantList = resp.data;
      this.applicantList.map((applicant) => {
        applicant.fullName = `${applicant.firstName} ${applicant.lastName}`;
      });
    }
  },err =>{
    console.log("Error in applicant list",err);
  })
}

ngOnDestroy(): void {
  this.dtTrigger.unsubscribe();
}

  toggleActive(user: any): void {
    user.isActive = !user.isActive;
    // Call your service method to update the user's active status
  }
  
  editUser(user: any): void {
    const url = `/updateApplicant/${user.applicantID}`;
    this.router.navigateByUrl(url);
  }

}
