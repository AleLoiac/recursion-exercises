function fibs(num) {
  const result = [0, 1];
  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

console.log(fibs(8));

function recFibs(num) {
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }
  const array = recFibs(num - 1);
  const nextNum = array[array.length - 1] + array[array.length - 2];
  array.push(nextNum);
  return array;
}

console.log(recFibs(8));
