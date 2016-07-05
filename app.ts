import { Category } from './enums';
import { Book,DamageLogger,Author,Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from './classes';

function GetAllBooks(): Book[] {

    let books = [

        { id: 1, title: 'Ulysses', author: 'James Joyce', available:true, category:Category.Fiction},
        { id: 2, title: 'A FareWell TO Arms', author: 'Ernest Hemingway', available:false, category:Category.Biography},
        { id: 3, title: 'I know why the caged bird sings', author: 'Maya Angelou', available:true, category:Category.History},
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category:Category.Children},
        { id: 5, title: 'NandoTech', author: 'Arron Mayers', available: true, category:Category.Poetry},
    ];
    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    for(let currentBook of books){
        
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}


function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string>{

    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];
for (let currentBook of allBooks){
    if(currentBook.category === categoryFilter){
        filteredTitles.push(currentBook.title);
    }
}
return filteredTitles;


}
function LogBookTitles(titles: string[]) : void{
    for(let title of titles){
        console.log(title);
    }
}

function GetBookById(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerId(name: string, id: number): string{
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void{
    console.log('Creating customer ' + name);
    if(age){
        console.log('Age: ' + age);
        }
        if(city){
            console.log('City: ' + city);
        }
}

function CheckoutBooks(customer: string, ...bookIds: number []): string[] {
        console.log('Checking out books for ' + customer);

        let booksCheckedOut: string[] = [];

        for(let id of bookIds){
            let book = GetBookById(id);
            if(book.available){
                booksCheckedOut.push(book.title);
            }
        }

        return booksCheckedOut;
}


function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[]{
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == 'string'){
        //get all books by a particular author
        for(let book of allBooks){
            if(book.author === bookProperty){
                foundTitles.push(book.title);

            }
        }
    }
    else if (typeof bookProperty == 'boolean'){
        //Get all books based on specific availability 
        for(let book of allBooks)
        if(book.available === bookProperty){
            foundTitles.push(book.title)
        }
    }
    return foundTitles;
}
function PrintBook(book: Book): void{
    console.log(book.title + ' by ' + book.author);
}



//**************************************
//let ref: ReferenceItem = new ReferenceItem('Updated facts and figures', 2012);
//ref.printItem();
//ref.publisher = 'Random Data Publishing';
//console.log(ref.publisher);

//let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 2016, 10);
//refBook.printCitation();

let NewsPaper = class extends ReferenceItem{
    printCitation(): void{
        console.log(`NewsPaper: ${this.title}`)
    }
}

let myPaper = new NewsPaper('The Gazette', 2015);
myPaper.printCitation();

class Novel extends class{title: string}{
    mainCharacter: string;
}




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