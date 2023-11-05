//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = new Date().getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = new Date().getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = new Date().getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(new Date().getFullYear(), 11, 1);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let currentDate6 = new Date();
let futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate() + 10);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let timeDiff = Math.abs(futureDate.getTime() - currentDate6.getTime());
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

console.log("Разница в днях:", diffDays);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let currentDate8 = new Date();
let pastDate = new Date(currentDate8.getFullYear(), currentDate8.getMonth(), currentDate8.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate


let timeDifference = Math.abs(currentDate8.getTime() - pastDate.getTime());
let differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

console.log(`Разница в днях: ${differenceInDays}`);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let currentDate10 = new Date();
let nextWeek = new Date(currentDate10.getFullYear(), currentDate10.getMonth(), currentDate10.getDate() + 7);

console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek

let daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
let dayOfWeek = daysOfWeek[nextWeek.getDay()];

console.log(`День недели для nextWeek: ${dayOfWeek}`);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let currentYear12 = currentDate.getFullYear();
let futureYear = currentYear12 + 5;

console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date(futureYear, 11, 1); 

console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
let yearDifference = futureYear - currentYear12;

console.log(yearDifference);
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date15 = new Date(Date.parse(strDate));

console.log(date15);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

const timestamp = Date.parse(strDate);

console.log(timestamp);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';

if (isNaN(Date.parse(wrongDate))) {
  console.log('Неправильный формат даты');
} else {
  console.log('Правильный формат даты');
}


//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;

if (number > 0) {
  console.log('Число является положительным');
} else {
  console.log('Число не является положительным');
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

if (number % 2 === 0) {
  console.log('Число является чётным');
} else {
  console.log('Число не является чётным');
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

if (number % 3 === 0) {
  console.log('Число является кратным 3');
} else {
  console.log('Число не является кратным 3');
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.


if (number >= 0 && number <= 9) {
  console.log('Число является однозначным');
} else {
  console.log('Число не является однозначным');
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number >= 10 && number <= 99) {
    console.log('Число является двузначным');
  } else {
    console.log('Число не является двузначным');
  }
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.


if (number > 0) {
  console.log('Число является положительным');
} else if (number === 0) {
  console.log('Число равно нулю');
} else {
  console.log('Число является отрицательным');
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

if (number % 5 === 0 || number % 7 === 0) {
  console.log('Число является кратным 5 или 7');
} else {
  console.log('Число не является кратным 5 или 7');
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0) {
    console.log("Переменная number является отрицательным числом");
  } else if (number === 0) {
    console.log("Переменная number равна нулю");
  } else {
    console.log("Переменная number является положительным числом");
  }
  
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number > 99 && number < 1000) {
    console.log("Переменная number является трёхзначным положительным числом");
  } else {
    console.log("Переменная number не является трёхзначным положительным числом");
  }
  
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
function getDayOfWeek(number) {
    switch (number) {
      case 1:
        console.log("Понедельник");
        break;
      case 2:
        console.log("Вторник");
        break;
      case 3:
        console.log("Среда");
        break;
      case 4:
        console.log("Четверг");
        break;
      case 5:
        console.log("Пятница");
        break;
      case 6:
        console.log("Суббота");
        break;
      case 7:
        console.log("Воскресенье");
        break;
      default:
        console.log("Некорректное значение. Введите число от 1 до 7.");
    }
  }
  
//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

function getDirectionName(direction) {
    switch (direction) {
      case 'N':
        console.log("Север");
        break;
      case 'S':
        console.log("Юг");
        break;
      case 'E':
        console.log("Восток");
        break;
      case 'W':
        console.log("Запад");
        break;
      default:
        console.log("Некорректное значение. Введите символ направления (N, S, E, W).");
    }
  }

  fullName = getDirectionName( direction )