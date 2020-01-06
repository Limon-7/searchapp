import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
  tracks: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent.params.subscribe((params) => {
      const apiUrl = `https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song`;
      this.http.jsonp(apiUrl, 'callback').toPromise()
        .then(res => {
          console.log(res);
          this.tracks = res['results'].slice(1);
        });
    });
  }

  ngOnInit() {
  }

}
