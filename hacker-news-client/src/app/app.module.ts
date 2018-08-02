import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { HackerNewsService } from "./service/hacker-news.service";

import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HackerNewsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
