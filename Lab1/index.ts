enum Category {
    BusinessAnalyst = 'Business analyst',
    Developer = 'Developer',
    Designer = 'Designer',
    QA = 'QA',
    ScrumMaster = 'Scrum master'
}


type MyWorker = {
    id: number;
    Name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
};


// Функція для отримання колекції робітників
function getAllWorkers() : MyWorker[] {
    let workers : MyWorker[] = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.BusinessAnalyst },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.QA },
        { id: 5, Name: 'Oleh', surname: 'Olehkin', available: true, salary: 1400, category: Category.Developer }
    ];
    return workers;
}

// Функція для виведення першого доступного робітника та кількості робітників
function logFirstAvailable(workers = getAllWorkers()): void {
    console.log(`Number of workers: ${workers.length}`);

    const firstAvailable = workers.find(worker => worker.available);
    if (firstAvailable) {
        console.log(`First available worker: ${firstAvailable.Name} ${firstAvailable.surname}`);
    }
}

function getWorkersNamesByCategory(category: Category = Category.Designer): Array<string> {
    const workers = getAllWorkers();
    return workers
        .filter(worker => worker.category === category)
        .map(worker => worker.surname);
}

function logWorkersNames(names: string[]): void {
    names.forEach(name => console.log(name));
}


// Виведення імені та прізвища робітників з категорії Developer за допомогою стрілочної функції
const logDevelopersNames = (): void => {
    console.log(`Names of Developer workers:`);
    const workers = getAllWorkers();
    workers
        .filter(worker => worker.category === Category.Developer)
        .forEach(worker => console.log(`${worker.Name} ${worker.surname}`));
};


const getWorkerByID = (id: number): MyWorker | undefined => {
    const worker = getAllWorkers().find(worker => worker.id === id);
    return worker 
        ? worker
        : undefined; // якщо робітника не знайдено
}



// 1. Створення функції createCustomerID
function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}


function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name: ${name}${age !== undefined ? `, Age: ${age}` : ''}${city !== undefined ? `, City: ${city}` : ''}`);
}

function сheckoutWorkers(customer: string, ...workerIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    const availableWorkers: string[] = workerIDs
        .map(id => {
            const worker = getWorkerByID(id);
            return worker && worker.available ? `${worker.Name} ${worker.surname}` : null;
        })
        .filter(name => name !== null) as string[];

    return availableWorkers;
}


// Виклик функції
const workers = getAllWorkers();
logFirstAvailable(workers);

// Отримуємо прізвища робітників певної категорії
const qaNames = getWorkersNamesByCategory(Category.QA);

console.log(`Names of QA workers:`);
// Виводимо їх у консоль
logWorkersNames(qaNames);

logDevelopersNames(); // Виведе імена та прізвища робітників категорії Developer

// Знаходження робітника за id
const workerInfo = getWorkerByID(2);
console.log(`Worker by id`);
console.log(workerInfo); // Виведе ім'я, прізвище та зарплату робітника з id 2


// 2. Виклик функції зі значеннями 'Ann', 10
const myID: string = createCustomerID('Ann', 10);
console.log(`Customer ID created:`);
console.log(myID);  // Виведе: Ann10

// 3. Оголошення змінної IdGenerator та створення стрілочної функції
let IdGenerator: (name: string, id: number) => string;

// 4. Присвоєння змінній IdGenerator функції createCustomerID і виклик
IdGenerator = createCustomerID;
const newID = IdGenerator('John', 25);
console.log(`Customer ID created:`);
console.log(newID);  // Виведе: John25


// Виклики з різною кількістю параметрів
console.log(`Customers created:`);
createCustomer('John');
createCustomer('Jane', 30);
createCustomer('Ann', 25, 'Kyiv');



// Виклик функції
console.log(`Checkout workers`);
const myWorkers = сheckoutWorkers('Ann', 1, 2, 4);

myWorkers.forEach(worker => console.log(worker));


