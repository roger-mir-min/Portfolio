import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  private element: any;
  cvSrc = '../../../assets/docs/CV-EN-roger-mir-min.pdf';


    constructor(private el: ElementRef ) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
        document.body.appendChild(this.element);

        this.element.addEventListener('click', (el: any) => {
            if (el.target.className === 'cv-modal') {
                this.close();
            }
        });
    }

    ngOnDestroy() {
      this.element.remove();
    }

    open() {
        this.element.style.display = 'block';
        document.body.classList.add('cv-modal-open');
    }

    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('cv-modal-open');
    }
}
