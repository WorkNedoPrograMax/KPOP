"use strict";
// Функція для отримання колекції робітників
function getAllWorkers() {
    let workers = [
        { Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ];
    return workers;
}
// Функція для виведення першого доступного робітника та кількості робітників
function logFirstAvailable(workers) {
    // Виведення кількості робітників
    console.log(`Кількість робітників: ${workers.length}`);
    // Пошук першого доступного робітника
    for (const worker of workers) {
        if (worker.available) {
            console.log(`Доступний робітник: ${worker.Name} ${worker.surname}`);
            break;
        }
    }
}
// Виклик функції
const workers = getAllWorkers();
logFirstAvailable(workers);
