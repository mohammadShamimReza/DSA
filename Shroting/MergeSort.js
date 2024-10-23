let arr = [20, 3, 56, 7, 43, 23, 12, 0];

function mergeSort(arr, left, right) {
  if (left >= right) return; // Changed from 'if (left > right) return;'

  let mid = Math.floor((left + right) / 2);
  console.log(arr, left, mid, right);

  mergeSort(arr, left, mid); // left
  mergeSort(arr, mid + 1, right); // right
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  let leftArr = arr.slice(left, mid + 1);
  let rightArr = arr.slice(mid + 1, right + 1);
  let i = 0,
    j = 0,
    k = left;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);
