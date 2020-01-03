import { Component, OnInit } from '@angular/core';
import { SearchIteam } from 'src/app/_model/searchIteam';
import { SearchService } from 'src/app/_service/search.service';
import { SearchByInterface } from 'src/app/_model/searchByInterface';
import { Observable, Subscriber } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, subscribeOn, map, switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-core-observable',
  templateUrl: './core-observable.component.html',
  styleUrls: ['./core-observable.component.css']
})
export class CoreObservableComponent implements OnInit {
  loading = false;
  results: Observable<SearchIteam>;
  searchField: FormControl;
  // results: SearchByInterface[];

  constructor(private searchService: SearchService) { }
  /*
  .the valueChanges obserable is emmiting the type of  obserable<string>
  .
  .
  .
  .the searchByObservable function  from our search service that is of type Obserable<Searchiteam>
  */
  ngOnInit() {

    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      /* isn’t returning SearchItem[] it’s returning Observable<SearchItem[]>.
      So the map operator isn’t converting a string to SearchItem[] it’s converting a string to Observable<SearchItem[]>
      So the subscribe function is receiving Observable<SearchItem[]> and not SearchItem[] as we want.
      One workaround would then be to just try doing two subscribes that means something like observable<Obserable<Searchiteam>>
      */
      switchMap(term => this.searchService.searchByObservable(term)),
      tap(() => this.loading = false)
    );
    /* // Now that our observable chain returns Observable<SearchItem[]> we can just assign it to our local results property
    .subscribe(val => {
      console.log(val);
    }); */
  }
  searchByObservable(term: string) {
    this.searchService.searchByObservable(term);
  }
  /* using async pipe */
  /* searchByObservable(term: string) {
    this.loading = true;
    this.results = this.searchService.searchByObservable(term);
  } */
  /* using subscription */
  /* searchByObservable(term: string) {
    this.loading = true;
    this.searchService.searchByObservable(term).subscribe(data => {
      console.log(data);
      this.results = data;
      this.loading = false;
    });
  } */
}
