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
const lvlCard = new Map([
  ['basic', discountBasic],
  ['pro', discountPro],
  ['diamond', discountDiamond]
]);
const bank = {
  name: 'Mono',
  contact: '+380440001002',
  adress: 'Kyiv,str.Vel Vasulkivska,2',
  CardLvl(client) {
    return lvlCard.get(client.lvlCard);
  },
};
function fullInfo(client) {
  return `${client.name} ${client.lastName} has id:${client.id} , card number ${client.numbCard} and still has  discount: ${bank.CardLvl(client).discount} % , cashBack: ${bank.CardLvl(client).caschBack} %, credit limit: ${bank.CardLvl(client).credit} usdt`
}

// 3.0 завдання