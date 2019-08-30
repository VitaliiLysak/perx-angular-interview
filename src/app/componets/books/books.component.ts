import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import {
  MatSort,
  MatTableDataSource
} from '@angular/material';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-table',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements AfterViewInit {
  @ViewChild( MatSort, {static: false} ) sort: MatSort;

  public displayedColumns: string[] = null;
  public dataSource = new MatTableDataSource();

  constructor(
    private bookService: BookService,
  ) {
    this.displayedColumns = ['title', 'binding', 'image'];
    this.dataSource.data = this.bookService.books;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
