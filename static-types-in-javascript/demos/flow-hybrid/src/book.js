
// @flow

class Book {
  title: string;
  author: string;
  pageCount: number;

  getInfo() {
    return `${this.title} by ${this.author}`;
  }
}

exports.Book = Book;
