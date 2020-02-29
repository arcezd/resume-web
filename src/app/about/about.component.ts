import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { faLinkedinIn, faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import { ProfileService } from '../profile/profile.service';
import { UserProfile } from '../profile/user-profile';

import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faFileDownload = faFileDownload;

  public profile$: Observable<UserProfile>;

  constructor(
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    this.loadUserProfile();
    this.loadTypedText();
  }

  loadTypedText() {
    // Typed JS Options
    const options = {
      strings: ["Sr Software Developer", "iOS Developer", "DevOps Engineer", "AWS Certified Developer", "Geek", "Hobby drone pilot"],
      loop: true,
      typeSpeed: 60,
      backSpeed: 30,
      startDelay: 1e3,
      backDelay: 3e3
    };
    const typed = new Typed('.resume-section .subheading span', options); // Typed JS TRIGGER
  }

  loadUserProfile() {
    this.profile$ = this.profileService.GetUserProfile().pipe(share());
  }

}
