import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllshabuComponent } from './components/allshabu/allshabu.component';
import { SearchshabuComponent } from './components/searchshabu/searchshabu.component';
import { TopshabuComponent } from './components/topshabu/topshabu.component';
import { MapshabuComponent } from './components/mapshabu/mapshabu.component';
import { RateshabuComponent } from './components/rateshabu/rateshabu.component';

const appRoutes: Routes = [
  { path: '', component: AllshabuComponent },
  { path: 'allshabu', component: AllshabuComponent },
  { path: 'searchshabu', component: SearchshabuComponent },
  { path: 'topshabu', component: TopshabuComponent },
  { path: 'mapshabu', component: MapshabuComponent },
  { path: 'rateshabu', component: RateshabuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    AllshabuComponent,
    SearchshabuComponent,
    TopshabuComponent,
    MapshabuComponent,
    RateshabuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
