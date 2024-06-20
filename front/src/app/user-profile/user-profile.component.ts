import { Component } from '@angular/core';
import { UserProfileService } from './service/user-profile.service';
import { UserProfile } from './interface/user-profile';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userProfile? : UserProfile;

  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    role: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
  });

  constructor(
    private userProfileService: UserProfileService,
  ){}

  ngOnInit() : void{
    this.getUserProfile();
  }

  getUserProfile() : void{
    this.userProfileService.getUserProfile().subscribe(
      user => {
        this.userProfile = user;
        this.userForm.patchValue(user);
      }
    );
  }
}
