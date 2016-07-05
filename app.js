"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enums_1 = require('./enums');
var classes_1 = require('./classes');
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A FareWell TO Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Biography },
        { id: 3, title: 'I know why the caged bird sings', author: 'Maya Angelou', available: true, category: enums_1.Category.History },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Children },
        { id: 5, title: 'NandoTech', author: 'Arron Mayers', available: true, category: enums_1.Category.Poetry },
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerId(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        //Get all books based on specific availability 
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
//**************************************
//let ref: ReferenceItem = new ReferenceItem('Updated facts and figures', 2012);
//ref.printItem();
//ref.publisher = 'Random Data Publishing';
//console.log(ref.publisher);
//let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 2016, 10);
//refBook.printCitation();
var NewsPaper = (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        _super.apply(this, arguments);
    }
    class_1.prototype.printCitation = function () {
        console.log("NewsPaper: " + this.title);
    };
    return class_1;
}(classes_1.ReferenceItem));
var myPaper = new NewsPaper('The Gazette', 2015);
myPaper.printCitation();
var Novel = (function (_super) {
    __extends(Novel, _super);
    function Novel() {
        _super.apply(this, arguments);
    }
    return Novel;
}((function () {
    function class_2() {
    }
    return class_2;
}())));
//let myBook: Book = {
//   id: 6,
//  title: 'Test Book',
//author: 'Test Author',
//    available: true,
//    category: Category.Fiction,
//    pages: 250,
//    markDamaged:(reason: string) => console.log('Damaged: ' + reason )
//};
//PrintBook(myBook);
//myBook.markDamaged('torn pages')
//let logDamage: DamageLogger;
//logDamage = (damage: string) => console.log('Damage Reported: ' + damage);
//logDamage('Coffee Stains')
//let checkedOutBooks = GetTitles(false);
//checkedOutBooks.forEach(title => console.log(title));
//let myBooks: string[] = CheckoutBooks('Ulysses', 1,3,4);
//myBooks.forEach(title => console.log(title));
//LogFirstAvailable();
//let fictionBooks = GetBookTitlesByCategory();
//fictionBooks.forEach(title => console.log(title))
//CreateCustomer('Arron')
//CreateCustomer('Arron', '27')
//CreateCustomer('Arron', 27, 'Boca Raton');
//let x: number;
//x = 5;
//let IdGenerator: (chars: string, nums: number) => string;
//IdGenerator = (name: string, id: number) => {return id + name;}
//let myID: string = IdGenerator('Arron', 15);
//console.log(myID);
//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + '  -  ' + val ));
//let favoriteLibrarian: Librarian = new UniversityLibrarian();
//favoriteLibrarian.name = 'Sharon';
//favoriteLibrarian.assistCustomer('Lynda'); 
