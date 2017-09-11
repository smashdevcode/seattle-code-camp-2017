"use strict";
var Book = require('./book').Book;
var book1 = new Book();
book1.title2 = 'My Book';
console.log(book1.getInfo2());
