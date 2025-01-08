// Time -> O(nlogn) | Space -> O(n)
function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  let result = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (array[i][0] > result[result.length - 1][1]) {
      result.push(array[i]);
    } else {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], array[i][1]);
    }
  }
  
  return result;
}

console.log(
  mergeOverlappingIntervals([[1, 2], [4, 7], [6, 8], [3, 5], [9, 10]])
); // [[1, 2], [3, 8], [9, 10]]

