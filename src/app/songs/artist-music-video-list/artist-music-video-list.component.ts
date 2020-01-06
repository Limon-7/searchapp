import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-music-video-list',
  templateUrl: './artist-music-video-list.component.html',
  styleUrls: ['./artist-music-video-list.component.css']
})
export class ArtistMusicVideoListComponent implements OnInit {

  videos: any;
  loading = false;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      console.log(params);
      this.loading = true;
      const url = `https://itunes.apple.com/lookup?id=${params['artistId']}&entity=musicVideo`;
      this.http.jsonp(url, 'callback').toPromise()
        .then(res => {
          console.log(res);
          this.videos = res['results'].slice(1);
          this.loading = false;
        });
    });
  }

  ngOnInit() {
  }

}
