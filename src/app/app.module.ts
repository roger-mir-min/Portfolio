import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/core/header/header.component';
import { FooterComponent } from 'src/core/footer/footer.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { ScrollAnchorDirective } from 'src/shared/directives/scroll-anchor.directive';
import { ScrollManagerDirective } from 'src/shared/directives/scroll-manager.directive';
import { ScrollSectionDirective } from 'src/shared/directives/scroll-section.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ScrollAnchorDirective,
    ScrollManagerDirective,
    ScrollSectionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
