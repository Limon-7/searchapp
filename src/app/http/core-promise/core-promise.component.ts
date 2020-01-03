import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/_service/search.service';

@Component({
  selector: 'app-core-promise',
  templateUrl: './core-promise.component.html',
  styleUrls: ['./core-promise.component.css']
})
export class CorePromiseComponent implements OnInit {

  loading = false;
  constructor(protected searchService: SearchService) { }

  ngOnInit() {
  }
  doSearch(term: string) {
    this.loading = true;
    this.searchService.search(term).then(() => (this.loading = false));
  }
}
