import { Component } from '@angular/core';
import { first } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = false;
  user: User;
  userFromApi?: User;

  constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService
  ) {
      this.user = <User>this.authenticationService.userValue;
  }

  ngOnInit() {
    debugger;
      // this.loading = true;
      // this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
      //     this.loading = false;
      //     this.userFromApi = user;
      // });
  }

}
