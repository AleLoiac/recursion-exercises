function mergeSort(array) {
  if (array.length === 1) {
    console.log(array[0]);
    return array;
  }

  const mid = Math.ceil(array.length / 2);

  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid, array.length);

  console.log(leftHalf, rightHalf);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  const output = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      output.push(left[i]);
      i++;
    } else {
      output.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    output.push(left[i]);
    i++;
  }

  while (j < right.length) {
    output.push(right[j]);
    j++;
  }

  return output;
}

console.log("Output: " + mergeSort([3, 2, 11, 4, 5, 6, 8, 9, 17]));
