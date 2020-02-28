import { Component, OnInit } from '@angular/core';

import { faLinkedinIn, faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

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

  constructor() { }

  ngOnInit() {
  }

}
