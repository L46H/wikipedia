import { Component, OnInit, Input } from '@angular/core';
import { PagesForm } from '../interface/pages-form.interface';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent implements OnInit {
  @Input() pages: PagesForm[] = [];

  constructor() { }

  ngOnInit(): void { }
}
