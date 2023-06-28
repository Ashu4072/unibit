const nums = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;
const doubleTarget = target * 2;

function firstCombo(arr , tar){
    const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === tar) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

function mergeAndSort(arr){
    // Merge all elements into a single array
  const mergedArray = arr.flat();

  // Sort the merged array in ascending order
  const sortedArray = mergedArray.sort((a, b) => a - b);

  return sortedArray;
}

function finalResultedArr(array, target) {
  const result = [];

  function backtrack(combination, startIndex, currentSum, used) {
    if (currentSum === target) {
      result.push([...combination]);
      return;
    }

    if (currentSum > target || startIndex >= array.length) {
      return;
    }

    for (let i = startIndex; i < array.length; i++) {
      const num = array[i];

      // Skip if the number has already been used in the combination
      if (used.has(num)) {
        continue;
      }

      combination.push(num);
      used.add(num);
      backtrack(combination, i + 1, currentSum + num, used);
      combination.pop();
      used.delete(num);
    }
  }

  backtrack([], 0, 0, new Set());
  return result;
}




let firstComboArr = firstCombo(nums , target);
console.log("first array : " , firstComboArr);
let mergeAndSortedArr = mergeAndSort(firstComboArr);
console.log("merger and sorted first array :" , mergeAndSortedArr);

let finalRes = finalResultedArr(mergeAndSortedArr , doubleTarget);
console.log("final array result :" , finalRes)
