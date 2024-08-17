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
console.log(fact(4));

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

function prime(n) {
  for (let i = 2; i <= n; i++) {
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
// prime(5);

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
