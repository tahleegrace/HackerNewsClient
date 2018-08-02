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
      }))
      .subscribe((result: ISearchResults) => {
        this.totalPages = result.nbPages;
        this.isLoading = false;
        this.results = result ? result.hits : [];
      });
  }

  public onPageChange() {
    if (this.queryField.value) {
      this.isLoading = true;
      this.hasError = false;

      this.hackerNewsService.getSearchResults(this.queryField.value, this.currentPage, this.pageSize).pipe(
        map((result) => result),
        catchError(() => {
          this.isLoading = false;
          this.hasError = true;
          return empty();
        }))
        .subscribe((result: ISearchResults) => {
          this.totalPages = result.nbPages;
          this.isLoading = false;
          this.results = result ? result.hits : [];
        });
    }
  }
}
