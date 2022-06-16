class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = null;
    this._state = 100;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(newState) {
    if (newState > 100) {
      this._state = 100;
    } else if (newState < 0) {
      this._state = 0;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    //так и знал что копипаста до добра не доведет!)
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    const bookToFind = this.books.find((book) => book[type] == value);
    return bookToFind ? bookToFind : null;
  }
  giveBookByName(bookName) {
    let bookToGive = null;
    this.books.forEach((book, index) => {
      if (book.name == bookName) {
        bookToGive = book;
        this.books.splice(index, 1);
      }
    });
    return bookToGive;
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  set setSubject(newSubject) {
    this.subject = newSubject;
  }
  addMark(newMark, subject) {
    if (this.marks == undefined) {
      this.marks = {};
    }
    if (newMark > 5 || newMark < 1) {
      console.error("Ошибка, оценка должна быть числом от 1 до 5");
      return;
    }
    if (this.marks[subject] == undefined) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(newMark);
  }
  getAverage() {
    let total = 0;
    for (let key in this.marks) {
      total += this.marks[key].reduce((prev, curr) => prev + curr, 0) / this.marks[key].length;
    }
    return  total / Object.keys(this.marks).length;
  }
  getAverageBySubject(subjectName) {
    return this.marks[subjectName].reduce((prev, curr) => prev + curr, 0) / this.marks[subjectName].length;
  }
  exclude(reason) {
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
  }
}
