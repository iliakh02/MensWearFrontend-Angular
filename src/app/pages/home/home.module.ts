import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewOuterwearCollectionComponent } from './new-outerwear-collection/new-outerwear-collection.component';
import { OurAdvantagesComponent } from './our-advantages/our-advantages.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { OurInformationComponent } from './our-information/our-information.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { ProductService } from 'src/app/services/product.service';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    FeaturedProductsComponent,
    NewOuterwearCollectionComponent,
    OurAdvantagesComponent,
    OurInformationComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NgbModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
