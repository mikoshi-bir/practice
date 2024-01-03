//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

function makeOne() {
  const paragraph = document.getElementById("practicum");
  const forms = document.forms;
  paragraph.textContent = `Количество форм на странице: ${forms.length}`;
}

document.querySelector(".b-1").addEventListener("click", makeOne);

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeTwo() {
  const paragraphTwo = document.getElementById("practicum2");
  const formOne = document.forms[0];
  paragraphTwo.textContent = `Значение атрибута name певой формы: ${formOne.getAttribute(
    "name"
  )}`;
}

document.querySelector(".b-2").addEventListener("click", makeTwo);

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeThree() {
  const paragraphThree = document.getElementById("practicum3");
  const forms = document.forms;
  const lastForm = forms[forms.length - 1];
  paragraphThree.textContent = `Значение атрибута name последней формы: ${lastForm.getAttribute(
    "name"
  )}`;
}

document.querySelector(".b-3").addEventListener("click", makeThree);

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

function makeFour() {
  const paragraphFour = document.getElementById("practicum4");
  const forms = document.forms;
  const formNames = [];

  for (let i = 0; i < forms.length; i++) {
    const formName = forms[i].getAttribute("name");
    formNames.push(formName);
  }

  const formNamesString = formNames.join(", ");
  paragraphFour.textContent = `Названия всех форма на странице: ${formNamesString}`;
}

document.querySelector(".b-4").addEventListener("click", makeFour);

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

function makeFive() {
  const paragraphFive = document.getElementById("practicum5");
  const formThree = document.forms.formThree;
  const formThreeElem = formThree.elements;
  paragraphFive.textContent = `Количество элементов в третьей форме: ${formThreeElem.length}`;
}

document.querySelector(".b-5").addEventListener("click", makeFive);

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

function makeSix() {
  const paragraphSix = document.getElementById("practicum6");
  const formTwoElem = document.forms.formTwo.elements;
  paragraphSix.textContent = `Количество элементов во второй форме: ${formTwoElem.length}`;
}

document.querySelector(".b-6").addEventListener("click", makeSix);

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

function makeSeven() {
  const paragraphSeven = document.getElementById("practicum7");
  const formTwoElem = document.forms.formTwo.elements;
  let elementsList = "";

  for (let i = 0; i < formTwoElem.length; i++) {
    const formElem = formTwoElem[i].getAttribute("name");
    if (formElem) {
      elementsList += " -" + formElem;
    }
  }
  paragraphSeven.textContent = elementsList;
}

document.querySelector(".b-7").addEventListener("click", makeSeven);

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

function makeEight() {
  const paragraphEight = document.getElementById("practicum8");
  const formOneElem = document.forms.formOne.elements;
  let elementsListOne = "";

  for (let i = 0; i < formOneElem.length; i++) {
    const formElem = formOneElem[i].getAttribute("name");

    if (formElem) {
      elementsListOne += " -" + formElem;
    }
  }

  paragraphEight.textContent = elementsListOne;
}

document.querySelector(".b-8").addEventListener("click", makeEight);

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

function makeNine() {
  const paragraphNine = document.getElementById("practicum9");
  const formThreeElem = document.forms.formThree.elements;
  paragraphNine.textContent = "";

  for (const element of formThreeElem) {
    paragraphNine.textContent += `-${element.name} `;
  }
}

document.querySelector(".b-9").addEventListener("click", makeNine);

//Задание 10
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

function makeTen() {
  const paragraphTen = document.getElementById("practicum10");
  const radio = Array.from(document.forms[3].elements).find(
    (d) => d.type === "radio"
  )?.value;
  paragraphTen.textContent = `Значенеие radio кнопки четвертой формы: ${radio}`;
}
//я взяла четвертую форму, потому что в третьей нет radio кнопок

document.querySelector(".b-10").addEventListener("click", makeTen);

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

function makeEleven() {
  const paragraphEleven = document.getElementById("practicum11");
  const formOne = document.forms[0];
  const select = Array.from(
    Array.from(formOne.elements).find((d) => d.tagName === "SELECT")?.childNodes
  )
    .map((d) => d.value)
    .filter(Boolean);

  console.log(select);
  paragraphEleven.textContent = `Значение опций: ${select}`;
}

document.querySelector(".b-11").addEventListener("click", makeEleven);

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

function makeTwelve() {
  const paragraphTwelve = document.getElementById("practicum12");
  const form = document.forms[1];
  let checkboxIds = [];

  for (let element of form.elements) {
    if (element.type === "checkbox") {
      checkboxIds.push(element.id);
    }
  }

  paragraphTwelve.textContent = checkboxIds;
}

document.querySelector(".b-12").addEventListener("click", makeTwelve);

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

function checkButton(e) {
  e.preventDefault();

  const paragraphThirteen = document.getElementById("practicum13");
  const form = document.forms[3];
  const radio = form.elements["fourthName"];

  if (radio.checked) {
    paragraphThirteen.textContent = "Кнопка выбрана";
  } else {
    paragraphThirteen.textContent = "Кнопка не выбрана";
  }
}
document.querySelector(".b-13").addEventListener("click", checkButton);

//Задание 14
//Выведите на экран название выбранного варианта в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным любой вариант формы
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Напишите проверку, которая используя условный оператор (if) будет выводить в элемент paragraphFourteen название выбранного варианта

function checkOption() {
  const paragraphFourteen = document.getElementById("practicum14");
  const form = document.forms[0];
  const select = form.elements["firstSelect"];
  const selectValue = select.value;

  if (selectValue) {
    paragraphFourteen.textContent = selectValue;
  } else {
    paragraphFourteen.textContent = "Ничего не выбрано";
  }
}

document.querySelector(".b-14").addEventListener("click", checkOption);

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
  const form = document.forms[0];
  const select = form.elements["firstSelect"];
  select.selectedIndex = 2;
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
  const checkboxTwo = document.forms[1].elements["checkboxTwo"];

  checkboxTwo.checked = true;
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную formOne
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки

  const formOne = document.forms.formOne;
  const name = formOne.elements["firstName"];
  const email = formOne.elements["firstEmail"];

  if (name.value !== "" && email.value !== "") {
    document.getElementById("errorMessage").textContent = "";
  } else {
    document.getElementById("errorMessage").textContent =
      "Заполнены не все поля";
  }
});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener("submit", function (event) {
  event.preventDefault(); //Отмена отправки

  const formOne = document.forms.formOne;
  formOne.reset();
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие change для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

const selectElement = document.getElementById("firstSelect");

selectElement.addEventListener("change", (event) => {
  const { value } = event.target;

  // alternative.- option 1
  if (value === "Опция 1") {
    document.body.style.background = "red";
  }

  if (value === "Опция 2") {
    document.body.style.background = "green";
  }

  if (value === "Опция 3") {
    document.body.style.background = "blue";
  }

  // option 2
  const textToColor = {
    "Опция 1": "red",
    "Опция 2": "green",
    "Опция 3": "blue",
  };

  const color = textToColor[value];

  document.body.style.background = color;
});

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие input для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp: /^[^\s@]+@[^\s@]+.[^\s@]+$/), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

const emailInput = document.forms.formOne.elements.firstEmail;
const errorMessage = document.getElementById("errorMessage");

emailInput.addEventListener("input", (event) => {
  const value = emailInput.value;
  const isValid = /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(value);

  if (isValid) {
    errorMessage.textContent = "Имейл валиден";
  } else {
    errorMessage.textContent = "Имейл не валиден";
  }
});

//Задание 21
//При отправке второй формы выполните проверку всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.forms.formTwo.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const checkbox1 = document.getElementById("checkbox1").checked;
  const checkbox2 = document.getElementById("checkbox2").checked;
  const checkbox3 = document.getElementById("checkbox3").checked;

  if (!checkbox1 && !checkbox2 && !checkbox3) {
    document.getElementById("result21").textContent =
      "Пожалуйста, выберите хоть один вариант";
  } else {
    document.getElementById("result21").textContent = "";
  }
});

//Задание 22
//При отправке третьей формы выполните проверку поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector(".b-22").onclick = function (event) {
  event.preventDefault();
  const nameInput = document.forms.formThree.elements.thirdName;
  const nameValue = nameInput.value;

  if (nameValue.trim() === "") {
    document.getElementById("result22").textContent = "Поле с Именем пустое";
    return;
  }
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled
const inputRadio = document.forms[3].elements["fourthName"];

inputRadio.addEventListener("change", function () {
  console.log("event triggered", inputRadio.checked);
  const submitBtn = document.querySelector(".b-13");

  submitBtn.disabled = !inputRadio.checked;
});

//Задание 24
//Найдите все поля ввода на странице (querySelectorAll) и установите им атрибут "placeholder" со значением "Введите данные" (используйте метод forEach).

document.querySelector(".b-24").addEventListener("click", function () {
  const text = document.querySelectorAll("input");

  Array.from(text).forEach((elm) =>
    elm.setAttribute("placeholder", "Введите данные")
  );
});

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector(".b-25").addEventListener("click", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      input.style.border = "1px solid #00ff00";
    });

    input.addEventListener("blur", function () {
      input.style.removeProperty("border")
    });
  });
});

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector(".b-26").addEventListener("click", function (event) {
  event.preventDefault();
  const form = document.forms[2]
  const name = form.elements["thirdName"]
  document.getElementById('result26').textContent =`Значение placeholder из поля "Имя" в третьей форме: ${name.placeholder}`
});

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll(".secondForm input");

formTwoInputs.forEach(function (input) {
  input.addEventListener("input", function () {
    document.getElementById('result27').textContent = "Изменение внесено"
  });
});

//Задание 28
//При выборе любой из опций выпадающего списка в первой форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById("firstSelect");

selectFormThree.addEventListener("change", function () {
  document.getElementById('result28').textContent = "Опция выбрана"
});
