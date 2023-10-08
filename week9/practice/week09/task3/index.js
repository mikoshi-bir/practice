const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  const message = `Через год у вас будет ${sum / 100*7} руб. на счету.`;
  total.textContent = (message);});

console.log('Ваш депозит на начало расчетного периода составлял ' + deposit + ' руб.');
console.log('Согласно вашему тарифу, вам была присвоена ставка ' + interestRate + "%");
console.log('К концу расчетного периода прирост составил ' + growth + ' руб., и на данный момент ваш депозит составляет ' + (+deposit + +growth) + ' руб.');