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
*/

function evenTheOdds(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    index = arr.indexOf(arr[i]);
    console.log(arr[i], "at index", index);
    if (arr[i] % 2 === 0) {
      if (i === 0 || i === arr.length - 1) {
        result.push(arr[i] * 1);
      }
      result.push(arr[index - 1] * arr[index + 1]);
    } else if (arr[i] % 2 !== 0) {
      if (i === 0 || i === arr.length - 1) {
        result.push(arr[i] + 1);
      }
      result.push(arr[index - 1] + arr[index + 1]);
    }
  }
  const endArr = result.filter(value => {
    return !Number.isNaN(value);
  });
  return endArr;
}
// console.log(evenTheOdds([1, 4, 5, 6, 21, 34, 3, 27, 32]));
// expected output = [2, 5, 10, 105, 40, 63, 61, 35, 33];
console.log(evenTheOdds([3, 6, 9]));
