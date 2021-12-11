import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { ParalaxposterComponent } from './paralaxposter/paralaxposter.component';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParalaxposterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxParallaxScrollModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
