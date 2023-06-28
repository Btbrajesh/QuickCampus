import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './_models/user';
import { AuthenticationService } from './_services/authentication.service';
import { Role } from './_models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuickCampus';
  user?: User | null;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  isLoginPage(): boolean {
    return this.router.url === '/login'; // Update this with your actual login page URL
  }

  get isAdmin() {
      return this.user?.role === Role.Admin;
  }

  logout() {
      this.authenticationService.logout();
  }
}
