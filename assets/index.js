'use strict';
// class MyArray {
//   constructor() {
//     this.length = 0;
//   }
//   push(...newElem) {
//     for (let number of newElem) {
//       this[this.length] = number;
//       this.length++;
//     }
//     return this.length;
//   }
//   pop() {
//     if (this.length > 0) {
//       const lastItem = this[this.length - 1];
//       delete this[--this.length];
//       return lastItem;
//     }
//     return undefined;
//   }
//   unshift(newElem) {
//     for (let i = this.length; i > 0; i--) {
//       this[i] = this[i - 1];
//     }
//     this.length++;
//     this[0] = newElem;
//     return this.length;
//   }
//   shift() {
//     if (this.length > 0) {
//       const firstItem = this[0];
//       for (let i = 0; i < this.length; i++) {
//         this[i] = this[i + 1];
//       }
//       delete this[--this.length];
//       return firstItem;
//     }
//     return undefined;
//   }
//   isMyArray(object) {
//     return object instanceof MyArray;
//   }
//   forEach(callBackFunck) {
//     for (let i = 0; i < this.length; i++) {
//       callBackFunck(this[i], i, this);
//     }
//   }
//   map(callBackFunck) {
//     let newArray = [];
//     for (let i = 0; i < this.length; i++) {
//       newArray[i] = callBackFunck(this[i], i, this);
//     }
//     return newArray;
//   }
//   filter(callBack) {
//     let res = [];
//     for (let i = 0; i < this.length; i++) {
//       if (callBack(this[i], i, this)) {
//         res.push(this[i]);
//       }
//     }
//     return res;
//   }
//   [Symbol.iterator]() {
//     let i = 0;
//     const context = this;
//     return {
//       next: function () {
//         return {
//           done: i >= context.length,
//           value: context[i++],
//         };
//       },
//     };
//   }
// }
// const myArr1 = new MyArray();
// const arr = [1, 2, 3];
// myArr1.push(1);
// myArr1.push(2);
// myArr1.push(3);
// myArr1.push(4);
// myArr1.push(5);
// function callBackFunck(value) {
//   return value * 2;
// }
// function filterTest(value) {
//   return value === 6;
// }
// const newArr = myArr1.filter(filterTest);
