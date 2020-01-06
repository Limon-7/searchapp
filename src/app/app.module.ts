import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchService } from './_service/search.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './_routing/route';
import { CorePromiseComponent } from './http/core-promise/core-promise.component';
import { CoreObservableComponent } from './http/core-observable/core-observable.component';
import { JsonpObservableComponent } from './http/jsonp-observable/jsonp-observable.component';
import { JsnopPromiseComponent } from './http/jsnop-promise/jsnop-promise.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { searchRoutes } from './_routing/searchRoutes';
import { ArtistComponent } from './songs/artist/artist.component';
import { ArtistAlbumListComponent } from './songs/artist-album-list/artist-album-list.component';
import { ArtistMusicVideoListComponent } from './songs/artist-music-video-list/artist-music-video-list.component';
import { ArtistTrackListComponent } from './songs/artist-track-list/artist-track-list.component';

@NgModule({
   declarations: [
      AppComponent,
      CorePromiseComponent,
      CoreObservableComponent,
      JsonpObservableComponent,
      JsnopPromiseComponent,
      HomeComponent,
      HeaderComponent,
      SearchComponent,
      ArtistComponent,
      ArtistAlbumListComponent,
      ArtistMusicVideoListComponent,
      ArtistTrackListComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientJsonpModule,
      RouterModule.forRoot(searchRoutes, { useHash: true })
   ],
   providers: [
      SearchService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
