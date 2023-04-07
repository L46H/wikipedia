import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface PagesForm {
  title: string;
  snippet: string;
  pageid: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pages: PagesForm[] = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
