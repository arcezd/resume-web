import { Component, OnInit } from '@angular/core';

import { faLinkedinIn, faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

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

  constructor() { }

  ngOnInit() {
    // Typed JS Options
    const options = {
      strings: ["Sr Software Developer", "iOS Developer", "DevOps Engineer", "Geek", "Hobby drone pilot"],
      loop: true,
      typeSpeed: 60,
      backSpeed: 30,
      startDelay: 1e3,
      backDelay: 3e3
    };
    const typed = new Typed('.resume-section .subheading span', options); // Typed JS TRIGGER
  }

}
