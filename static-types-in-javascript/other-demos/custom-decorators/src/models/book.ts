
import Rating from './rating';
import {log} from '../decorators';
import sleep from '../helpers/sleep';

export default class Book {
  title: string;
  publisher: string;
  ratings: Rating[] = [];

  constructor(title: string, publisher: string) {
    this.title = title;
    this.publisher = publisher;
  }

  addRating(username: string, rating: number, comment: string): Rating {
    console.log(`addRating method called with args: ${JSON.stringify(arguments)}`);

    let ratingObj = new Rating(username, rating, comment);
    this.ratings.push(ratingObj);

    console.log(`addRating method return value: ${JSON.stringify(ratingObj)}`);

    return ratingObj;
  }

  // toJSON() {
  //   return {
  //     title: this.title,
  //     publisher: this.publisher,
  //     ratings: this.ratings
  //   };
  // }
}
