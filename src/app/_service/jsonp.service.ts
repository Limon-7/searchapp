import { Injectable } from '@angular/core';
import { JsonpClientBackend, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SearchIteam } from '../_model/searchIteam';

@Injectable({
  providedIn: 'root'
})
export class JsonpService {
  apiRoot = 'https://itunes.apple.com/search';
  constructor(private http: HttpClient) { }
  search(term: string) {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.jsonp(apiURL, 'callback').pipe(
      map(res => {
        // tslint:disable-next-line: no-string-literal
        return res['results'].map(item => {
          return new SearchIteam(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }
}
