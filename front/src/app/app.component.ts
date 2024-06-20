import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './auth/service/authentication.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bank app';



  isLoggedIn() : boolean {
    const token = localStorage.getItem('accessToken') ?? '';
    if (token == null || token == '') {
      return false;
    }
    else {
      return true;
    }
  }
}
