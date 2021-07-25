import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/body/app.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { NewOuterwearCollectionComponent } from './pages/home/new-outerwear-collection/new-outerwear-collection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurInformationComponent } from './pages/home/our-information/our-information.component';
import { FeaturedProductsComponent } from './pages/home/featured-products/featured-products.component';
import { OurAdvantagesComponent } from './pages/home/our-advantages/our-advantages.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NewOuterwearCollectionComponent,
    OurInformationComponent,
    FeaturedProductsComponent,
    OurAdvantagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', redirectTo: ''}
      
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
