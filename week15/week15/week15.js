//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum7 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum7 += numbers[i];
}

console.log(sum7);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i += 1) {
  console.log(animals[i], " - прекрасное животное");
}
//Задание 9
// Выведите символы в строке в консоль
const str = "Hello";
for (const symbol of str) {
  console.log(symbol);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (const world of array) {
  console.log(world);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ["Hello, world!", "How are you?"];

for (let i = 0; i < sentences.length; i++) {
  const words = sentences[i].split(" "); // Разделяем строку на слова
  for (let j = 0; j < words.length; j++) {
    console.log(words[j]); // Выводим каждое слово в консоль
  }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum12 = 0;

for (const number of numbers) {
  sum12 += number;
}

console.log(sum12);
//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ["apple", "banana", "cherry"];
for (const symbol of list) {
  console.log(symbol.length);
}
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words14 = ["apple", "banana", "cherry"];
for (let i = 0; i < words14.length; i += 1) {
  const email = words14[i];
  const normalizedWords = email.toUpperCase();
  words14[i] = normalizedWords;
}

console.log(words14);
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];
for (const letter of greeting.toLowerCase()) {
  if (vowels.includes(letter)) {
    vowelCount++;
  }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ["Hello", "world", "!"];
let sentence16 = "";

for (let i = 0; i < words.length; i++) {
  sentence16 += words[i];
  if (i < words.length - 1) {
    sentence16 += " ";
  }
}

console.log(sentence16);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let number17 = 1;
while (number17 < 11) {
  console.log(number17);
  number17++;
}
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let number18 = 10;
while (number18 >= 1) {
  console.log(number18);
  number18--;
}
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

let i = 0;
while (i < allNumbers.length) {
  if (allNumbers[i] <= 0) {
    allPositive = false;
    break;
  }

  i++;
}

console.log(
  allPositive ? "Все числа положительные" : "Обнаружено отрицательное число"
);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let index = 0;
do {
  if (random[index] < 0) {
    break;
  }
  console.log(random[index]);
  index++;
} while (index < random.length);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let number21 = 1;
do {
  if (number21 % 3 !== 0) {
    console.log(number21);
  }
  number21++;
} while (number21 <= 100);
//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sum22 = 0;

while (sum22 < 100) {
  console.log(sum22);
  let userInput = prompt("Введите число:");
  let number = Number(userInput);

  if (!isNaN(number)) {
    sum22 += number;
  } else {
    alert("Пожалуйста, введите число!");
  }
}

if (sum22 === 100) {
  alert(`Сумма введенных чисел: ${sum22}.`);
} else {
  alert(`Сумма введенных чисел: ${sum22}. Это больше чем 100!`);
}

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeH4BackgroundToBlue() {
  const h4Elements = document.getElementsByTagName("h4");
  for (let i = 0; i < h4Elements.length; i++) {
    h4Elements[i].style.backgroundColor = "blue";
  }
}
changeH4BackgroundToBlue();

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
function generateRandomString() {
  let stringLength = 6;
  randomString = "";

  for (let i = 0; i < stringLength; i++) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
  }

  return randomString;
}

console.log(generateRandomString());
