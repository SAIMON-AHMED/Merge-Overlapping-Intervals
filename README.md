# Merge Overlapping Intervals

This repository contains a function, `mergeOverlappingIntervals`, that efficiently merges overlapping intervals in a 2D array. It takes a list of intervals and returns a simplified list where all overlapping intervals are merged into one.

## Function Signature

```javascript
function mergeOverlappingIntervals(array) -> array
```

## Parameters

- **array**: An array of intervals, where each interval is represented as an array of two integers `[start, end]`.
  - Example: `[[1, 3], [2, 4], [6, 8]]`

## Returns

- A new array of intervals with overlapping intervals merged. Each interval in the result is represented as `[start, end]`.
  - Example: `[[1, 4], [6, 8]]`

## Algorithm Explanation

1. **Sorting**: 
   - The intervals are sorted based on their starting values (`array.sort((a, b) => a[0] - b[0]);`).

2. **Merging Logic**:
   - Initialize the result array with the first interval.
   - Iterate through the sorted intervals:
     - If the current interval does not overlap with the last interval in the result, add it to the result.
     - Otherwise, merge the intervals by updating the end of the last interval in the result.

3. **Output**:
   - The merged intervals are stored in the `result` array and returned.

## Time and Space Complexity

- **Time Complexity**: `O(n log n)`
  - The sorting operation dominates the time complexity.
- **Space Complexity**: `O(n)`
  - The `result` array may store all the intervals in the worst case.

## Example Usage

```javascript
const { mergeOverlappingIntervals } = require('./mergeOverlappingIntervals');

const intervals = [[1, 2], [4, 7], [6, 8], [3, 5], [9, 10]];
const mergedIntervals = mergeOverlappingIntervals(intervals);

console.log(mergedIntervals); // Output: [[1, 2], [3, 8], [9, 10]]
```

## Edge Cases

- Empty array: `mergeOverlappingIntervals([])` should return `[]`.
- Single interval: `mergeOverlappingIntervals([[1, 5]])` should return `[[1, 5]]`.
- Non-overlapping intervals: `mergeOverlappingIntervals([[1, 2], [3, 4]])` should return `[[1, 2], [3, 4]]`.
- Fully overlapping intervals: `mergeOverlappingIntervals([[1, 10], [2, 5], [6, 8]])` should return `[[1, 10]]`.

## Testing

You can run the function with different sets of inputs to validate its correctness. Include cases with overlapping, non-overlapping, and edge scenarios to ensure robust performance.

## Usage

1. Import the function using:
   ```javascript
   const { mergeOverlappingIntervals } = require('./mergeOverlappingIntervals');
   ```
2. Pass a 2D array of intervals to the function.
3. Use the returned array of merged intervals as needed.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute as per the license terms.
