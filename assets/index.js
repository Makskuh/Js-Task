'use strict';
// Перше завдання 
const testArray = [1,2,3];
testArray.push(6,5,4);
testArray.unshift(-3,-2,-1);
// Друге завдання
 const testArray2 = [ 100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10 ];
testArray2.splice(0,2);
testArray2.splice(-2,2);
// Третє завдання
const testArray3 = [1, 2, 3, 4, 5];
testArray3.splice(1,2);
// Четверте завдання
const testArray4 = [1, 2, 3, 4, 5];
const returnArray = testArray4.splice(1,3);
// П'яте завдання
const testArray5 = [1, 2, 3, 4, 5];
testArray5.splice(2,0,'a','b','c');
// П'яте завдання
const testArray6 = [1, 2, 3, 4, 5];
/*testArray6.splice(1,0,'a','b');
testArray6.splice(-1,0,'c');
testArray6.splice(-1,1,'5','e'); */
// Або видалити всі і перезапизати , так напевно коротше буде
testArray6.splice(1,5,2, 'a','b',3,4,'c',5,'e');
