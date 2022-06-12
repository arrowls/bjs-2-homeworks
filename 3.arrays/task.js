function compareArrays(arr1, arr2) {
  if (arr2.length > arr1.length) {
    [arr1, arr2] = [arr2, arr1];
  }
  return arr1.every((current, index) => {
    return arr2[index] === current;
  });
}

function advancedFilter(arr) {
  return arr
    .filter(element => element > 0)
    .filter(element => !(element % 3))
    .map(element => element * 10);
}
