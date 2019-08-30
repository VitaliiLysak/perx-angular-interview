import { Injectable } from '@angular/core';

import * as exampleJson from '../example.json';
import { IBook } from '../models/book.model';
import { IMyBook } from '../models/my-book.model';
import { MOCK_MY_BOOK } from '../mock-my-book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private myBookData: IMyBook = MOCK_MY_BOOK;

  constructor() { }

  /** GET books from the example.json */
  get books(): Array<IBook> {
    return exampleJson.data.map((item) => ({
      title: String(item.attributes.content),
      binding: String(item.attributes.display_properties.type),
      image: String(item.attributes.display_properties.image),
    }));
  }

  /** GET mock-my-book from the mock-my-book */
  get myBook(): IMyBook {
    return this.myBookData;
  }
}
