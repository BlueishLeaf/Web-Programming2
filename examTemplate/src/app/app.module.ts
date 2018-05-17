import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
