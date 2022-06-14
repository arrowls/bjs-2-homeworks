class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this._state = 100;
    }
    fix () {
        this.state *= 1.5;
    }
    set state(newState) {
        if (newState > 100) {
            this._state = 100;
        } else if (newState < 0) {
            this._state = 0
        } else {
            this._state = newState;
        }
    }
    get state () {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'novel';
        this.author = author;
    }
}
class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'fantastic';
        this.author = author;
    }
}
class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'detective';
        this.author = author;
    }
}

class Library {
    constructor (name, books = []) {
        this.name = name;
        this.books = books;
    }
    addBook (book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy (type, value) {
        const bookToFind = this.books.find((book) => book[type] == value);
        return bookToFind ? bookToFind : null;
    }
    giveBookByName (bookName) {
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