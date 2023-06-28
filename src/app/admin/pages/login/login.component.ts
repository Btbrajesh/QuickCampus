import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './login.service';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // loginForm!:FormGroup;
 // loginData:any;

//   constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
//     private router: Router,private accountService :AccountService,private toastr: ToastrService ) {
//   }

//   ngOnInit(): void {   
//     this.loginForm = this.formBuilder.group({
//       "userName": ['', Validators.required],
//       'password': ['',Validators.required]
//     });
//   }

//   submitForm(){
//     debugger;
//     if(this.loginForm.valid){
//       this.loginData = this.loginForm.value;
//       if(this.loginData.userName == 'admin' && this.loginData.password =='123456'){
//         this.accountService.login(this.loginData).subscribe( 
//           response => {
//             this.toastr.success("You are successfully logged in");
//             this.router.navigateByUrl('/applicant');
//           },
//           err => {
//             this.toastr.success("You are successfully logged in");
//             this.router.navigateByUrl('/applicant');
//             console.log('Error:', err);
//           });
//       }
//       console.log("login form",this.loginForm.value);
//     }else{
//       console.log("form invalid");
//       this.validateAllFormFields(this.loginForm)
//     }
//   }

//   validateAllFormFields(formGroup: FormGroup) {
//     Object.keys(formGroup.controls).forEach((field) => {
//       const control = formGroup.get(field);
//       if (control) {
//         if (control instanceof FormGroup) {
//           this.validateAllFormFields(control);
//         } else {
//           control.markAsTouched({ onlySelf: true });
//         }
//       }
//     });
//   }
// }
// function err(error: any): void {
//   throw new Error('Function not implemented.');
// }


loginForm!: FormGroup;
loading = false;
submitted = false;
error = '';

constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
) {
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
        this.router.navigate(['/']);
    }
}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

submitForm() {
  debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f['userName'].value, this.f['password'].value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
                this.error = error;
                this.loading = false;
            }
        });
}

}

