'use strict';
function MyArray() {
  this.length = 0;
}

function MyArrayProto() {
  this.push = function (newElem) {
    // записати елемент
    this[this.length] = newElem;
    // оновили довжину масиву
    this.length++;
    return this.length;
  };

  this.pop = function () {
    if (this.length > 0) {
      const lastItem = this[this.length - 1];
      delete this[--this.length];

      return lastItem;
    }

    return undefined;
  };
  this.unshift = function (newElem) {
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1];
    }
    this.length++;
    this[0] = newElem;
    return this.length;
  };
  this.shift = function () {
    if (this.length > 0) {
      const firstItem = this[0];
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
      delete this[--this.length];
      return firstItem;
    }
    return undefined;
  };
  this.isMyArray = function (object) {
    return object instanceof MyArray;
  };
  this.forEach = function (callBackFunck) {
    for (let i = 0; i < this.length; i++) {
      callBackFunck(this[i], i, this);
    }
  };
  this.map = function (callBackFunck) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray[i] = callBackFunck(this[i], i, this);
    }
    return newArray;
  };
}

MyArray.prototype = new MyArrayProto();

const myArr1 = new MyArray();

const arr = [1, 2, 3];
myArr1.push(1);
myArr1.push(2);
myArr1.push(3);
myArr1.push(4);
myArr1.push(5);
function callBackFunck(value) {
  return value * 2;
}
const newArr = myArr1.map(callBackFunck);
