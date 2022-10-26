const newArr = [1, 0, 4, 5, 8, 9, 10];

function isContainSame(arr) {
  return new Set(arr).size !== arr.length ? true : false;
}

console.log(isContainSame(newArr));
