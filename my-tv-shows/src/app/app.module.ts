import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { OmdbApiService } from './omdb-api.service';
import { TvShowComponent } from './tv-show/tv-show.component';


@NgModule({
  declarations: [
    AppComponent,
    TvShowListComponent,
    TvShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OmdbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
