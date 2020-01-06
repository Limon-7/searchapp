import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
  albums: any;
  loading = false;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.parent.params.subscribe(params => {
      console.log(params);
      this.loading = true;
      const url = `https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album`;
      this.http.jsonp(url, 'callback').toPromise()
        .then(res => {
          console.log(res);
          this.albums = res['results'].slice(1);
          this.loading = false;
        });
    });
  }

  ngOnInit() {
  }

}
