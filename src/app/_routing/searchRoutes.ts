import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SearchComponent } from '../search/search.component';
import { ArtistComponent } from '../songs/artist/artist.component';
import { ArtistTrackListComponent } from '../songs/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from '../songs/artist-album-list/artist-album-list.component';
import { ArtistMusicVideoListComponent } from '../songs/artist-music-video-list/artist-music-video-list.component';
export const searchRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    // { path: 'search/:term', component: SearchComponent },
    {
        path: 'artist/:artistId', component: ArtistComponent,
        children: [
            { path: '', component: ArtistTrackListComponent },
            { path: 'tracks', component: ArtistTrackListComponent },
            { path: 'albums', component: ArtistAlbumListComponent },
            { path: 'videos', component: ArtistMusicVideoListComponent }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
