import { Component, OnInit } from '@angular/core';

import { faHtml5, faCss3Alt, faJsSquare, faAngular, faReact, faNodeJs, faSass, faLess, faWordpress, faGulp, faGrunt, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJsSquare = faJsSquare;
  faAngular = faAngular;
  faReact = faReact;
  faNodeJs = faNodeJs;
  faSass = faSass;
  faLess = faLess;
  faWordpress = faWordpress;
  faGulp = faGulp;
  faGrunt = faGrunt;
  faNpm = faNpm;
  faCheck = faCheck;

  constructor() { }

  ngOnInit() {
  }

}
