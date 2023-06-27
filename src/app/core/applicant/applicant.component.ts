import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ApplicantService } from './applicant.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  posts: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dtColumns: DataTables.ColumnSettings[] = [];
  pageLength:number = 10;
  lastPage = 0;
  dtInstance: any;
  isLength!: boolean;
  allUsers: any = [];
  applicantList :any[]=[];
  userData:any =[
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
    {
      "id": 1,
      "name": "Leanne Graham",
      "collegeName": "Bret",
      "email": "Sincere@april.biz",
      "highestQualification": 'MCA',
      "phone": "6489346345",
       "Action": "InActive"
    },
   
  ]

  constructor(private applicantService: ApplicantService,private router: Router){
    setTimeout(()=>{   
      $('#datatableexample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        lengthMenu : [5, 10, 25]
    } );
    }, 1);
  
  }

ngOnInit(): void {
  this.getApplicantList();
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: this.pageLength,
    processing: true,
    serverSide: true,
    searching: false,
    lengthChange: true,
    order: [[0, 'asc']],
    language: {
      paginate: {
        "first": "First",
        "last": "Last",
        "next": "Next",
        "previous": "Previous",
      },
      info: "_START_ to _END_ of _TOTAL_",
      infoEmpty: "0 to 0 of 0",
    },
  };

  if (this.dtElement && this.dtElement.dtInstance) {
    // Call the DataTables API to reload the data
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }
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
    console.log(user);
  
    const url = `/updateApplicant/${user.applicantID}`;
    this.router.navigateByUrl(url);
  }

}
