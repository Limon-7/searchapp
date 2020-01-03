import { Component, OnInit } from '@angular/core';
import { JsonpService } from 'src/app/_service/jsonp.service';
import { Observable } from 'rxjs';
import { SearchIteam } from 'src/app/_model/searchIteam';
import { FormControl } from '@angular/forms';
import { map, distinctUntilChanged, debounceTime, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-jsonp-observable',
  templateUrl: './jsonp-observable.component.html',
  styleUrls: ['./jsonp-observable.component.css']
})
export class JsonpObservableComponent implements OnInit {
  results: Observable<SearchIteam>;
  loading = false;
  searchField: FormControl;
  constructor(protected jsonpService: JsonpService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.jsonpService.search(term)),
      tap(() => this.loading = false)
    );
  }
  doSearch(term: string) {
    this.jsonpService.search(term);
  }
}
