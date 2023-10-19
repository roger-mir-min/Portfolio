import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { individualProjects, collaborativeProjects } from 'src/assets/projects';
import { iconsUrls } from 'src/assets/projects';
import { ModalComponent } from 'src/shared/components/modal/modal.component';

type hoveredElement = 'downloadCv' | 'openCv' | 'contact' | 'card-button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(ModalComponent) modal!: ModalComponent;

  indivProjects = individualProjects;
  collabProjects = collaborativeProjects;
  icons = Object.values(iconsUrls);
  cvSrc = '../../assets/docs/CV-EN-roger-mir-min.pdf';
  downloadCvLinkIsHovered = false;
  openCvLinkIsHovered = false;
  contactLinkIsHovered = false;
  cardButtonIsHovered = false;

  selectedProject = individualProjects[0];

  selectProject(i: number) {
    this.selectedProject = this.indivProjects[i];
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    //CUSTOM CURSOR
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

  hoverCvLink(linkType: hoveredElement) {
    if (linkType === 'downloadCv') {
      this.downloadCvLinkIsHovered = !this.downloadCvLinkIsHovered;
    } else if (linkType === 'openCv') {
      this.openCvLinkIsHovered = !this.openCvLinkIsHovered;
    } else if (linkType === 'contact') {
      this.contactLinkIsHovered = !this.contactLinkIsHovered;
    } else if (linkType === 'card-button') {
      this.cardButtonIsHovered = !this.cardButtonIsHovered;
    }
  }

    openCvModal() {
    this.modal.open();
  }


}
