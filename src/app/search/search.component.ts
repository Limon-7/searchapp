import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SearchIteam } from '../_model/searchIteam';
import { JsonpService } from '../_service/jsonp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  results: SearchIteam;
  loading = false;
  constructor(protected jsonpService: JsonpService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['term']) {
        this.doSearch(params['term']);
      }
    });
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  ngOnInit() {
  }
  onSearch(term: string) {
    this.router.navigate(['search', { term }]);
  }
  doSearch(term: string) {
    this.loading = true;
    this.jsonpService.searchJsonpPromise(term).then(() => this.loading = false);
  }
}
