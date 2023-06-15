import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ApplicantService } from '../services/applicant.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit{

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

  constructor(private service: ApplicantService,private router: Router){
  }

ngOnInit(): void {
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: this.pageLength,
    processing: true,
    serverSide: false, // Set this to true if you want to load data from server-side
    // Other options...
  
    // Add the following options for search, pagination, and filtering:
    searching: false,
    lengthChange: true,
    order: [[0, 'asc']], // Set the default sorting column and direction
  
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
  

  this.users();

  if (this.dtElement && this.dtElement.dtInstance) {
    // Call the DataTables API to reload the data
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }
}

  users(): void {
    this.service
      .users()
      .subscribe((response: any) => {
        this.allUsers = response.data;
        this.dtTrigger.next( this.allUsers);
        console.log(this.allUsers);
      });
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
    this.router.navigateByUrl('/updateApplicant');
    // Redirect to the edit component or perform any other action
  }
}
