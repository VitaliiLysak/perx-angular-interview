import { Component } from '@angular/core';

import { IMyBook } from '../../models/my-book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.scss']
})
export class MyBookComponent {

  public myBook: IMyBook = null;

  constructor(
    private bookService: BookService,
  ) {
    this.myBook = this.bookService.myBook;
  }

}
