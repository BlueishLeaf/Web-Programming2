import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'contactus', redirectTo: 'contact' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
