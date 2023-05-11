function sortArray(arr) {
  var temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

temp = [3, 4, 5, 1, 2][(3, 4, 5, 1, 2)];

const arr1 = sortArray([3, 4, 5, 1, 2, 3]);

// console.log(arr1.length);
// console.log(arr1.length / 2);
// console.log(Math.round(arr1.length / 2));

// const medianVal = Math.round(arr1.length / 2);

// // console.log(sortArray([1, 2, 3, 4, 5]));
// console.log(arr1[medianVal - 1]);
