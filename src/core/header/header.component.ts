import { Component, OnInit } from '@angular/core';
import { individualProjects, collaborativeProjects } from 'src/assets/projects';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  indivProjects = individualProjects;
  collabProjects = collaborativeProjects;

  constructor() { }

  ngOnInit() {
  }

}
