import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { ProfileService } from '../profile/profile.service';
import { UserProfile } from '../profile/user-profile';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public profile$: Observable<UserProfile>;

  constructor(
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.profile$ = this.profileService.GetUserProfile().pipe(share());
  }

}
