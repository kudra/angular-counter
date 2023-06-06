import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `<aside  [ngStyle]="{'background-color': isBgred ? 'red':''}">
              <div class="content-sidenav">
                  <h4>SideNav</h4>
                  <app-counter-button [parentId]="'sidenav'" (emitCount)="emitCount($event)">Clicked {{count}} times</app-counter-button>
              </div>
            </aside>`,
})
export class SidenavComponent {
  isBgred = false;
  count = 0;
  emitCount(cnt: number) {
    this.count = cnt;
    this.isBgred = cnt >= 10;
  }
}
