// 1., countUniqueValues

function countUniqueValues(arr) {
  let obj = {};

  // for (let num of arr) {
  //   obj[num] ? ++obj[num] : (obj[num] = 1);
  // }
  // return Object.keys(obj).length;

  // return new Set(arr).size;

  arr.forEach((num) => (obj[num] ? ++obj[num] : (obj[num] = 1)));
  return Object.keys(obj).length;
}

// console.log(countUniqueValues([1, 3, 3, 3, 4, 5, 5, 7, 7, 7, 9, 9, 10]));

// 2., Strings, strings, strings (Easy)

Boolean.prototype.toString =
  Number.prototype.toString =
  Array.prototype.toString =
    function () {
      return JSON.stringify(this);
    };

// 3., Regex validate PIN code

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// console.log(validatePIN(123456));

// 4., Century From Year

function century(year) {
  return Math.ceil(year / 100);
}

// console.log(century(2001));

// 5., Get the Middle Character

function getMiddle(str) {
  const middle = str.length / 2;
  return str.length % 2
    ? str.at(Math.floor(middle))
    : str.slice(middle - 1, middle + 1);
}

// function getMiddle(s) {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 ? 1 : 2);
// }

// console.log(getMiddle("Ecsed"));

// 6., Exes and Ohs

const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};

// console.log(XO("xoxoxooFghjlX"));

// 7., Jaden Casing Strings

String.prototype.toJadenCase = function () {
  return this.toLowerCase()
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
};

// 8., Find The Parity Outlier

function findOutlier(integers) {
  const even = integers.filter((int) => int % 2 === 0);
  const odd = integers.filter((int) => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

// 9., Who likes it?

function likes(names) {
  const [p1, p2, p3] = names;
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${p1} likes this`;
    case 2:
      return `${p1} and ${p2} like this`;
    case 3:
      return `${p1}, ${p2} and ${p3} like this`;
    default:
      return `${p1}, ${p2} and ${names.length - 2} others like this`;
  }
}

// console.log(
//   likes(["Alex", "Jacob", "Mark", "Max", "Delhussa", "Bobo", "Billy", "Greta"])
// );

// 10., Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages) {
  return [
    Math.min(...ages),
    Math.max(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
}

// console.log(differenceInAges([13, 17, 22, 29, 35, 68, 79]));

// 11., Sort Numbers

function sortNums(arr) {
  return arr ? arr.sort((a, b) => a - b) : [];
}

// console.log(sortNums([98, 23, 17, 22, 89, 35, 68, 79]));

// 12., Regular Ball Super Ball

const Ball = function (ballType) {
  return (this.ballType = ballType || "regular");
};

// console.log(Ball());

// 13., Credit Card Mask

function maskify(cc) {
  return cc
    .split("")
    .map((el, index) => (index < cc.length - 4 ? (el = "#") : el))
    .join("");
}

// console.log(maskify("4575768687"));

// 14., Descending Order

function descendingOrder(numArr) {
  return Number(
    numArr
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// console.log(descendingOrder(75864));

// 15., Isograms

const isIsogram = (str) =>
  new Set(str.toLowerCase().split("")).size === str.length;

// console.log(isIsogram("Budapest"));

// 16., Vowel Count

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

// console.log(getCount("Budapest"));

// 17., Highest and Lowest

function highAndLow(numbers) {
  const sortedNumArr = String(numbers)
    .split(" ")
    .sort((a, b) => a - b);
  return `${sortedNumArr[sortedNumArr.length - 1]} ${sortedNumArr[0]}`;
}

// console.log(highAndLow("1 9 3 4 -5"));

// 18., Complementary DNA

function DNAStrand(dna) {
  const code = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna
    .split("")
    .map((char) => code[char])
    .join("");
}

// console.log(DNAStrand("ATGC"));

// 19., Lexical this

const Person = function () {
  const person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      this._friends.push(...f); //This was empty, thus the task was to fill this line.
    },
  };
  return person;
};

// 20., Playing with cubes II

function Cube(n = 0) {
  this.side = n;
  this.setSide = function (n) {
    if (!isNaN(n)) {
      return (this.side = Math.abs(n));
    }
    this.getSide = function () {
      return this.side;
    };
  };
}

// 21., Beginner Series #3 Sum of Numbers

function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return ((max - min + 1) * (min + max)) / 2;
}

// 7 + 8 + 9
// console.log(getSum(7, 9));

// 22., Mumbling

function accum(str) {
  return str
    .split("")
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join("-");
}

// console.log(accum("fradi"));

// 23., Safen User Input Part I - htmlspecialchars

function htmlSpecialChars(formData) {
  return formData
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/>/g, "&gt;")
    .replace(/</g, "&lt;");
}

// console.log(htmlSpecialChars("<spencer&spencer>"));

// 24., Is the string uppercase?

String.prototype.isUpperCase = function () {
  return this === this.toUpperCase();
};

// 25., SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
  return (
    a.reduce((acc, cur) => acc + cur ** 2, 0) >
    b.reduce((acc, cur) => acc + cur ** 3, 0)
  );
}

// console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

// 26., Find the nth Digit of a Number

const findDigit = function (num, nth) {
  if (nth <= 0) return -1;

  const numToPositiveString = String(Math.abs(num));
  if (numToPositiveString.length < nth) return 0;

  const digitOfANumber = Number(
    numToPositiveString.charAt(numToPositiveString.length - nth)
  );
  return digitOfANumber;
};

// console.log(findDigit(82596, 2));

// 27., Filter out the geese

function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  return birds.filter((char) => !geese.includes(char));
  // return an array containing all of the strings in the input(birds) array, except for those that match strings in geese array.
}

// console.log(
//   gooseFilter(["Sparrow", "Parrot", "Toulouse", "Pigeon", "Roman Tufted"])
// );

// 28., Will there be enough space?

function enough(cap, on, wait) {
  return cap >= on + wait ? 0 : on + wait - cap;
}

// console.log(enough(120, 60, 50));

// 29., Find the first non-consecutive number

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) return arr[i + 1];
  }
  return null;
}

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// 30., Number of People in the Bus

// const busStopsNumber = function (busStops) {
//   let total = 0;
//   for (let stop of busStops) total += stop[0] - stop[1];
//   return total;
// };

const busStopsNumber = (busStops) =>
  busStops.reduce((total, [on, off]) => total + on - off, 0);

// console.log(
//   busStopsNumber([
//     [10, 0],
//     [3, 15],
//     [12, 8],
//   ])
// );

// 31., A Strange Trip to the Market

function isLockNessMonster(str) {
  return (
    str.includes("tree fiddy") ||
    str.includes("3.50") ||
    str.includes("three fifty")
  );
}

// console.log(isLockNessMonster("it's gonna be 3.50"));

// 32., How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}

// console.log(betterThanAverage([34, 50, 70, 90], 63));

// 33., Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
  return [...sperm].includes("Y")
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

// 34., Is this my tail?

function correctTail(body, tail) {
  sub = body.slice(body.length - tail.length);

  return sub === tail ? true : false;
}

// const correctTail = (body, tail) => body.endsWith(tail);

// console.log(correctTail("caramel", "mel"));

// 35., Pirates!! Are the Cannons ready!??

const cannonsReady = (gunners) =>
  Object.values(gunners).every((x) => x === "aye")
    ? "Fire!"
    : "Shiver me timbers!";

// const cannonsReady = (gunners) => {
//     for (let i in gunners) {
//         if (gunners[i] == "nay") {
//           return "Shiver me timbers!"
//         }
//     }
//   return "Fire!"
// }

// 36., What's the real floor?

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// 37., Collatz Conjecture (3n+1)

const hotpo = (n) => (n === 1 ? 0 : 1 + hotpo(n % 2 ? n * 3 + 1 : n / 2));

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// 38., Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

// 39., Who is going to pay for the wall?

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

// 40., Difference of Volumes of Cuboids

function find_difference(a, b) {
  return Math.abs(
    a.split(",").reduce((previous, current) => previous * current) -
      b.split(", ").reduce((previous, current) => previous * current)
  );
}

// console.log(find_difference("3, 2,  5", "1,  4, 4"));

// 41., Capitalization and Mutability

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// 42., Simple Fun #352: Reagent Formula

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

const isValid = (formula) =>
  !(formula.includes(1) && formula.includes(2)) &&
  !(formula.includes(3) && formula.includes(4)) &&
  formula.includes(5) === formula.includes(6) &&
  (formula.includes(7) || formula.includes(8));

// 43., The falling speed of petals

function sakuraFall(v) {
  return v > 0 ? 400 / v : 0;
}

// 44., Cat years, Dog years

const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];

// 45., Sleigh Authentication

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

// 46., Find the Remainder

const remainder = (a, b) => (a > b ? a % b : b % a);

// 47., Is integer safe to use?

const SafeInteger = (n) => Number.isSafeInteger(n);

// 48., get character from ASCII Value

const getChar = (c) => String.fromCharCode(c);

// 49., Sum of positive

const positiveSum = (arr) =>
  arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);

// const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

// 50., ASCII Total

function uniTotal(string) {
  return string
    .split("")
    .reduce((previous, current) => previous + current.charCodeAt(), 0);
}

// 51., Calculate average

function find_average(arr) {
  return arr.reduce((total, cur) => total + cur, 0) / arr.length || 0;
}

// 52., Bin to Decimal

function binToDec(bin) {
  return parseInt(bin, 2);
}

// 53., String cleaning

function stringClean(s) {
  return s.replace(/\d/g, "");
}

// 54., Reversed sequence

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) arr.push(i);
  return arr;
};

// const reverseSeq = length => Array.from({length}, () => length--)

// 55., Array plus array

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// 56., CSV representation of array

function toCsvText(arr) {
  return arr.join("\n");
}

// 57., Generate range of integers

function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) arr.push(i);
  return arr;
}

// 58., Short Long Short

const solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);

// 59., Kata Example Twist

// add the value "codewars" to the websites array 1,000 times

const websites = new Array(1000).fill("codewars");

// console.log(websites);

// 60., Counting sheep...

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// let countSheeps = x => x.filter( s => s ).length;

// 61., Convert number to reversed array of digits

function digitize(n) {
  return String(n)
    .split("")
    .reverse()
    .map((x) => Number(x));
}

// 62., Add length

function addLength(str) {
  return str.split(" ").map((x) => `${x} ${x.length}`);
}

// 63., Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 64., Find numbers which are divisible by given number

const divisibleBy = (numbers, divisor) =>
  numbers.filter((x) => x % divisor === 0);

// 65., Filling an array (part 1)

const arr = (N) => Array.from({ length: N }, (_, i) => i);

// const arr = n => n ? [...Array(n).keys()] : [];

// 66., Sum of Multiples

// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
  let result = 0;

  for (let i = 1; i * n < m; i++) result += i * n;
  return result > 0 ? result : "INVALID";
}

// 67., Correct the mistakes of the character recognition software

function correct(str) {
  const charactersObj = {
    5: "S",
    0: "O",
    1: "I",
  };

  return [...str]
    .map((el) => (charactersObj.hasOwnProperty(el) ? charactersObj[el] : el))
    .join("");
}

//const correct = str => str.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

// 68., Hex to Decimal

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

//69.,  Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s) {
  return s.replace(/[aeiouAEIOU]/g, "!");
}

// 70., 3 needs to become $3.00, 3.1 needs to become $3.10. Good luck! Your team knows they can count on you!

// function formatMoney(amount) {
//   return `$${parseFloat(amount).toFixed(2)}`;
// }

const formatMoney = (amount) => `$${amount.toFixed(2)}`;

// 71., Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x) {
  return x.map((el) => +el).reduce((a, b) => a + b);
}

// 72., You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars)
// and then return the first value. The returned value must be a string, and have "***" between each of its letters.

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

// 73., You get any card as an argument. Your task is to return the suit of this card (in lowercase). Our deck (is preloaded):

function defineSuit(card) {
  const suit = card.slice(-1);

  switch (suit) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    default:
      return "spades";
  }
}

// 74., Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

// 75., write me a function stringy that takes a size and returns a string of alternating '1s' and '0s', the string should start with a 1.

function stringy(size) {
  let str = "";
  for (let i = 1; i <= size; i++) {
    str += i % 2;
  }
  return str;
}

// const stringy = (size) => "".padStart(size, "10");

// 76., Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(" ").join("");
}

// 77., There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants. Your task is to change the letters with diacritics:

function correctPolishLetters(str) {
  const polishAlphabetToEnglish = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return str
    .split("")
    .map((x) => (polishAlphabetToEnglish[x] ? polishAlphabetToEnglish[x] : x))
    .join("");
}

// 78., Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(str) {
  return str.split(/[aeiou]/g).join("");
}

// 79.,If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  const counter = x.filter((el) => el === "good").length;

  return counter === 0
    ? "Fail!"
    : counter > 2
    ? "I smell a series!"
    : "Publish!";
}

// 80., Takes the animal's name and dish as arguments and returns true or false to indicate if the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters.
// Beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

// 81., Multiple of index

function multipleOfIndex(array) {
  return array.filter((el, i) => el % i === 0);
}

// 82., Character Frequency

const charFreq = (message) =>
  message.split("").reduce((counts, char) => {
    counts[char] = ++counts[char] || 1;
    return counts;
  }, {});

// function charFreq(message) {
//   let counts = {}
//   message.split('').forEach(x => counts[x] = (counts[x] || 0) + 1 )
//   return counts
// }

// 83., Tip Calculator

// function calculateTip(amount, rating) {
//   const rate = rating.toLowerCase();
//   switch (rate) {
//     case "excellent":
//       return Math.ceil(amount * 0.2);

//     case "great":
//       return Math.ceil(amount * 0.15);

//     case "good":
//       return Math.ceil(amount * 0.1);

//     case "poor":
//       return Math.ceil(amount * 0.05);

//     case "terrible":
//       return 0;

//     default:
//       return "Rating not recognised";
//   }
// }

const TIPS = {
  terrible: 0.0,
  poor: 0.05,
  good: 0.1,
  great: 0.15,
  excellent: 0.2,
};

const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();

  return rating in TIPS
    ? Math.ceil(TIPS[rating] * amount)
    : "Rating not recognised";
};

// 84., Rock Paper Scissors

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else if (p1 === rules[p2]) {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
};

// 85., Are the numbers in order?

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// function inAscOrder(arr) {
//   return arr.every((_, i) => i === 0 || arr[i] > arr[i - 1]);
// }

// 86., How many stairs will Suzuki climb in 20 years?

const stairsIn20 = (arrOfArrs) =>
  arrOfArrs
    .reduce((arr, days) => arr.concat(days), []) // arr.concat(...days) works too.
    .reduce((total, stairs) => total + stairs, 0) * 20;

// function stairsIn20(s) {
//   const arr = [].concat(...s);
//   const newArr = [].concat(...arr);
//   return newArr.reduce((a, b) => a + b) * 20;
// }

// 87., Calculate Price Excluding VAT

const excludingVatPrice = (price) =>
  price === null ? -1 : +(price / 1.15).toFixed(2);

// 88., Find Multiples of a Number

// function findMultiples(integer, limit) {
//   return Array.from(
//     { length: parseInt(limit / integer) },
//     (_, i) => (i + 1) * integer
//   );
// }

function findMultiples(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) result.push(i);

  return result;
}

// 89., Multiplication table for number

// function multiTable(number) {
//   return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     .map((el) => `${el} * ${number} = ${el * number}`)
//     .join("\n");
// }

// function multiTable(number) {
//   return [...Array(10)]
//     .map((_, i) => `${++i} * ${number} = ${i * number}`)
//     .join("\n");
// }

function multiTable(number) {
  let arr = Array.from({ length: 10 }, (_, i) => i + 1);

  return arr.map((el) => `${el} * ${number} = ${el * number}`).join("\n");
}

// 90., Check the exam

function checkExam(array1, array2) {
  let points = 0;

  array2.map((el, index) => {
    points += el === "" ? 0 : el === array1[index] ? 4 : -1;
  });

  return points > 0 ? points : 0;
}

// 91., Total amount of points

const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

// 92., A wolf in sheep's clothing

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");

  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

// 93., Printer Errors

const printerError = (s) => {
  const invalidCharacters = [...s]
    .map((word) => word.charCodeAt())
    .filter((charCode) => charCode < 97 || charCode > 109);
  return `${invalidCharacters.length}/${s.length}`;
};

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
// console.log(printerError("aaabbbbhaijjjm"));

// 94., Give me a Diamond

function diamond(n) {
  if (n % 2 === 0 || n <= 1) return null; // n <= 0
  let space = 0;
  let result = "*".repeat(n) + "\n";

  for (let star = n - 2; star >= 1; star -= 2) {
    let newRow = " ".repeat(++space) + "*".repeat(star) + `\n`;
    result = newRow + result + newRow;
  }
  return result;
}

// console.log(diamond(3));

// 95., Is this a triangle?

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

// console.log(isTriangle(3, 4, 5));

// 96., BMI

function calcBmi(weight, height) {
  const bmi = weight / (height * height);
  return bmi <= 18.5
    ? "Underweight"
    : bmi <= 25.0
    ? "Normal"
    : bmi <= 30.0
    ? "Overweight"
    : "Obese";
}

// ???
// console.log(calcBmi(89, 185));

// 97., A Needle in the Haystack

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// console.log(findNeedle("Fradi aint no needle"));

// 98., Count of positives / sum of negatives

// function countPositivesSumNegatives(input) {
//   if (!input || !input.length) return [];
//   let result = [0, 0];
//   input.forEach((el) => (el > 0 ? result[0]++ : (result[1] += el)));
//   return result;
// }

function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

// 99., Beginner - Reduce but Grow

function grow(x) {
  return x.reduce((a, b) => a * b);
}

// console.log(grow([2, 3, 4, 5, 5]));

// 100., Sum of differences in array

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// function sumOfDifferences(arr) {
// return arr
//   .sort((a, b) => b - a)
//   .reduce((acc, val, i , array) => {
//   if (!isNaN(val - array[i + 1])) {
//     acc += val - array[i + 1];
//   }
//   return acc;
//   }, 0)
// }

// console.log(sumOfDifferences([2, 1, 10]));

// 101., Enumerable Magic #20 - Cascading Subsets

function eachCons(arr, n) {
  return arr.map((_, i) => arr.slice(i, i + n)).filter((el) => el.length === n);
}

// console.log(eachCons([1, 2, 3, 4], 3));
// console.log(eachCons([1, 2, 3], 2));

// 102., Find the missing term in an Arithmetic Progression

const findMissing = function (list) {
  let cadence = (list[list.length - 1] - list[0]) / list.length;
  return list.find((el, ind) => el !== ind * cadence + list[0]) - cadence;
};

// console.log(findMissing([1, 3, 5, 9, 11]));

// 103., I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
  return nbPetals % 6 === 1
    ? "I love you"
    : nbPetals % 6 === 2
    ? "a little"
    : nbPetals % 6 === 3
    ? "a lot"
    : nbPetals % 6 === 4
    ? "passionately"
    : nbPetals % 6 === 5
    ? "madly"
    : "not at all";
}

// console.log(howMuchILoveYou(5));

// 104., Narcissistic Numbers

function isNarcissistic(n) {
  return (
    n ===
    n
      .toString()
      .split("")
      .reduce((acc, cur, i, arr) => (acc += Math.pow(cur, arr.length)), 0)
  );
}

// 1 * 1 * 1 + 5 * 5 * 5 + 3 * 3 * 3
// console.log(isNarcissistic(153));

// 105., Removing Elements

function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

// ???
// console.log([1, 2, 3, 4, 5]);

// 106., Ghostbusters (whitespace removal)

function ghostBusters(building) {
  return /\s/.test(building)
    ? building.replace(/\s+/g, "")
    : "You just wanted my autograph didn't you?";
}

// function ghostBusters(str) {
//   if (str.match(/ /)) return str.replace(/ /g, "");
//   return "You just wanted my autograph didn't you?";
// }

// console.log(ghostBusters("Sky scra per"));

// 107.,
