import { Component } from '@angular/core';

import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-web';

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
}
