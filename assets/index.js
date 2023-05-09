'use strict';
// 1.0 завдання
function sumNumb(n) {
  let res = 0;
  for (let i = 0; i <= n; i++) {
    res += i;
  }
  return res;
}
// 2.0 завдання
const client = {
  id: 111111,
  name: 'Maxim',
  lastName: 'Kuh',
  isMale: true,
  numbCard: 1234567890,
  score: '12,25 usdt',
  lvlCard: 'diamond',
};
const discountBasic = {
  discount: 5,
  caschBack: 1,
  credit: 1000,
};
const discountPro = {
  discount: 10,
  caschBack: 1.5,
  credit: 5000,
};
const discountDiamond = {
  discount: 15,
  caschBack: 2,
  credit: 10000,
};
const bank = {
  name: 'Mono',
  contact: '+380440001002',
  adress: 'Kyiv,str.Vel Vasulkivska,2',
  CardLvl: new Map([
    ['basic', discountBasic],
    ['pro', discountPro],
    ['diamond', discountDiamond],
  ]),
};
function fullInfo(client) {
  return `${client.name} ${client.lastName} has id:${client.id} , card number ${
    client.numbCard
  } and still has  discount: ${
    bank.CardLvl.get(client.lvlCard).discount
  } % , cashBack: ${
    bank.CardLvl.get(client.lvlCard).caschBack
  } %, credit limit: ${bank.CardLvl.get(client.lvlCard).credit} usdt`;
}

// 3.0 завдання
const array20 = [0, 0, 0];
for (let i = 0; i < 10; i++) {
  array20.unshift(Math.round(Math.random() * -100));
  array20.push(Math.round(Math.random() * 100));
}
//3.1
// array20.forEach((value, i) => (i % 2 === 0 ? console.log(i) : undefined));
//3.2
// array20.forEach((value) =>
//   !(value % 2 === 0) ? console.log(value) : undefined
// );
//3.3
// array20.forEach((value, i) => (value < 0 ? console.log(i) : undefined));
//3.4
// console.log(array20.filter((value) => value === 0).length)


//4 Завдання
class Book {
  constructor(author,name,yearOfPubl,publication) {
    this.author = author;
    this.name = name;
    this.yearOfPubl = yearOfPubl;
    this.publication = publication
  }
}
class EBook extends Book {
  constructor(author,name,yearOfPubl,publication,format,eNumb) {
    super(author,name,yearOfPubl,publication)
    this.format = format;
    this.eNumb = eNumb;
  }
}
//5 Завдання 