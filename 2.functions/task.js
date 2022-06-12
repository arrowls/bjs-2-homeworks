// Задание 1
function getArrayParams(arr) {
  let min, max, sum = 0, avg;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce((total, current) => total + current);
  avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  return arr.reduce((total, current) => total + current);
}

function makeWork(arrOfArr, func) {
  let max = 0;
  arrOfArr.forEach(element => max = func(element) > max ? func(element) : max);
  return max;
}

// Задание 3
function worker2(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return Math.abs(max - min);
}
