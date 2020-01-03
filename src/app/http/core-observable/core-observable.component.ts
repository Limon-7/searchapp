import { Component, OnInit } from '@angular/core';
import { SearchIteam } from 'src/app/_model/searchIteam';
import { SearchService } from 'src/app/_service/search.service';
import { SearchByInterface } from 'src/app/_model/searchByInterface';

@Component({
  selector: 'app-core-observable',
  templateUrl: './core-observable.component.html',
  styleUrls: ['./core-observable.component.css']
})
export class CoreObservableComponent implements OnInit {

  results: SearchIteam;
  // results: SearchByInterface[];
  loading = false;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  searchByObservable(term: string) {
    this.loading = true;
    this.searchService.searchByObservable(term).subscribe(data => {
      console.log(data);
      this.results = data;
      this.loading = false;
    });
  }
}
