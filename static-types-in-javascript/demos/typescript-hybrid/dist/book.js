"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = (function () {
    function Book() {
    }
    Book.prototype.getInfo = function () {
        return this.title + " by " + this.author;
    };
    return Book;
}());
exports.Book = Book;
