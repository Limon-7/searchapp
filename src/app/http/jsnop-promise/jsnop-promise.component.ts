import { Component, OnInit } from '@angular/core';
import { JsonpService } from 'src/app/_service/jsonp.service';
import { SearchIteam } from 'src/app/_model/searchIteam';

@Component({
  selector: 'app-jsnop-promise',
  templateUrl: './jsnop-promise.component.html',
  styleUrls: ['./jsnop-promise.component.css']
})
export class JsnopPromiseComponent implements OnInit {

  loading = false;
  results: SearchIteam;
  constructor(protected jsonpService: JsonpService) { }

  ngOnInit() {
  }
  doSearch(term: string) {
    this.loading = true;
    this.jsonpService.searchJsonpPromise(term).then(() => this.loading = false);
  }
}
