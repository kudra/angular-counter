import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header [ngStyle]="{'background-color': isBgred ? 'red':''}" class="footer-header-flex">
                <h4>Header</h4>
                <app-counter-button [parentId]="'header'" (emitCount)="emitCount($event)">Clicked {{count}} times</app-counter-button>
              </header>`,
  styles: [
    `header{
              height: 80px;
              border-bottom: 3px solid #1560BD;
          }`,
  ],
})
export class HeaderComponent {
  isBgred = false;
  count = 0;
  emitCount(cnt: number) {
    this.count = cnt;
    this.isBgred = cnt >= 10;
  }
}
