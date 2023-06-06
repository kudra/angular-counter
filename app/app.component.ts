import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="project-container">
                <app-header></app-header>
              <main class="main-container">
                <app-sidenav class="aside"></app-sidenav>
                <app-content class="article"></app-content>
              </main>
              <app-footer></app-footer>
              </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter-app';
}
