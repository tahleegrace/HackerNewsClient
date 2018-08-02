import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from "./service/hacker-news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public results: ISearchResult[];

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    // TODO: Test code only.
    this.hackerNewsService.getSearchResults('foo', 1, 50).subscribe((result) => {
      this.results = result.hits;
    });
  }
}
