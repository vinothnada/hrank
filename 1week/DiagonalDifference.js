function diagonalDifference(arr) {
  let leftToRightDiagonalSum = 0;
  let rightToLeftDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRightDiagonalSum += arr[i][i];
    rightToLeftDiagonalSum += arr[i][arr.length - 1 - i];
  }

  return Math.abs(leftToRightDiagonalSum - rightToLeftDiagonalSum);
}

const arr1 = diagonalDifference([3, 11, 2, 4, 4, 5, 6, 10, 8, -12]);
console.log(arr1);
