import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Applicant } from './applicant';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantService } from '../applicant/applicant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
})
export class UpdateApplicantComponent implements OnInit{
  applicantForm!: FormGroup;
  applicant!:Applicant;
  applicantId!: any;
  applicantRecord:any;
  colleges:any= [
    {
      "disabled": true,
      "group": {
        "disabled": true,
        "name": "string"
      },
      "selected": true,
      "text": "string",
      "value": "string"
    }
  ];

  constructor(private toastr: ToastrService,private router: Router,private formBuilder: FormBuilder,private route: ActivatedRoute,private applicantService:ApplicantService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.applicantId = params.get('Id')
      console.log(this.applicantId); // Outputs the value of the 'Id' parameter
    });
    this.applicantForm = this.formBuilder.group({
      applicantId:[this.applicantId],
      firstName: ['', Validators.required],
      lastName: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      higestQualification: ['', Validators.required],
      higestQualificationPercentage: ['', [Validators.required, Validators.max(100)]],
      matricPercentage: ['', [Validators.required, Validators.max(100)]],
      intermediatePercentage: ['', [Validators.required, Validators.max(100)]],
      skills: [''],
      applicantCollegeLogo:[''],
      applicantCollegeName:[''],
      collegeId:[0],
      colleges:[null]
    });
    this.getApplicantById();
  }

  submitForm() {
    debugger;
    if (!this.applicantForm.invalid) {
      console.log(this.applicantForm.value);
      this.applicantRecord = this.applicantForm.value;
      this.applicantRecord.colleges = this.colleges;
      console.log("applicant form",this.applicantRecord);
      this.applicantService.updateApplicant(this.applicantId,this.applicantRecord).subscribe(resp => {
        this.router.navigateByUrl('/applicant');
        this.toastr.success('Applicant updated successfully');
      }, err => {
        this.toastr.error("Something went wrong please try again");
      })
    }
  }

getApplicantById(){
 this.applicantService.getApplicantById(this.applicantId).subscribe( resp =>{
       console.log(resp,"resp");
       this.updateApplicant(resp);
 });
}

  updateApplicant(item:Applicant){
    this.applicantForm.patchValue({
      applicantId: item.applicantId,
      firstName: item.firstName,
      lastName: item.lastName,
      emailAddress: item.emailAddress,
      phoneNumber: item.phoneNumber,
      higestQualification :item.higestQualification,
      higestQualificationPercentage :item.higestQualificationPercentage,
      matricPercentage:item.matricPercentage,
      intermediatePercentage :item.intermediatePercentage,
      skills :item.skills
    });
  }

}
