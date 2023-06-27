import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantService } from '../../applicant/applicant.service';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CampusWalkInService } from '../campuswalkin.service';


@Component({
  selector: 'app-campus-walkin',
  templateUrl: './campus-walkin.component.html',
  styleUrls: ['./campus-walkin.component.css']
})
export class CampusWalkinComponent implements OnInit{

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

  constructor(private campusWalkInService: CampusWalkInService,private router: Router){
  }

ngOnInit(): void {
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: this.pageLength,
    processing: true,
    serverSide: false,
    searching: false,
    lengthChange: true,
    paging:true,
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
    this.
    campusWalkInService.getCampusWalkInList()
      .subscribe((response: any) => {
        this.allUsers = response.data;
        this.dtTrigger.next( this.allUsers);
        console.log(this.allUsers);
      });
  }

  toggleActive(user: any): void {
    user.isActive = !user.isActive;
    // Call your service method to update the user's active status
  }
  
  editUser(user: any): void {
    console.log(user);
    this.router.navigateByUrl('/addCampus');
    // Redirect to the add component or perform any other action
  }

  addCollege(){
    this.router.navigateByUrl('/addCampus');
  }
}
