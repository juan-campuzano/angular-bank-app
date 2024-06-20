import { Component } from '@angular/core';
import { UserProfileService } from '../user-profile/service/user-profile.service';
import { UserProfile } from '../user-profile/interface/user-profile';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  userProfile? : UserProfile;

  constructor(
    private userProfileService : UserProfileService,
  ){}

  ngOnInit() : void{
    this.getUserProfile();
  }

  getUserProfile() : void{
    this.userProfileService.getUserProfile().subscribe(
      user => {
        this.userProfile = user;
      }
    );
  }
}
