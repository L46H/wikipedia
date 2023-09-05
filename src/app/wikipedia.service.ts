import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WikipediaResponse } from './interface/wiki-response.interface';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    return this.http
      .get<WikipediaResponse>('http://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(map((val) => val.query.search));
  }
}
