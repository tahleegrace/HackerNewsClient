import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  private serviceUrl = 'http://hn.algolia.com/api/v1';

  constructor(private http: HttpClient) { }

  getSearchResults(query: string, pageNo: number, pageSize: number): Observable<ISearchResults> {
    let url = `${this.serviceUrl}/search?query=${query}&page=${pageNo}&hitsPerPage=${pageSize}`;

    return this.http.get<ISearchResults>(url);
  }
}
