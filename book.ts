var Book = /** @class */ (function () {
    function Book(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.reader = null;
    }
    Book.prototype.isAvaliable = function () {
        return !this.reader; 
    };
    Book.prototype.takeBook = function (readerName) {
        if (this.reader)
            return false;
        this.reader = readerName;
        return true;
    };
    Book.prototype.returnBook = function () {
        if (!this.reader)
            return false;
        this.reader = null;
        return true;
    };
    Book.prototype.changeBookName = function (newBookName) {
        if (this.reader)
            return false;
        this.name = newBookName;
        return true;
    };
    Book.prototype.changeAuthorName = function (newAuthorName) {
        if (this.reader)
            return false;
        this.author = newAuthorName;
        return true;
    };
    Book.prototype.getCurrentReader = function () {
        return this.reader;
    };
    return Book;
}());
var book = new Book('Harry Potter', 'J. K. Rowling', 1997);
console.log(book);
console.log('isAvaliable', book.isAvaliable());
console.log('takeBook', book.takeBook('misha'));
console.log('isAvaliable', book.isAvaliable());
console.log('second takeBook', book.takeBook('misha2'));
console.log('getCurrentReader', book.getCurrentReader());
console.log('changeBookName to Harry Propper', book.changeBookName('Harry Propper'));
console.log(book);
console.log('returnBook', book.returnBook());
console.log('second returnBook', book.returnBook());
console.log('isAvaliable', book.isAvaliable());
console.log('getCurrentReader', book.getCurrentReader());
console.log(book);
console.log('changeBookName to Harry Propper', book.changeBookName('Harry Propper'));
console.log(book);
