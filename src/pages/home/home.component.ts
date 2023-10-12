import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { individualProjects, collaborativeProjects } from 'src/assets/projects';
import { iconsUrls } from 'src/assets/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  indivProjects = individualProjects;
  collabProjects = collaborativeProjects;
  icons = iconsUrls;

  selectedProject = individualProjects[0];
  selectProject(i: number) {
    this.selectedProject = this.indivProjects[i];
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    const cursorDotElement = this.elRef.nativeElement.querySelector('.cursor-dot');
    const cursorOutlineElement = this.elRef.nativeElement.querySelector('.cursor-outline');

    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDotElement.style.left = `${posX}px`;
      cursorDotElement.style.top = `${posY}px`;

      cursorOutlineElement.style.left = `${posX}px`;
      cursorOutlineElement.style.top = `${posY}px`;

      cursorOutlineElement.animate({
        left: `${posX}px`,
        top: `${posY}px`
      },{duration: 500, fill: "forwards"});
    })
  }

  labels = ['Tag1', 'Tag2', 'Tag3', /* ... */];
    currentTopIndex = 0;

    rotate() {
        this.currentTopIndex = (this.currentTopIndex + 1) % this.labels.length;
    }

    getLabelStyle(label: string) {
        const index = this.labels.indexOf(label);
        if (index === this.currentTopIndex) {
            return {color: 'blue'};  // Canvia això per a configurar el color de l'etiqueta en posició superior
        }
        return {};
    }

}
