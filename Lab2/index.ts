

interface MyWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number; 
    markPrize: PrizeLogger;
}



// Функція для отримання колекції робітників
function getAllWorkers() : MyWorker[] {
    let workers: MyWorker[] = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 , markPrize: logPrize},
        { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, markPrize: logPrize },
        { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 , markPrize: logPrize},
        { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, markPrize: logPrize }
    ];
    return workers;
}

// Функція для виведення першого доступного робітника та кількості робітників
function logFirstAvailable(workers : MyWorker[] = getAllWorkers()): void {
    console.log(`Number of workers: ${workers.length}`);

    const firstAvailable = workers.find(worker => worker.available);
    if (firstAvailable) {
        console.log(`First available worker: ${firstAvailable.name} ${firstAvailable.surname}`);
    }
}



function logWorkersNames(names: string[]): void {
    names.forEach(name => console.log(name));
}


const getWorkerByID = (id: number): MyWorker | undefined => {
    const worker = getAllWorkers().find(worker => worker.id === id);
    return worker 
        ? worker
        : undefined; // якщо робітника не знайдено
}


function PrintWorker(worker: MyWorker): void {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}

interface PrizeLogger {
    (message: string): void;
}

const logPrize: PrizeLogger = (message: string) => {
    console.log(`Prize Log: ${message}`);
};

logPrize('Worker of the month awarded to Ivan Ivanov!');

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void; 
}


const favoriteAuthor: Author = {
    name: 'J.K. Rowling',
    email: 'jk.rowling@example.com',
    numBooksPublished: 7
};

// const favoriteLibrarian: Librarian = {
//     name: 'Alice Johnson',
//     email: 'alice.johnson@example.com',
//     department: 'Fiction',
//     assistCustomer: (custName: string) => {
//         console.log(`Assisting ${custName} in the ${favoriteLibrarian.department} department.`);
//     }
// };

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    constructor(name: string, email: string, department: string) {
        this.name = name;
        this.email = email;
        this.department = department;
    }

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

const favoriteLibrarian: Librarian = new UniversityLibrarian('Alice Johnson', 'alice.johnson@example.com', 'Fiction');
favoriteLibrarian.assistCustomer('John Doe'); // Виклик методу

abstract class ReferenceItem {
    // public title: string; 
    // private year: number; 
    private _publisher: string; 

    // Статична властивість department
    static department: string = 'General Reference';

    abstract printCitation(): void;

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem ...');
        // this.title = newTitle;
        // this.year = newYear;
        this._publisher = ''; // Ініціалізація _publisher
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`); // Виведення department
    }

    // Геттер для _publisher
    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    // Сетер для _publisher
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
}

class Encyclopedia extends ReferenceItem {
    public edition: number; // Додаткова публічна властивість edition

    constructor(title: string, year: number, edition: number) {
        super(title, year); // Виклик конструктора батьківського класу
        this.edition = edition; // Ініціалізація edition
    }


    printItem(): void {
        super.printItem(); // Виклик методу printItem() з батьківського класу
        console.log(`Edition: ${this.edition} (${this.year})`); // Виведення edition та year
    }


    printCitation(): void { // Реалізація абстрактного методу
        console.log(`${this.title} - ${this.year}`);
    }
}

// const ref = new ReferenceItem('TypeScript Basics', 2023);
// ref.printItem(); // Виклик методу


const refBook = new Encyclopedia('World Encyclopedia', 2024, 3);
refBook.printItem(); // Виклик методу printItem()




