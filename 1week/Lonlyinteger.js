function lonelyinteger(a) {
  let lonlyGuy = 0;

  for (let i in a) {
    const firstIndex = a.indexOf(a[i]);
    const secondIndex = a.indexOf(a[i], firstIndex + 1);
    if (secondIndex === -1) {
      lonlyGuy = a[i];
    }
  }
  return lonlyGuy;
}

const arr1 = lonelyinteger([1, 1, 2, 2, 3, 3, 4, 4]);
console.log(arr1);
