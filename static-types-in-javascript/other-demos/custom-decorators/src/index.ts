
import Book from './models/book';

let book1 = new Book('Copying and Pasting from Stack Overflow', 'O\'Reilly Media');
let book2 = new Book('Resumé Driven Development', 'O\'Reilly Media');
// let book3 = new Book('Blaming the User', 'O\'Reilly Media');
// let book4 = new Book('Googling the Error Message', 'O\'Reilly Media');
// let book5 = new Book('Whiteboard Interviews', 'O\'Reilly Media');
// let book6 = new Book('Writing Code that Nobody Else Can Read', 'O\'Reilly Media');
// let book7 = new Book('"Temporary" Workarounds', 'O\'Reilly Media');
// let book8 = new Book('Trying Stuff Until it Works', 'O\'Reilly Media');
// let book9 = new Book('Rewriting Your Front End Every Six Weeks', 'O\'Reilly Media');
// let book10 = new Book('Taking on Needless Dependencies', 'O\'Reilly Media');

book1.addRating('johnsmith', 4, 'Love this book!');
// book1.addRating('johnsmith', 4, 'Love this book!');
book1.addRating('sallyjones', 2, 'This book was riddled with mistakes.');
