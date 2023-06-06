import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `<aside  [ngStyle]="{'background-color': isBgred ? 'red':''}">
              <div class="content-sidenav">
                  <h4>SideNav</h4>
                  <app-counter-button [parentId]="'sidenav'" (emitCount)="emitCount($event)"></app-counter-button>
              </div>
            </aside>`,
})
export class SidenavComponent {
  isBgred = false;
  emitCount(cnt: number) {
    this.isBgred = cnt >= 10;
  }
}
