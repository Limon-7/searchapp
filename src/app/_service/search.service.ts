import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchIteam } from '../_model/searchIteam';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchByInterface } from '../_model/searchByInterface';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiRoot = 'https://itunes.apple.com/search';
  // apiRoot = 'https://jsonplaceholder.typicode.com/posts';
  /* if we want to save our json data to a domain */
  results: SearchIteam[];
  /* If we want show the objct type */
  // results: object[];
  // result: SearchByInterface[];
  constructor(private http: HttpClient) {
  }
  /* use observable */
  /* searchByObservable(term: string): Observable<SearchByInterface[]> {
    const apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get<SearchByInterface[]>(apiUrl);
  } */
  searchByObservable(term: string): Observable<SearchIteam> {
    const apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiUrl).pipe(map(res => {
      // tslint:disable-next-line: no-string-literal
      return res['results'].map(item => {
        return new SearchIteam(
          item.trackName,
          item.artistName,
          item.trackViewUrl,
          item.artworkUrl100,
          item.artistId
        );
      });
    }));
  }
  /* use promise */
  search(term: string) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          res => {
            // Success
            console.log(res);
            // ['result] is the api header value
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
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
