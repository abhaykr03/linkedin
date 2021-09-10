import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavIconsComponent } from './nav-icons/nav-icons.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { WhiteNavbarComponent } from './secondNavbar/white-navbar/white-navbar.component';
import { CoverComponent } from './coverCard/cover/cover.component';
import { StickyNavbarComponent } from './thirdNavbar/sticky-navbar/sticky-navbar.component';
import { AboutComponent } from './about/about/about.component';
import { SideBarComponent } from './sideBarRight/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavIconsComponent,
    ButtonComponent,
    SearchComponent,
    WhiteNavbarComponent,
    CoverComponent,
    StickyNavbarComponent,
    AboutComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
