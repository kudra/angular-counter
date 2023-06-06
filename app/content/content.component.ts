import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `<article [ngStyle]="{'background-color': isBgred ? 'red':''}">
  <div class="content-sidenav">
    <section>
      <h4>Content</h4>
    </section>
    <section class="inner_section">
    <app-counter-button [parentId]="'content'" (emitCount)="emitCount($event)">Clicked {{count}} times</app-counter-button>
    <app-counter-button [parentId]="'content'" (emitCount)="emitCount($event)">Clicked {{count}} times</app-counter-button>
    </section>
  </div>
</article>`,
  styles: [
    `
    .inner_section{
      display:flex;
      width:240px;
      align-items:center;
      justify-content:center;
      height:150px;
      margin-top:15vh;
      border: 3px solid #1560BD;
    }
  `,
  ],
})
export class ContentComponent {
  isBgred = false;
  count = 0;
  emitCount(cnt: number) {
    this.count = cnt;
    this.isBgred = cnt >= 10;
  }
}
