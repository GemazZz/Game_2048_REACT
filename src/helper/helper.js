const plusFunc = (arr, num1, num2) => {
  let sum = 0;
  if (arr[num1] === arr[num2]) {
    arr[num1] = arr[num1] * 2;
    sum += arr[num1];
    arr[num2] = 0;
  }
  return sum;
};
const swapFunc = (arr, num1, num2) => {
  if (arr[num1] !== 0 && arr[num2] === 0) {
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  }
};

const sumFunc = (arr, num0, num1, num2, num3) => {
  const sum = plusFunc(arr, num3, num2) + plusFunc(arr, num2, num1) + plusFunc(arr, num1, num0);
  return sum;
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
  const sum = sumFunc(arr, num0, num1, num2, num3);
  rowFunc(arr, num0, num1, num2, num3);
  return sum;
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

export const startArrFunc = () => {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const num1 = Math.random() * 100;
  const num2 = Math.random() * 100;
  const indexNum1 = Math.round(num1) % 16;
  let indexNum2 = Math.round(num2) % 16;
  if (indexNum1 === indexNum2) {
    if (indexNum1 === 0 || indexNum1 === 1) {
      indexNum2 += 1;
    } else {
      indexNum2 -= 1;
    }
  }
  arr[indexNum1] = 2;
  arr[indexNum2] = 2;
  return arr;
};

export const rightArrFunc = (arr) => {
  const startArr = [...arr];
  const sum =
    allTogetherFunc(arr, 0, 1, 2, 3) +
    allTogetherFunc(arr, 4, 5, 6, 7) +
    allTogetherFunc(arr, 8, 9, 10, 11) +
    allTogetherFunc(arr, 12, 13, 14, 15);
  const endArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (startArr[i] !== endArr[i]) {
      randomPlaceIndexFunc(arr);
      break;
    }
  }
  return [arr, sum];
};
export const leftArrFunc = (arr) => {
  const startArr = [...arr];
  const sum =
    allTogetherFunc(arr, 3, 2, 1, 0) +
    allTogetherFunc(arr, 7, 6, 5, 4) +
    allTogetherFunc(arr, 11, 10, 9, 8) +
    allTogetherFunc(arr, 15, 14, 13, 12);
  const endArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (startArr[i] !== endArr[i]) {
      randomPlaceIndexFunc(arr);
      break;
    }
  }
  return [arr, sum];
};
export const downArrFunc = (arr) => {
  const startArr = [...arr];
  const sum =
    allTogetherFunc(arr, 3, 7, 11, 15) +
    allTogetherFunc(arr, 2, 6, 10, 14) +
    allTogetherFunc(arr, 1, 5, 9, 13) +
    allTogetherFunc(arr, 0, 4, 8, 12);
  const endArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (startArr[i] !== endArr[i]) {
      randomPlaceIndexFunc(arr);
      break;
    }
  }
  return [arr, sum];
};
export const upArrFunc = (arr) => {
  const startArr = [...arr];
  const sum =
    allTogetherFunc(arr, 12, 8, 4, 0) +
    allTogetherFunc(arr, 13, 9, 5, 1) +
    allTogetherFunc(arr, 14, 10, 6, 2) +
    allTogetherFunc(arr, 15, 11, 7, 3);
  const endArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (startArr[i] !== endArr[i]) {
      randomPlaceIndexFunc(arr);
      break;
    }
  }
  return [arr, sum];
};

export const isLoseFunc = (arr) => {
  if (
    !arr.includes(0) &&
    arr[0] !== arr[1] &&
    arr[1] !== arr[2] &&
    arr[2] !== arr[3] &&
    arr[0] !== arr[4] &&
    arr[4] !== arr[5] &&
    arr[5] !== arr[1] &&
    arr[5] !== arr[6] &&
    arr[6] !== arr[2] &&
    arr[6] !== arr[7] &&
    arr[7] !== arr[3] &&
    arr[8] !== arr[4] &&
    arr[8] !== arr[9] &&
    arr[8] !== arr[12] &&
    arr[9] !== arr[5] &&
    arr[9] !== arr[10] &&
    arr[9] !== arr[13] &&
    arr[10] !== arr[6] &&
    arr[10] !== arr[11] &&
    arr[10] !== arr[14] &&
    arr[11] !== arr[7] &&
    arr[11] !== arr[15] &&
    arr[12] !== arr[13] &&
    arr[13] !== arr[14] &&
    arr[14] !== arr[15]
  ) {
    return true;
  } else {
    return false;
  }
};
