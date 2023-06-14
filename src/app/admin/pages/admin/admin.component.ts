import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm!:FormGroup

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router ) {
  }

  ngOnInit(): void {   

    this.loginForm = this.formBuilder.group({
      "username": ['', Validators.required],
      'password': ['',Validators.required]
    });
  }

  submitForm(){
    if(this.loginForm.valid){
      console.log("login form",this.loginForm.value);
      this.router.navigateByUrl('/dashboard');
    }else{
      console.log("form invalid");
      this.validateAllFormFields(this.loginForm)
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control) {
        if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        } else {
          control.markAsTouched({ onlySelf: true });
        }
      }
    });
  }
}
