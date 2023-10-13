import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { individualProjects, collaborativeProjects } from 'src/assets/projects';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('dropdown') dropdown!: ElementRef;

  indivProjects = individualProjects;
  collabProjects = collaborativeProjects;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

     if (targetElement && this.dropdown.nativeElement !== targetElement
       && !this.dropdown.nativeElement.contains(targetElement)
      && this.dropdown.nativeElement.hasAttribute('open')) {
        this.dropdown.nativeElement.removeAttribute('open');
    }
  }

}
