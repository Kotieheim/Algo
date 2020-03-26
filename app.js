/*
Even the Odds

For this set of positive numbers [1, 4, 5, 6, 21, 34, 3, 27, 32], write a 
function that returns a new array where each even number is the previous 
number and the next number multiplied together and each odd number is the 
previous number and the next number added together. For example, in an array 
of [3,6,9] for the number 6 you would multiply 3 * 9 and replace the 6 in 
the array with the number 27. For undefined values, reat them as 1's.
*/

/* pseudo code 
each even number is replaced with previous number and next number
MULTIPLIED together.

odd number is previous number and next number ADDED together

for example, array of [3, 6, 9] for the number 6 you would mult
3 * 9 and replace 6 in the array with that value, 27. for undefined
treat them as 1's

if at point 0 and even take next number * 1, if odd take next number + 1
if at last point and even take prev number * 1, if odd take prev number + 1
*/

function evenTheOdds(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], "at index", i);
    if (arr[i] % 2 === 0) {
      if (i === 0) {
        result.push(arr[i + 1]);
      } else if (i === arr.length - 1) {
        result.push(arr[i - 1]);
      }
      result.push(arr[i - 1] * arr[i + 1]);
    } else if (arr[i] % 2 !== 0) {
      if (i === 0) {
        result.push(arr[i + 1] + 1);
      } else if (i === arr.length - 1) {
        result.push(arr[i - 1] + 1);
      }
      result.push(arr[i - 1] + arr[i + 1]);
    }
  }
  const endArr = result.filter(value => {
    return !Number.isNaN(value);
  });
  return endArr;
}
console.log(evenTheOdds([1, 4, 5, 6, 21, 34, 3, 27, 32]));
// expect output = [5, 5, 10, 105, 40, 63, 61, 35, 32];
console.log(evenTheOdds([3, 6, 9, 12]));
// expect output = [7, 27, 18, 9]
