const plusFunc = (arr, num1, num2) => {
  if (arr[num1] === arr[num2]) {
    arr[num1] = arr[num1] * 2;
    arr[num2] = 0;
  }
};
const swapFunc = (arr, num1, num2) => {
  if (arr[num1] !== 0 && arr[num2] === 0) {
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  }
};

const sumFunc = (arr, num0, num1, num2, num3) => {
  plusFunc(arr, num3, num2);
  plusFunc(arr, num2, num1);
  plusFunc(arr, num1, num0);
};

const rowFunc = (arr, num0, num1, num2, num3) => {
  swapFunc(arr, num2, num3);
  swapFunc(arr, num1, num3);
  swapFunc(arr, num1, num2);
  swapFunc(arr, num0, num3);
  swapFunc(arr, num0, num2);
  swapFunc(arr, num0, num1);
};

const allTogetherFunc = (arr, num0, num1, num2, num3) => {
  rowFunc(arr, num0, num1, num2, num3);
  sumFunc(arr, num0, num1, num2, num3);
  rowFunc(arr, num0, num1, num2, num3);
};

const randomPlaceIndexFunc = (arr) => {
  const indexOfZeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      indexOfZeros.push(i);
    }
  }
  const num = Math.random() * 100;
  const finalNum = Math.round(num) % indexOfZeros.length;
  const newNumProbability = Math.random() < 0.9 ? 2 : 4;
  arr[indexOfZeros[finalNum]] = newNumProbability;
};

export const rightArrFunc = (arr) => {
  const startArr = [...arr];
  allTogetherFunc(arr, 0, 1, 2, 3);
  allTogetherFunc(arr, 4, 5, 6, 7);
  allTogetherFunc(arr, 8, 9, 10, 11);
  allTogetherFunc(arr, 12, 13, 14, 15);
  const endArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (startArr[i] !== endArr[i]) {
      randomPlaceIndexFunc(arr);
      break;
    }
  }
  return arr;
};
export const leftArrFunc = (arr) => {
  const startArr = [...arr];
  allTogetherFunc(arr, 3, 2, 1, 0);
  allTogetherFunc(arr, 7, 6, 5, 4);
  allTogetherFunc(arr, 11, 10, 9, 8);
  allTogetherFunc(arr, 15, 14, 13, 12);
  const endArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (startArr[i] !== endArr[i]) {
      randomPlaceIndexFunc(arr);
      break;
    }
  }
  return arr;
};
export const downArrFunc = (arr) => {
  const startArr = [...arr];
  allTogetherFunc(arr, 3, 7, 11, 15);
  allTogetherFunc(arr, 2, 6, 10, 14);
  allTogetherFunc(arr, 1, 5, 9, 13);
  allTogetherFunc(arr, 0, 4, 8, 12);
  const endArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (startArr[i] !== endArr[i]) {
      randomPlaceIndexFunc(arr);
      break;
    }
  }
  return arr;
};
export const upArrFunc = (arr) => {
  const startArr = [...arr];
  allTogetherFunc(arr, 12, 8, 4, 0);
  allTogetherFunc(arr, 13, 9, 5, 1);
  allTogetherFunc(arr, 14, 10, 6, 2);
  allTogetherFunc(arr, 15, 11, 7, 3);
  const endArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (startArr[i] !== endArr[i]) {
      randomPlaceIndexFunc(arr);
      break;
    }
  }
  return arr;
};
