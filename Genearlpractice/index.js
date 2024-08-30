// Two sum
function getSum(n) {
  let sum = (n * (n + 1)) / 2;
  return sum;
}
// console.log(getSum(10));

//Reverse a string

//normal approach
function Reversed_string(str) {
  Reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    Reversed += str[i];
  }
  return Reversed;
}

//Optimized approach

function Reversed_string(str) {
  let Reversed = str.split("").reverse().join("");
  return Reversed;
}
// console.log(Reversed_string("hello"));

// Palindrome (after reverse it should br equal)

function isPalindrome(str) {
  let newStr = str.toLowerCase();
  let Reveresed_string = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    Reveresed_string += newStr[i];
  }
  if (Reveresed_string === newStr) {
    console.log(Reveresed_string);
    return true;
  }
  console.log(Reveresed_string);
  return false;
}

// console.log(isPalindrome("SAs"));

//Find the largest Number

function largestNumber(a, b, c) {
  if (a > b && a > c) {
    return `The largest Number is ${a}`;
  } else if (b > a && b > c) {
    return `The largest number is ${b}`;
  } else {
    return `The largest number is ${c}`;
  }
}
// console.log(largestNumber(2, 4, 3));

function num(arr) {
  let largestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}
// console.log(num([1, 2, 35, 6]));

//Factorial Calculation

function fact(n) {
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
// console.log(fact(4));

//Even or Odd

function EvenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
// console.log(EvenOdd(4));

// Fibonacci series

function Fib(n) {
  let f = 0;
  let s = 1;
  console.log(f);
  // let series = [f, s];
  for (let i = 1; i <= n; i++) {
    console.log(s); //
    let sum = f + s;
    // series.push(sum);
    f = s;
    s = sum;
  }
  return series;
}
// Fib(5);
// console.log(Fib(10));

// Check the prime number

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count > 2) {
    return false;
  }
  return true;
}

// console.log(isPrime(4));

function prime(n) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && n > 1) {
    console.log("prime");
  } else {
    console.log("not Prime");
  }
}
// prime(4);

//print the prime numbers

function prime(m, n) {
  for (let i = m; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
// prime(100, 1000);

// Finding Non-Repeating elements in an array

let arr = [1, 2, 3, 2, 5];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  let count = 1;
  for (j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j] && i != j) {
      count++;
    }
  }
  if (count == 1) {
    newArr.push(arr[i]);
  }
}
// console.log(newArr);

//frequecy{} , result[]

function Non(arr) {
  let freq = {};
  let result = [];
  //finding  frequency
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    freq[element] = (freq[element] || 0) + 1;
  }

  //result

  for (i = 0; i < arr.length; i++) {
    if (freq[arr[i]] == 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(Non([1, 2, 3, 2, 4]));

//Armstrong number

function Armstrong_number(num) {
  let n = num.toString().split("");
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    result += n[i] * n[i] * n[i];
  }
  if (result === num) {
    return true;
  } else {
    return false;
  }
}
// console.log(Armstrong_number(10));

function Armstrong_number(n) {
  for (let i = 0; i <= n; i++) {
    let num = i.toString().split("");
    let result = 0;
    let numDigits = num.length;
    for (let j = 0; j < num.length; j++) {
      result += Math.pow(num[j], numDigits);
    }
    if (result == i) {
      console.log(i);
    }
  }
}
// Armstrong_number(100000);

// #Day-2

//Anagram or not

function AnagramFinder(str1, str2) {
  let newStr1 = str1.toLowerCase().split("").sort().join("");

  let newStr2 = str2.toLowerCase().split("").sort().join("");
  if (newStr1 == newStr2) {
    return true;
  }
  return false;
}
// console.log(AnagramFinder("Hello", "Olelh"));

// stringds should be equal

//Wheather a charater is a Vowel or Consonent

function VowelFinder(Character) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (vowels.includes(Character)) {
    return `${Character} is Vowel`;
  } else {
    return `${Character} is Consonent`;
  }
}
// console.log(VowelFinder("P"));

//Largest/Smallest element of the array

function largestElement(arr) {
  let largestElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}
// console.log(largestElement([1, 2, 4, 6, 9, 7]));

//smaller

function smaller(arr) {
  let smallestNumber = arr.sort((a, b) => a - b);
  return smallestNumber[0];
}
// console.log(smaller([4, 3, 2, 5, 8, 1]));

//Replace a substring in a string

function Substring(str) {
  let newStr = str.replace(/world/gi, "Boy!");
  return newStr;
}
// console.log(Substring("hello world myself pavan World"));

//Remove duplicates in a Array

// Array of Numbers

function RemoveDuplicates(arr) {
  let arr1 = [];
  for (let i of arr) {
    arr1.push(i.toLowerCase());
  }
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}
// console.log(RemoveDuplicates(["hi", "hello", "Hi"]));

// Array of Strings

//Reverse Words in a given string

function ReverseWords(str) {
  let ReversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ReversedStr += str[i];
    console.log(str[i]);
  }
  return ReversedStr;
}
// console.log(ReverseWords("Hello"));

//Sum of Digits of a number

// normal method

function SumOfDigits(num) {
  let n = num.toString().split("").map(Number);
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    result += n[i];
  }
  return result;
}
// console.log(SumOfDigits(1234));

// recursion method

function SumOfDigits(num) {
  if (num == 0) {
    return 0;
  }
  return (num % 10) + SumOfDigits(Math.floor(num / 10));
}

// console.log(SumOfDigits(123));

// //*
// * *
// * * *
// * * * *
// * * * * *

// function rows(n) {
//   for (let i = 0; i <= n; i++) {
//     let star = "";
//     for (let j = 1; j <= i; j++) {
//       star += " * ";
//     }
//     console.log(star.trim());
//   }
// }
// rows(5);

function rows(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars.trim());
  }
}
// rows(5);

function rows(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(i * 2);
    let stars = "* ".repeat(n - i);
    console.log(spaces + stars.trim());
  }
}
// rows(5);
function rows(n) {
  for (let i = 1; i <= n; i++) {
    // let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(stars.trim());
  }
}
// rows(5);

// convert a number from decimal to binary

let a = 22;
// console.log(a.toString(2));

// find a duplicate charater in a string

function duplicateFinder(str) {
  let newArr = str.split("");
  let frq = {};
  let duplicates = [];
  for (let i = 0; i < newArr.length; i++) {
    let element = newArr[i];
    frq[element] = (frq[element] || 0) + 1;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (frq[newArr[i]] > 1 && !duplicates.includes(newArr[i])) {
      duplicates.push(newArr[i]);
    }
  }
  return duplicates.join(",");
} // time compexity- O(n2)     space complexity- O(n)
// console.log(duplicateFinder("heheheii"));
function duplicateFinder(str) {
  let frq = {};
  let duplicates = [];
  for (let char of str) {
    if (frq[char]) {
      frq[char]++;
    } else {
      frq[char] = 1;
    }
  }
  for (let char in frq) {
    if (frq[char] > 1) {
      duplicates.push(char);
    }
  }
  return duplicates;
} // // time compexity- O(2n)=O(n)     space complexity- O(n)
// console.log(duplicateFinder("heheheii"));

//return any array contaning the digits of a given number

function Arr(n) {
  let ArrOfDigits = n.toString().split("").map(Number);
  return ArrOfDigits;
}
// console.log(Arr(1234));

//find the second largest number in a unsorted array

function Second_Largest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i of arr) {
    if (i > first) {
      first = i;
    } else if (i > second) {
      second = i;
    }
  }
  return second;
}
// console.log(Second_Largest([2, 4, 3, 5, 6]));

//print prime numbers b/w 100  and 1000

function getPrimes(m, n) {
  for (let i = m; i <= n; i++) {
    let isPrime = true;
    // Checking the number
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
// getPrimes(100, 1000);

//find the missing number in a given integer array of 1 to 100

//sum of n naturals numbers - sum of the array digits

function missingNumbers(arr) {
  let n = 100;
  let exact_Sum = (n * (n + 1)) / 2;
  let actual_Sum = 0;
  for (let i of arr) {
    actual_Sum += i;
  }
  return exact_Sum - actual_Sum;
}
// console.log(missingNumbers([1, 2, 3, 4, 5, 6, 100]));

//print next 10 years leap year
function leapYear(n) {
  // divisible by 4 and divisible by 400 and not divisible by 100
  if ((n % 4 == 0 && n % 100 !== 0) || n % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(leapYear(2028));

function leapYear(n) {
  let next = n + 1;
  let i = 0;
  while (i < 10) {
    if ((next % 4 == 0 && next % 100 != 0) || next % 400 == 0) {
      console.log(next);
      i++;
    }
    next++;
  }
}
// leapYear(2024);

//convert any number to its equalent word

function Words(num) {
  if (num == 0) {
    return "zero";
  }

  let Ones = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  let Tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  let thousands = ["", "Thousand", "Million", "Billion"];

  function helper(n) {
    if (n < 10) {
      return Ones[n];
    }

    if (n < 100) {
      return Tens[Math.floor(n / 10)] + " " + Ones[n % 10];
    }

    if (n < 1000) {
      return (
        Ones[Math.floor(n / 100)] + " " + "Hunderad" + " " + helper(n % 100)
      );
    }
    for (let i = 0; i < thousands.length; i++) {
      let unit = 1000 ** (i + 1);
      if (n < unit) {
        return (
          helper([Math.floor(n / (unit / 1000))]) +
          " " +
          thousands[i] +
          " " +
          helper(n % (unit / 1000))
        );
      }
    }
  }
  return helper(num).trim();
}
// console.log(Words(555555));

// done for the day

// #day 3

// Print Multiplication Table
// Write a program to print the multiplication table of a given number using a loop.

// function Table(n, mutiples) {
//   for (let i = 1; i <= mutiples; i++) {
//     console.log(`${n} * ${i} = ${n * i}`);
//   }
// }
// Table(3, 10);

function rows(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "1 ".repeat(i);
    console.log(spaces + stars.trim());
  }
}
// rows(4);

function row(n) {
  for (let i = 1; i <= n; i++) {
    // let spaces = " ".repeat(n - i);
    let stars = "1 ".repeat(i);
    console.log(stars.trim());
  }
}
// row(5);

// Number Pyramid
// Write a program to print a pyramid of numbers using nested loops:

//    1
//   121
//  12321
// 1234321

function printNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let j = i - 1; j >= 1; j--) {
      row += j;
    }
    console.log(row);
  }
}

// printNumberPyramid(4);

// GCD of Two Numbers
// Write a program to find the greatest common divisor (GCD) of two numbers using loops.

// recursion way

function GCD(n1, n2) {
  if (n1 == n2) {
    return n1;
  }

  if (n1 > n2) {
    return GCD(n1 - n2, n2);
  }
  return GCD(n1, n2 - n1);
}
// console.log(GCD(36, 60));

// Normal way
function GD(a, b) {
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result == 0 && b % result == 0) {
      break;
    }
    result--;
  }
  return result;
}
// console.log(GD(36, 60));

// # day 3 continued

// arrays

let arr1 = [1, 2, 3];

//adding numbers

arr1.push(4, 5, 8);
// console.log(arr1);

// Basic Array Push:
// Write a JavaScript function that initializes an empty array and then uses the push
// method to add 5 different elements to the array.Display the array after each push.

function ArrayPush(arr) {
  for (let i = 1; i <= 5; i++) {
    arr.push(i);
    console.log(arr);
  }
}
// ArrayPush([]);

// Push Multiple Elements:
// Write a JavaScript function that pushes multiple elements into an array at once.
// For example, push three numbers(10, 20, 30) into an array in a single call.

function Push(arr) {
  for (let i = 1; i <= 1; i++) {
    arr.push(i, i + 1, i + 2);
  }
  return arr;
}
// console.log(Push([]));

// Push and Array Length:
// Create a function that adds an element to an array using the push method and returns
// the new length of the array after the addition.Test this function with different inputs.

function push1(arr) {
  arr.push(2, 3);
  return arr.length;
}
// console.log(push1([1, 6, 7]));

// Simulate Stack Using Array:
//  Implement a stack(LIFO structure) using an array.Use the push method to add elements to
//  the stack and pop to remove the top element.Include a method to display the current
// state of the stack.

function push2(arr) {
  for (let i = 1; i <= 5; i++) {
    arr.push(i);
    console.log(arr);
  }
  //arr=[1,2,3,4,5]
  for (j = 1; j <= 5; j++) {
    arr.pop();
    console.log(arr);
  }
}
// push2([]);

// Push and Reverse:
// Write a function that takes two arrays, pushes all elements of the second array into the
// first one using a loop and the push method, and then reverses the final array.

function push3(arr1, arr2) {
  for (let i of arr2) {
    arr1.push(i);
  }
  // console.log(arr1);
  console.log(arr1.reverse());
}

// push3([1, 2, 3], [4, 5, 6]);

//slice

// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.slice(1, 4));
// console.log(arr2.splice(1, 1, 3));
// console.log(arr2);

// Problem 1: Find the Second Largest Element
// Write a function that takes an array of numbers as input and returns the second largest element in the array. If the array contains less than two elements, the function should return null.

// Example:

// Input: [12, 35, 1, 10, 34, 1]
// Output: 34

// Input: [10, 5, 10]
// Output: 5

// Input: [7]
// Output: null

function second(arr) {
  let first = -Infinity;
  let second = -Infinity;
  if (arr.length == 1) {
    console.log("null");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
        second = first;
        first = arr[i];
      } else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
      }
    }
    console.log(second);
  }
}

// second([10, 5, 10]);

// Input: arr1 = [1, 3, 5, 7], arr2 = [2, 4, 6, 8]
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

function Arr(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  console.log(newArr.sort((a, b) => b - a));
}
// Arr([1, 3], [6, 4, 5]);

let str = "apples";
let newStr = str.split("");
for (let i = 0; i < newStr.length; i++) {
  if (newStr[i] === "a") {
    newStr[i] = "p";
  } else if (newStr[i] === "p") {
    newStr[i] = "a";
  }
}
// console.log(newStr.join(""));

//swap two numbers without using third variable

let a1 = 10;
b = 20;

// let temp = a1;
// a1 = b;
// b = temp;

a1 = a1 + b; //a1=30
b = a1 - b; // b=10
a1 = a1 - b; //a1=20
console.log(a1);
console.log(b);
