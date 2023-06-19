import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuickCampus';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  isLoginPage(): boolean {
    return this.router.url === '/login'; // Update this with your actual login page URL
  }
}
