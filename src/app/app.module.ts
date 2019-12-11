import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule} from '@angular/forms';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';

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
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: AllshabuComponent },
  { path: 'allshabu', component: AllshabuComponent },
  { path: 'searchshabu', component: SearchshabuComponent },
  { path: 'topshabu', component: TopshabuComponent },
  { path: 'mapshabu', component: MapshabuComponent },
  { path: 'rateshabu', component: RateshabuComponent },
  { path: 'contact', component: ContactComponent }
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
    RateshabuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
