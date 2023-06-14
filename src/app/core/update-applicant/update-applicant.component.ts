import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
})
export class UpdateApplicantComponent implements OnInit{
  applicantForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.applicantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      highestQualification: ['', Validators.required],
      highestQualificationPercentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      matricPercentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      intermediatePercentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      skills: ['']
    });
  }

  submitForm(){
    
  }

}
