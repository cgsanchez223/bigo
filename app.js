// 1
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }

console.log(logUpTo(5));
console.log(logUpTo(10));
// O(n)
// It will always simplify to O(n) since it is dealing with only 1 n number

// 2
function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
console.log(logAtLeast10(3));
console.log(logAtLeast10(14));
// O(n)
// It would alwas simplify to O(n) since it is dealing with only 1 n number. Even when number is lower it is still programmed to stop at 10. If it goes higher, it keeps going.


// 3
function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }
console.log(logAtMost10(11)); // stops at 10
console.log(logAtMost10(4)); // stops at 4
// O(1)
// O(1) requires us to set a hard parameter, in this case 10. If n goes over 10, it is still programmed to stop at 10.


// 4
function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
console.log(onlyElementsAtEvenIndex([2,4,6,8])); // [2,6]
console.log(onlyElementsAtEvenIndex([1,2,3,4,5,6,7,8])); // [1, 3, 5, 7]
// O(n)
// Even if you put in multiple numbers, it is only dealing with 1 number at a time

// 5
function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
console.log(subtotals([3, 6, 9])); // [3, 9, 18]
console.log(subtotals([4,5,6])); // [4, 9, 15]
// O(n^2)
// O(n^2) means the numbers grow quadratically with the size of the input


function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }

console.log(vowelCount('happyfeet')); // {a: 1, e: 2}
// O(n)
// It is on a fixed length limited to only the vowels.