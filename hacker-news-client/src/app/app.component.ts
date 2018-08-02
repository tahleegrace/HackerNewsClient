import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

import { Observable, empty, of } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, map, switchMap } from "rxjs/operators";
import { HackerNewsService } from "./service/hacker-news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private pageSize: number = 50;
  public currentPage: number = 1;
  public totalPages: number;

  public queryField: FormControl = new FormControl();

  public results: ISearchResult[];

  public isLoading: boolean = false;
  public hasError: boolean = false;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit() {
    this.queryField.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((query: string) => {
        this.currentPage = 1;

        return this.getSearchResults(query);
      }))
      .subscribe(this.processSearchResults.bind(this));
  }

  public onPageChange() {
    this.getSearchResults(this.queryField.value).subscribe(this.processSearchResults.bind(this));
  }

  private getSearchResults(query: string): Observable<ISearchResults> {
    if (query) {
      this.isLoading = true;
      this.hasError = false;

      return this.hackerNewsService.getSearchResults(query, this.currentPage, this.pageSize).pipe(
        map((result) => result),
        catchError(() => {
          this.isLoading = false;
          this.hasError = true;
          return empty();
        }));
    } else {
      return empty();
    }
  }

  private processSearchResults(result: ISearchResults) {
    if (result) {
      this.totalPages = result.nbPages;
      this.isLoading = false;
      this.results = result ? result.hits : [];
    }
  }
}
