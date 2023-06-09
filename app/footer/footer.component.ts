import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  template: `<footer [ngStyle]="{'background-color': isBgred ? 'red':''}" class="footer-header-flex">
                  <h4 class="display-block">Footer</h4>
                  <app-counter-button  (emitCount)="emitCount($event)">Clicked {{count}} times</app-counter-button>
                </footer>`,
  styles: [
    `
    footer {
      height: 80px;
      border-top: 3px solid #1560BD;
    }`,
  ],
})
export class FooterComponent {
  isBgred = false;
  count = 0;
  emitCount(cnt: number) {
    this.count = cnt;
    this.isBgred = cnt >= 10;
  }
}
