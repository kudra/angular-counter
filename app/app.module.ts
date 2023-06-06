import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ContentComponent,
    CounterButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
