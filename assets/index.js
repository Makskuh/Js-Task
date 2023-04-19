'use strict';
// Перше завдання
const testArray = [1, 2, 3];
testArray.push(6, 5, 4);
testArray.unshift(-3, -2, -1);
// Друге завдання
const testArray2 = [100, -273.15, 0, 1, 2, 3, 4, 5, 6, 9, 10];
testArray2.splice(0, 2);
testArray2.splice(-2, 2);
// Третє завдання
const testArray3 = [1, 2, 3, 4, 5];
testArray3.splice(1, 2);
// Четверте завдання
const testArray4 = [1, 2, 3, 4, 5];
const returnArray = testArray4.splice(1, 3);
// П'яте завдання
const testArray5 = [1, 2, 3, 4, 5];
testArray5.splice(2, 0, 'a', 'b', 'c');
// П'яте завдання
const testArray6 = [1, 2, 3, 4, 5];
/*testArray6.splice(1,0,'a','b');
testArray6.splice(-1,0,'c');
testArray6.splice(-1,1,'5','e'); */
// Або видалити всі і перезапизати , так напевно коротше буде
testArray6.splice(1, 5, 2, 'a', 'b', 3, 4, 'c', 5, 'e');

// ================ PART 2 ==================
// Перше завдання
const presentArray = [10, 20, 30, 40, 50, 60];
const halfPrsArray = presentArray.slice(0, presentArray.length / 2);
const partPrsArray = presentArray.slice(-2, presentArray.length);
// Друге завдання
const ottArray = [1, 2, 3];
const ffsArray = [4, 5, 6];
const concatedArray = ottArray.concat(ffsArray);
// Третє завдання
const nesArray = [9, 8, 7];
nesArray.reverse();
// Четверте завдання
const mixedArray = [5, 8, 44, 32, 14, 1, 3];
function sortingfunction(a, b) {
  if (a > b) {
    return -1;
  }
  return 1;
}
mixedArray.sort(sortingfunction);
// П'яте завдання
const forEachArray = [2, 5, 8, 7, 9];
forEachArray.forEach(function (a) {
  console.log(a);
});
forEachArray.forEach(function (a, b) {
  console.log(`Елемент ${a} має індекс ${b}`);
});
// Шосте завдання

const mapOldArray = [10, 9, 8, 7, 6, 5];
const mapNewArray = mapOldArray.map(function (a, b) {
  return a + b;
});
