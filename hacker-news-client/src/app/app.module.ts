import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { HackerNewsService } from "./service/hacker-news.service";

import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PagerComponent } from './pager/pager.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HackerNewsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
