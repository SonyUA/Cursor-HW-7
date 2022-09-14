const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/*Створіть функцію getMyTaxes.call(country, salary) -> number; – 
яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
 Функція повинна викликатись через call та працювати з даними через this */

function getMyTaxes(salary) {
    console.log(`Податок ${this.tax} - того ви заплатите = ${(this.tax * salary).toFixed(2)} $ `);
    return (this.tax * salary).toFixed(2);
}
getMyTaxes.call(ukraine, 3000);

/*Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки
у середньому податків платятт IT-спеціалісти у кожній країні.
(tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this */

function getMiddleTaxes() {
    console.log(`У середньому податків платять = ${(this.tax * this.middleSalary).toFixed(2)} $`);
    return (this.tax * this.middleSalary).toFixed(2);
}
getMiddleTaxes.call(ukraine);

/*Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять
 IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
  Функція повинна викликатись через call та працювати з даними через this */

function getTotalTaxes() {
    console.log(`Всього податків платять = ${(this.tax * this.middleSalary * this.vacancies).toFixed(2)} $ `);
    return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
getTotalTaxes.call(ukraine);

/*Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду
: { salary: number, taxes: number, profit: number } кожні 10 секунд.
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval
 */

function getMySalary() {
    let rend = (Math.random() * (2000 - 1500) + 1500).toFixed();
    let arr = {
        salary: rend,
        taxes: (this.tax * rend).toFixed(2),
        profit: (rend - this.tax).toFixed(2),
    };
    console.log(arr);
    return arr;
}
setInterval(() => getMySalary.call(ukraine), 10000);
