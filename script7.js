class Book {
  constructor([title, author, year]){
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
let mybook = new Book(['Pride and prejudice', 'Jane Ostin', '1813']);
console.log(mybook);