import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-outerwear-collection',
  templateUrl: './new-outerwear-collection.component.html',
  styleUrls: ['./new-outerwear-collection.component.css'],
  providers: [NgbCarouselConfig]
})
export class NewOuterwearCollectionComponent {
  images = [
    "/assets/images/new-outerwear-collection-slides/slide-1.jpg",
    "/assets/images/new-outerwear-collection-slides/slide-2.jpg",
    "/assets/images/new-outerwear-collection-slides/slide-3.jpg"
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.showNavigationArrows = false;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
  }
}
