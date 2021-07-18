import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NewOuterwearCollectionComponent } from './pages/home/new-outerwear-collection/new-outerwear-collection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurInformationComponent } from './pages/home/our-information/our-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NewOuterwearCollectionComponent,
    OurInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
