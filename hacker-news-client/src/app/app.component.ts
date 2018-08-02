import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { HackerNewsService } from "./service/hacker-news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public queryField: FormControl = new FormControl();

  public results: ISearchResult[];

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    this.queryField.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((query: string) => this.hackerNewsService.getSearchResults(query, 1, 50)))
      .subscribe((result) => {
        this.results = result.hits;
      });
  }
}
