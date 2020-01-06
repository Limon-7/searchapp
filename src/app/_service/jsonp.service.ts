import { Injectable } from '@angular/core';
import { JsonpClientBackend, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SearchIteam } from '../_model/searchIteam';

@Injectable({
  providedIn: 'root'
})
export class JsonpService {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchIteam;
  constructor(private http: HttpClient) { }
  /* jsonp with obserable */
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
  /* jsonp with promise */
  searchJsonpPromise(term: string) {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    const promise = new Promise((resolve, reject) => {
      this.http.jsonp(apiURL, 'callback').toPromise()
        .then(res => {
          // success
          // tslint:disable-next-line: no-string-literal
          this.results = res['results'].map(item => {
            return new SearchIteam(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          resolve();
        }, msg => {
          // error section
          reject(msg);
        }
        );
    });
    return promise;
  }

}
