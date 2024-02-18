//Задание 1
//Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11. Вызывается функция по кнопке Задание 1.

function makeOne() {
	localStorage.setItem('games', 11);
}

document.querySelector('.b-1').addEventListener('click', makeOne);

//Задание 2
//Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 2.

function makeTwo() {
	localStorage.setItem('numbers', '7,6,5')
	console.log('Строка "7,6,5" была записана в Local Storage.');
}

document.querySelector('.b-2').addEventListener('click', makeTwo);


//Задание 3
//Создайте функцию makeThree, которая сохраняет в Local Storage строку "name=John, age=25". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 3.

function makeThree() {
	localStorage.setItem('name', 'name=John, age=25')
	console.log('Строка "name=John, age=25" была записана в Local Storage.');
}
document.querySelector('.b-3').addEventListener('click', makeThree)



//Задание 4
//Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 4.

function makeFour() {
	localStorage.setItem('bull', true)
	console.log('Логическое значение true было записано в Local Storage.');
}

document.querySelector('.b-4').addEventListener('click', makeFour)

//Задание 5
//Создайте функцию makeFive, которая сохраняет в Local Storage значение null. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 5.

function makeFive() {
	localStorage.setItem('null', null);
	console.log('Значение null было записано в Local Storage.');
}

document.querySelector('.b-5').addEventListener('click', makeFive)

//Задание 6
//Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект obj = { name: "Алиса", age: 30 }. Вызывается функция по кнопке Задание 6.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeSix() {
	const obj = { name: "Алиса", age: 30 };
	const objJSON = JSON.stringify(obj);

	localStorage.setItem('objectSix', objJSON);
	console.log('Объект obj был записан в Local Storage.');
}

document.querySelector('.b-6').addEventListener('click', makeSix)

//Задание 7
//Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
//   city: "Лондон",
//   country: "Великобритания",
//   population: 8900000,
//   language: "английский"
// }. Вызывается функция по кнопке Задание 7.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeSeven() {
	let obj =  { city: "Лондон", country: "Великобритания", population: 8900000, language: "английский" };
	let objJSON = JSON.stringify(obj);

	localStorage.setItem('objectSeven', objJSON);

	console.log('Объект obj был записан в Local Storage.');
}

document.querySelector('.b-7').addEventListener('click', makeSeven)

//Задание 8
//Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
//   fruit: "Яблоко",
//   color: "красное",
//   quantity: 10,
//   price: 199
// }. Вызывается функция по кнопке Задание 8.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeEight() {
	let obj =  { fruit: "Яблоко", color: "красное", quantity: 10, price: 199 };
	let objJSON = JSON.stringify(obj);

	localStorage.setItem('objectEight', objJSON);
	console.log('Объект obj был записан в Local Storage.');
}

document.querySelector('.b-8').addEventListener('click', makeEight)

//Задание 9
//Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine массив arr = [1, 2, 3, 4, 5]. Вызывается функция по кнопке Задание 9.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeNine() {
	const arr = [1, 2, 3, 4, 5];
	const objJSON = JSON.stringify(arr);

	localStorage.setItem('arrayNine', objJSON);
	console.log('Массив arr был записан в Local Storage.');
}

document.querySelector('.b-9').addEventListener('click', makeNine)

//Задание 10
//Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen массив arr = ["яблоко", "банан", "апельсин"]. Вызывается функция по кнопке Задание 10.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeTen() {
	const arr = ["яблоко", "банан", "апельсин"];
	const objJSON = JSON.stringify(arr);

	localStorage.setItem('arrayTen', objJSON);
	console.log('Массив arr был записан в Local Storage.');
}

document.querySelector('.b-10').addEventListener('click', makeTen)

//Задание 11
//Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [
// { name: "Алиса", age: 30 },
// { name: "Филин", age: 35 },
// { name: "Кот", age: 40 }
// ]. Вызывается функция по кнопке Задание 11.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeEleven() {
	const arr = [{ name: "Алиса", age: 30 }, { name: "Филин", age: 35 }, { name: "Кот", age: 40 }];
	const objJSON = JSON.stringify(arr);

	localStorage.setItem('arrayEleven', objJSON);
	console.log('Массив arr был записан в Local Storage.');
}

document.querySelector('.b-11').addEventListener('click', makeEleven)

//Задание 12
//Создайте функцию showEleven, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayEleven. Выведите в practicum12 в формате ключ пробел значение. Вызывается функция по кнопке Задание 12.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse()

function showEleven() {
	const arrayEleven = JSON.parse(localStorage.getItem('arrayEleven'))
	let output = '';
	for (let i = 0; i < arrayEleven.length; i++) {
		const object = arrayEleven[i];
		for (let key in object) {
			output += `${key} ${object [key]}`;
		}
	}
	document.querySelector('.practicum12').textContent = output;
}

document.querySelector('.b-12').addEventListener('click', showEleven)

//Задание 13
//Создайте функцию showTen, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayTen. Выведите в элемент с классом practicum13 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 13.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showTen = () => {
	const arrayTenString = localStorage.getItem('arrayTen');
	if (arrayTenString) {
	  const arrayTen = JSON.parse(arrayTenString);
	  const resultElement = document.querySelector('.practicum13');
	  resultElement.innerHTML = ''; 
  
	  for (const item of arrayTen) {
		  resultElement.innerHTML += `${item}  <br>`;
	  }
	} else {
	  console.log('Массив arrayTen не найден в Local Storage.');
	}
  };
  
  document.querySelector('.b-13').addEventListener('click', showTen);

//Задание 14
//Создайте функцию showNine, которая при нажатии кнопки Задание 14 получит из Local Storage сохраннённый массив arrayNine. Выведите в элемент с классом practicum14 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 14.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showNine = () => {
	const arrayNineString = localStorage.getItem('arrayNine');
	if (arrayNineString) {
	  const arrayNine = JSON.parse(arrayNineString);
	  const resultElement = document.querySelector('.practicum14');
	  resultElement.innerHTML = '';
  
	  for (const item of arrayNine) {
		  resultElement.innerHTML += `${item} <br>`;
	  }
	} else {
	  console.log('Массив arrayNine не найден в Local Storage.');
	}
  };
  
  document.querySelector('.b-14').addEventListener('click', showNine);

//Задание 15
//Создайте функцию showEight, которая при нажатии кнопки Задание 15 получит из Local Storage сохраннённый объект objectEight. Выведите в элемент с классом practicum15 в формате значение точка с запятой. Вызывается функция по кнопке Задание 15.

const showEight = () => {
	const objectEight = JSON.parse(localStorage.getItem('objectEight'))
	if (objectEight) {
		const resultElement = document.querySelector('.practicum15');
	  	resultElement.innerHTML = '';

		for (const item in objectEight) {
			const value = objectEight[item];
			resultElement.innerHTML += `${item}: ${value}<br>`;
		}
	} else {
		console.log('Массив objectEight не найден в Local Storage.');
	  }
};

document.querySelector('.b-15').addEventListener('click', showEight);

//Задание 16
//Создайте функцию showSeven, которая при нажатии кнопки Задание 16 получит из Local Storage сохраннённый объект objectSeven. Выведите в элемент с классом practicum16 строку: "В Лондоне живёт 8900000 человек", вместо названия города и числа жителей, используйте значения по ключу city и population соответственно. Вызывается функция по кнопке Задание 16.

const showSeven = () => {
	const objectSeven = JSON.parse(localStorage.getItem('objectSeven'))
	if (objectSeven) {
		const resultElement = document.querySelector('.practicum16');
		const {city, population} = objectSeven;
		resultElement.innerHTML = `В ${city} живет ${population} человек.`;
		
	} else {
		console.log('Массив objectEight не найден в Local Storage.');
	  }
};

document.querySelector('.b-16').addEventListener('click', showSeven);

//Задание 17
//Создайте функцию showSix, которая при нажатии кнопки Задание 17 получит из Local Storage сохраннённый объект objectSix. Выведите в элемент с классом practicum17 строку: "Привет! Я Алиса. Мне 30 лет.", вместо имени и возраста, используйте значения по ключу name и age соответственно. Вызывается функция по кнопке Задание 17.

const showSix = () => {
	const objectSix = JSON.parse(localStorage.getItem('objectSix'))
	if (objectSix) {
		const resultElement = document.querySelector('.practicum17');
		const {name, age} = objectSix;
		resultElement.innerHTML = `Привет! Я ${name}. Мне ${age} лет.`;
		
	} else {
		console.log('Массив objectEight не найден в Local Storage.');
	  }
};

document.querySelector('.b-17').addEventListener('click', showSix);

//Задание 18
//Создайте функцию clearLocalStorage, которая очищает весь Local Storage. Вызывается функция по кнопке Задание 18.

const clearLocalStorage = () => {
	localStorage.clear();
	console.log('Local Storage очищен.');
};

document.querySelector('.b-18').addEventListener('click', clearLocalStorage);


//Задание 19
//Cоздана форма с одним поле ввода, в которое пользователь может вводить только числа. Создайте массив numbers. Когда пользователь нажимает кнопке Задание 19 число должно добавляться в массив. Массив должен сохраняться в Local Storage с ключем task19. Вызывается функция по кнопке Задание 19. Что произойдёт, если нажать на кнопке трижды?

let numbers = [];

const addToNumbers = () => {
	const numberInput = document.getElementById('numberInput');
	const number = parseInt(numberInput.value);

	if (!isNaN(number)) {
		numbers.push(number);
		localStorage.setItem('task19', JSON.stringify(numbers));
		console.log(`Число ${number} добавлено в массив numbers.`);
	  } else {
		console.log('Некорректное число.');
	  }
};

document.querySelector('.b-19').addEventListener('click', addToNumbers);

//Задание 20
//Создайте функцию removeLastElement, которая при вызове удаляет из массива numbers последний элемент. После чего массив сохраняется в Local Storage с ключем task19 (используйте массив из задания 19). Вызывается функция по кнопке Задание 20.

const removeLastElement = () => {
	if (numbers.length > 0) {
		numbers.pop();
		localStorage.setItem('task20', JSON.stringify(numbers));
		console.log('Последний элемент удален из массива numbers и сохранен в Local Storage.');
	} else {
		console.log('Массив numbers пуст.');
	}
};

document.querySelector('.b-20').addEventListener('click', removeLastElement);

//Задание 21
//Создайте функцию addToCart, которая при нажатии кнопки Задание 21 получает из Local Storage сохранённый массив cartItems. Затем добавляет новый элемент в массив, представляющий товар, введённый вами в поле ввода. Массив cartItems должен сохраняться в Local Storage с ключом task21. Вызывается функция по кнопке Задание 21.
//Подсказка: необходимо проверить существует ли значение и не является пустым. Если значение в хранилище есть, то оно преобразуется из JSON в массив. В противном случае, устанавливается пустой массив.

const addToCart = () => {
	const productInput = document.getElementById('productInput');
	const product = productInput.value;

	if (product.trim() !== '') {
		let cartItems = localStorage.getItem('cartItems');
		cartItems = cartItems ? JSON.parse(cartItems) : cartItems = []; //код из подсказки

		cartItems.push(product);
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
		productInput.value= '';

		console.log(`Товар "${product}" добавлен в корзину и сохранен в Local Storage.`);
	} else {
		console.log('Введите название товара.');
	}
};

document.querySelector('.b-21').addEventListener('click', addToCart);

//Задание 22
//Создайте функцию removeFromCart, которая при нажатии кнопки Задание 22 получает из Local Storage сохранённый массив cartItems. Затем удаляет последний элемент из массива. Массив cartItems должен сохраняться в Local Storage с ключом cartItems. Вызывается функция по кнопке Задание 22.
//Подсказка: необходимо проверить, существует ли значение и не является ли оно пустым. Это может вызвать ошибку, если cartItems не существует в Local Storage или является пустым.

const removeFromCart = () => {
	let cartItems = localStorage.getItem('cartItems');
	if (cartItems && cartItems !== '') {
	  cartItems = JSON.parse(cartItems);
	  cartItems.pop();
	  localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}
  };
  

document.querySelector('.b-22').addEventListener('click', removeFromCart);

//Задание 23
//Создайте функцию showCart, которая при нажатии кнопки Задание 23 получает из Local Storage сохранённый массив cartItems. Выведите элементы массива в элемент с классом practicum23. Вызывается функция по кнопке Задание 23.

const showCart = () => {
	const cartItems = localStorage.getItem('cartItems');
	const container = document.querySelector('.practicum23');
	container.textContent = cartItems ? JSON.parse(cartItems).join(', ') : '';
  };

document.querySelector('.b-23').addEventListener('click', showCart);

//Задание 24
//Создайте функцию updateCartCount, которая при нажатии кнопки Задание 24 обновляет количество товаров в корзине. Получите из Local Storage сохранённый массив cartItems и выведите количество товаров в элемент с классом practicum24 (например: "Количество товаров в корзине 3"). Вызывается функция по кнопке Задание 24.

const updateCartCount = () => {
	const cartItems = localStorage.getItem('cartItems');
	const countElement = document.querySelector('.practicum24');
	const count = cartItems ? JSON.parse(cartItems).length : 0;
	countElement.textContent = `Количество товаров в корзине: ${count}`;
  };

document.querySelector('.b-24').addEventListener('click', updateCartCount);

//Задание 25
//Создайте функцию clearCart, которая при нажатии кнопки Задание 25 очищает весь массив cartItems в Local Storage. Вызывается функция по кнопке Задание 25.

const clearCart = () => {
	localStorage.removeItem('cartItems');
	console.log('Корзина очищена.');
  };

document.querySelector('.b-25').addEventListener('click', clearCart);

//Задание 26
//При загрузке страницы установите cookie с именем "username" и значением "Кот Учёный". Выведите сообщение в консоль, подтверждающее успешное создание cookie.

document.cookie = "username=Кот Учёный";
console.log("Cookie 'username' установлен.");

//Задание 27
//Допишите функцию getCookie, которая принимает имя cookie. Функция должна получать значение cookie с указанным именем, возвращать его и записывать в элемент с классом practicum27. Если cookie с указанным именем не найден, функция должна возвращать пустую строку. Вызывается функция по кнопке Задание 27. Выведите куку с именем "username".

const getCookie = (name) => {
	const cookieContainer = document.querySelector('.practicum27');
	const cookies = document.cookie.split('; ');
	for (let i = 0; i < cookies.length; i++) {
	  const cookie = cookies[i].split('=');
	  if (cookie[0] === name) {
		const value = cookie[1] || '';
		cookieContainer.textContent = value;
		return value;
	  }
	}
	cookieContainer.textContent = '';
	return '';
  };

document.querySelector('.b-27').addEventListener('click', () => {
	getCookie('username');
});

//Задание 28
//Создайте функцию checkCookie, которая будет проверять, существует ли cookie с именем "username". Если cookie существует, выведите его значение в консоль. В противном случае выведите сообщение "Cookie с именем 'username' не найден." Вызывается функция по кнопке Задание 28.
//Подсказка: используйте функцию getCookie

const checkCookie = () => {
	const username = getCookie('username');
	if (username !== '') {
	  console.log(`Значение cookie 'username': ${username}`);
	} else {
	  console.log("Cookie с именем 'username' не найден.");
	}
  };

  document.querySelector('.b-28').addEventListener('click', checkCookie);

//Задание 29
//Создайте функцию setCookie, которая принимает имя и значение cookie. Функция должна устанавливать cookie с указанным именем и значением. После установки cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 29.

const setCookie = (name, value) => {
	document.cookie = `${name}=${value}`;
	console.log(`Cookie '${name}' установлен.`);
  };

document.querySelector('.b-29').addEventListener('click', () => {
	setCookie('testCookie', 'Hello');
});

//Задание 30
//Создайте функцию deleteCookie, которая принимает имя cookie. Функция должна удалять cookie с указанным именем. После удаления cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 30.

const deleteCookie = (name) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	console.log(`Cookie '${name}' удален.`);
  };

document.querySelector('.b-30').addEventListener('click', () => {
	deleteCookie('testCookie');
});
