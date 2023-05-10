import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrouseldebaseComponent } from './carrouseldebase/carrouseldebase.component';
import { PageDeImage1Component } from './page-de-image1/page-de-image1.component';



@NgModule({
  declarations: [
    AppComponent,
   
    CarrouseldebaseComponent,
  
    PageDeImage1Component
    
   
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
