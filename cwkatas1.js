// 1., The Supermarket Queue

function queueTime(customers, n) {
  let i, index
  const arr = new Array(n).fill(0)

  for (i = 0; i < customers.length; i++) {
    index = arr.indexOf(Math.min(...arr))
    arr[index] += customers[i]
  }

  return Math.max(...arr)
}

// console.log(queueTime([2, 3, 10], 2));
// console.log(queueTime([10, 2, 3, 3], 2));
// console.log(queueTime([5, 3, 4], 1));

// 2., Are they the "same"?

function comp(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false
  arr1 = arr1.map((num) => num ** 2).sort((a, b) => a - b)
  arr2 = arr2.sort((a, b) => a - b)

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

// console.log(
//   comp(
//     [121, 144, 19, 161, 19, 144, 19, 11],
//     [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//   )
// );

// 3., Directions Reduction

function dirReduc(plan) {
  const opposite = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  }

  return plan.reduce((result, current) => {
    result.at(-1) === opposite[current] ? result.pop() : result.push(current)
    return result
  }, [])
}

// function dirReduc(arr) {
//   let index = 0;

//   while (index < arr.length) {
//     if (
//       (arr[index] === "NORTH" && arr[index + 1] === "SOUTH") ||
//       (arr[index] === "SOUTH" && arr[index + 1] === "NORTH") ||
//       (arr[index] === "EAST" && arr[index + 1] === "WEST") ||
//       (arr[index] === "WEST" && arr[index + 1] === "EAST")
//     ) {
//       arr.splice(index, 2);
//       index--;
//     } else {
//       index++;
//     }
//   }
//   return arr;
// }

// console.log(
//   dirReduc([
//     "NORTH",
//     "SOUTH",
//     "SOUTH",
//     "EAST",
//     "NORTH",
//     "EAST",
//     "WEST",
//     "SOUTH",
//     "EAST",
//   ])
// );

// 4., Tribonacci Sequence

function tribonacci(signature, n) {
  for (let i = 3; i < n; i++) {
    signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]
  }
  return n < 3 ? signature.slice(0, n) : signature
}

// console.log(tribonacci([1, 1, 1], 2));

// 5., Help the bookseller!

function stockList(listOfArt, listOfCat) {
  let totalBooks = 0

  const categories = listOfCat.map((cat) => {
    const sumOfBooks = listOfArt
      .filter((el) => el.indexOf(cat) === 0)
      .map((el) => +el.split(' ')[1])
      .reduce((acc, cur) => acc + cur, 0)
    totalBooks += sumOfBooks
    return `(${cat} : ${sumOfBooks})`
  })

  return totalBooks === 0 ? '' : categories.join(' - ')
}

// console.log(
//   stockList(
//     ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600", "FUCK 420"],
//     ["A", "B", "C", "D", "E", "F"]
//   )
// );

// 6., Replace With Alphabet Position

// function alphabetPosition(text) {
//   return text
//     .toLowerCase()
//     .match(/[a-z]/gi)
//     .map((char) => char.charCodeAt() - 96)
//     .join(' ')
// }

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .split('')
    .map((el) => el.charCodeAt())
    .filter((number) => number > 64 && number < 91 && number)
    .map((number) => number - 64)
    .join(' ')
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// 7., Regex Password Validation

function validate(password) {
  return (
    /^[A-Za-z0-9]{6,}$/.test(password) &&
    /[A-Z]+/.test(password) &&
    /[a-z]+/.test(password) &&
    /[0-9]+/.test(password)
  )
}

// console.log(validate("Fradi98"));

// 8., Counting Duplicates

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter((el, i, arr) => arr.indexOf(el) !== i && arr.lastIndexOf(el) === i)
    .length
}

// This returns an object with letters as key and the number of occurance as value.

// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split('')
//     .reduce((result, cur, i, arr) => {
//       if (arr.indexOf(cur) !== i) result[cur] = ++result[cur] || 2
//       return result
//     }, {})
// }

// console.log(duplicateCount('Indivisibilitiesiii'))

// 9., If you can read this...

function to_nato(words) {
  return words
    .toLowerCase()
    .split('')
    .filter((el) => el !== ' ')
    .map((x) => NATO[x] || x)
    .join(' ')
}

// 10., Parse HTML/CSS Colors

// function parseHTMLColor(color) {
//   if (!color.match('#')) color = PRESET_COLORS[color.toLowerCase()]

//   color = color.replace('#', '')

//   if (color.length < 6) color = color.replace(/./g, '$&$&')

//   return {
//     r: parseInt(color.slice(0, 2), 16),
//     g: parseInt(color.slice(2, 4), 16),
//     b: parseInt(color.slice(-2), 16),
//   }
// }

function parseHTMLColor(color) {
  if (color[0] === '#') {
    const [r, g, b] =
      color.length === 4
        ? [color[1] + color[1], color[2] + color[2], color[3] + color[3]]
        : [color.slice(1, 3), color.slice(3, 5), color.slice(-2)]
    return {
      r: parseInt(r, 16),
      g: parseInt(g, 16),
      b: parseInt(b, 16),
    }
  } else {
    return parseHTMLColor(PRESET_COLORS[color.toLowerCase()])
  }
}

// 11., Count characters in your string

// function count(str) {
//   let result = {}
//   str
//     .split('')
//     .filter((x) => x !== ' ')
//     .map((letter) => (result[letter] = ++result[letter] || 1))
//   return result
// }

// const count = str => {
//   return str.split('').reduce((total, cur) => {
//     if (cur !== ' ') total[cur] ? ++total[cur] : (total[cur] = 1)
//     return total
//   }, {})
// }

function count(str) {
  return [...str].reduce((total, cur) => {
    if (cur !== ' ') total[cur] = ++total[cur] || 1
    return total
  }, {})
}

// console.log(count('epam budapest'))

// 12., Mexican Wave

// function wave(str) {
//   let result = []

//   str.split('').forEach((char, index) => {
//     if (/[a-z]/.test(char)) {
//       result.push(
//         str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
//       )
//     }
//   })

//   return result
// }

function wave(str) {
  let result = []

  for (let i = 0; i < str.length; i++) {
    let mexWave = [...str.toLowerCase()]
    if (mexWave[i] !== ' ') {
      mexWave[i] = mexWave[i].toUpperCase()
      result.push(mexWave.join(''))
    }
  }
  return result
}

// console.log(wave('Ferencvaros'))

// 13., Your order, please

function order(words) {
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ')
}

// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// 14., Sort the odd

function sortArray(arr) {
  const sortedOddArr = arr.filter((num) => num % 2).sort((a, b) => a - b)
  return arr.map((num) => (num % 2 ? sortedOddArr.shift() : num))
}

// console.log(sortArray([7, 2, 5, 4, 6, 1, 9, 2]))

// 15., Rot13

function rot13(message) {
  const alphabetPlus13 =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
  return message.replace(
    /[a-z]/gi,
    (el) => alphabetPlus13[alphabetPlus13.indexOf(el) + 13]
  )
}

// console.log(rot13("Budapest"));

// 16., Fibonacci, Tribonacci and friends

function Xbonacci(signature, n) {
  if (signature.length > n) return signature.slice(0, n)
  for (let i = 0; signature.length < n; i++) {
    signature.push(signature.slice(i, signature.length).reduce((a, b) => a + b))
  }
  return signature
}

// console.log(Xbonacci([1, 1, 1, 1], 7))

// 17., Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
  let eureka = []

  for (let i = a; i <= b; i++) {
    let digits = i.toString().split('')
    if (i === digits.reduce((acc, cur, i) => acc + cur ** (i + 1), 0)) {
      eureka.push(i)
    }
  }
  return eureka
}

// console.log(sumDigPow(10, 100))

// 18., Longest alphabetical substring

function longest(str) {
  let longest = ''
  let current = ''

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) <= str.charCodeAt(i + 1)) {
      current += str[i]
    } else {
      current += str[i]
      if (current.length > longest.length) longest = current
      current = ''
    }
  }
  return longest
}

// console.log(longest('asdfaaaabbbbcttavvfffffdf'))

// 19., String Evaluation

// 20., Formatting a number as price

// const numberToPrice = function (n) {
//   if (typeof n !== 'number') return 'NaN'

//   return (
//     n
//       .toFixed(3)
//       // .toString()
//       .replace(/\.(\d{2})\d*/, '.$1')
//       .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
//   )
// }

const numberToPrice = function (n) {
  // console.log(n.toFixed(3))
  // console.log(n.toFixed(3).replace(/\.(\d{2})\d*/, '.$1'))
  return typeof n !== 'number'
    ? 'NaN'
    : n
        .toFixed(3)
        .replace(/\.(\d{2})\d*/, '.$1')
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

// console.log(numberToPrice(13253.5166))

// 21., Multiples of 3 or 5

function multiples(num) {
  let total = 0

  for (let i = 1; i < num; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      total += i
    }
  }
  return total
}

// console.log(multiples(48));

// 22., Split Strings

function splitStrings(str) {
  let result = []
  const arr = [...str]

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) {
      result.push(arr[i] + arr[i + 1])
    } else {
      result.push(arr[i] + '_')
    }
  }
  return result
}

// console.log(splitStrings('abcdefg'))

// 23., Break camelCase

const camelBreak = (string) =>
  string
    .split('')
    .map((el) => (el === el.toUpperCase() ? ' ' + el : el))
    .join('')

// const camelBreak = (str) => str.replace(/[A-Z]/g, ' $&')

// console.log(camelBreak('camelCasing'))

// 24., Sum of Digits / Digital Root

const digitalRoot = (num) =>
  num < 10
    ? num
    : digitalRoot(
        num
          .toString()
          .split('')
          .reduce((acc, cur) => acc + +cur, 0)
      )

// function digitalRoot(num) {
//   if (num < 10) return num
//   return digitalRoot(
//     String(num)
//       .split('')
//       .reduce((acc, cur) => acc + +cur, 0)
//   )
// }

// console.log(digitalRoot(493193))
// console.log(digitalRoot(10))

// 25., Find the odd int

function findOdd(arr) {
  return arr.find(
    (num) => arr.filter((numInner) => numInner === num).length % 2
  )
}

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))

// 26., Which are in?

// function inArray(arr1, arr2) {
//   return arr1
//     .filter(function (needle) {
//       return arr2.some(function (haystack) {
//         return haystack.indexOf(needle) > -1
//       })
//     })
//     .sort()
// }

// function inArray(arr1, arr2) {
//   return arr1
//     .filter((needle) => arr2.some((haystack) => haystack.indexOf(needle) > -1))
//     .sort()
// }

const inArray = (arr1, arr2) => {
  return arr1
    .filter((needle) => arr2.some((haystack) => haystack.includes(needle)))
    .sort()
}

// console.log(
//   inArray(
//     ['arp', 'live', 'strong', 'asd'],
//     ['lively', 'alive', 'harp', 'sharp', 'armstrong']
//   )
// )

// 27., Moves in squared strings (II)

const rot = (str) => [...str].reverse().join(``)

const selfieAndRot = (str) =>
  (str = str.replace(/.+/g, (val) => val + `.`.repeat(val.length))) +
  `\n` +
  rot(str)

const oper = (fct, s) => fct(s)

// 28., Build Tower

function towerBuilder(n) {
  return [...Array(n)]
    .map(
      (_, i) => ' '.repeat(n - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - i)
    )
    .join('\n')
}

// console.log(towerBuilder(5))

function towerBuilder2(n) {
  return [...Array(n)]
    .map(
      (_, i) =>
        ' '.repeat(n - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - i - 1)
    )
    .reverse()
}

// console.log(towerBuilder2(8))

// 29., Highest Scoring Word

// function highScoring(str) {
//   const wordsArr = str.split(' ')
//   let highestScore = 0
//   let highestIndex = 0

//   const scoresArr = wordsArr.map((el) =>
//     el
//       .toLowerCase()
//       .split('')
//       .reduce((acc, cur) => acc + (cur.charCodeAt() - 96), 0)
//   )

//   scoresArr.forEach((score, i) => {
//     if (score > highestScore) {
//       highestScore = score
//       highestIndex = i
//     }
//   })
//   return wordsArr[highestIndex]
// }

function highScoring(str) {
  let position = str
    .split(' ')
    .map((el) => [...el].reduce((acc, curr) => acc + curr.charCodeAt() - 96, 0))
  console.log(...position)

  return str.split(' ')[position.indexOf(Math.max(...position))]
}

// console.log(
//   highScoring('given a string of words of vuvuzela on planet xoxoxoxo')
// )

// 30., Sum of a Sequence [Hard-Core Version]

function sequenceSum(begin, end, step) {
  const steps = Math.floor((end - begin) / step)
  return (end - begin) * step > 0
    ? ((step + step * steps) / 2) * steps + (steps + 1) * begin
    : 0
}

// console.log(sequenceSum(2, 6, 2));
// console.log(sequenceSum(1, 5, 3));
// console.log(sequenceSum(2, 2, 2));

// 31., Find the missing term in an Arithmetic Progression

const findMissing = function (list) {
  const step = (list[list.length - 1] - list[0]) / list.length
  return list.filter((val, index) => val !== list[0] + index * step)[0] - step
}

// console.log(findMissing([1, 3, 5, 9, 11]))
// console.log(findMissing([7, 18, 29, 51, 62, 73]))

// 32., Convert string to camel case

function toCamelCase(str) {
  // console.log(str.match(/[-_]\w/gi))
  return str.replace(/[-_]\w/gi, (el) => el[1].toUpperCase())
}

// console.log(toCamelCase('the_stealth-warrior'))

// 33., Can you get the loop ?

function loop_size(node) {
  const nodes = []

  while (nodes.indexOf(node) === -1) {
    nodes.push(node)
    node = node.next
  }

  return nodes.length - nodes.indexOf(node)
}

// 34., Human Readable Time (time = seconds)

function humanReadable(time) {
  const hours = Math.floor(time / 60 / 60)
  const remainder = time - hours * 60 * 60
  const minutes = Math.floor(remainder / 60)
  const seconds = remainder - minutes * 60

  return `
  ${hours.toString().padStart(2, '0')}:
  ${minutes.toString().padStart(2, '0')}:
  ${seconds.toString().padStart(2, '0')}
  `
}
// console.log(humanReadable(3666))
// console.log(humanReadable(3059))

// 34extra., Primes in numbers

function primeFactors(num) {
  let newArr = [],
    obj = {},
    str = ''
  cal(num)

  function cal(num) {
    if (num > 1) {
      for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
          newArr.push(i)
          cal(num / i)
          return true
        }
      }
    } else {
      return true
    }
  }
  newArr.map(function (x) {
    obj[x] ? ++obj[x] : (obj[x] = 1)
  })
  for (let item in obj) {
    obj[item] == 1 && (str += '(' + item + ')')
    obj[item] > 1 && (str += '(' + item + '**' + obj[item] + ')')
  }
  return str
}

// 34extraa., Merged String Checker

function isMerge(s, part1, part2) {
  if (s.length !== part1.length + part2.length) {
    return false
  }

  if (!s.length) {
    return true
  }

  if (part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2)) {
    return true
  }

  if (part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1))) {
    return true
  }

  return false
}

// 34extraaa., Josephus Permutation

function josephus(items, k) {
  let index = 0
  let result = []
  while (items.length) {
    index = (index + k - 1) % items.length
    result.push(...items.splice(index, 1))
  }
  return result
}

// 34lul., Simple Fun #160: Cut The Ropes

const cutTheRopes = (arr) => {
  let result = [arr.length]
  while (Math.max(...arr) !== 0) {
    let sorted = arr.sort((a, b) => a - b).find((idx) => idx !== 0)
    arr = arr.map((el) => (el - sorted < 0 ? 0 : el - sorted))
    let count = arr.filter((el) => el !== 0).length
    if (count !== 0) result.push(count)
  }
  return result
}

// 35., Give me a Diamond

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null
  let str = ''
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2)
    str += ' '.repeat(len)
    str += '*'.repeat(n - 2 * len)
    str += '\n'
  }
  return str
}

// console.log(diamond(7))

// 35extra., IQ Test (retired)

function iqTest(numbers) {
  numbers = numbers.split(' ').map((num) => +num)
  const even = numbers.filter((num) => num % 2 === 0)
  const odd = numbers.filter((num) => num % 2 === 1)

  return even.length > odd.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1
}

// console.log(iqTest("2 4 7 8 10"));
// console.log(iqTest("1 2 2"));

// 36., Simple Fun #166: Best Match

function bestMatch(ALAHLYGoals, zamalekGoals) {
  let min = Infinity
  let temp = zamalekGoals[0]
  let result = 0

  for (let i = 0; i < ALAHLYGoals.length; i++) {
    let diff = ALAHLYGoals[i] - zamalekGoals[i]
    if (diff < min) {
      min = diff
      temp = zamalekGoals[i]
      result = i
    } else if (diff === min && zamalekGoals[i] > temp) {
      min = diff
      temp = zamalekGoals[i]
      result = i
    }
  }

  return result
}

// console.log(bestMatch([4, 6, 2], [1, 2, 0]))

// 37., Unary function chainer

const chained = (func) => (input) => func.reduce((acc, cur) => cur(acc), input)

// function chained(func) {
//   return function (input) {
//     return func.reduce(function (acc, cur) {
//       return cur(acc), input
//     })
//   }
// }

// console.log(chained([a, b, c, d])(input))

// 38., Simple Pig Latin

function pigIt(str) {
  return str
    .split(' ')
    .map((el) => (/([a-zA-Z])/.test(el) ? el.slice(1) + el[0] + 'ay' : el))
    .join(' ')
}

// console.log(pigIt('Pig latin is cool!'))

// 39., Moving Zeros To The End

// const moveZeros = (arr) =>
//   arr.filter((el) => el !== 0).concat(arr.filter((val) => val === 0))

function moveZeros(arr) {
  const zeros = arr.filter((el) => el === 0)
  const nonzeros = arr.filter((el) => el !== 0)

  zeros.forEach((el) => nonzeros.push(el))

  return nonzeros
}

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))

// 40., Where my anagrams at?

function anagrams(word, words) {
  return words.filter(
    (el) => el.split('').sort().join() === word.split('').sort().join()
  )
}

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'raecr']))

// 41., RGB To Hex Conversion

const rgb = (r, g, b) => {
  const convert = (color) => {
    if (color > 255) return 'FF'
    if (color < 0) return '00'
    return (
      color > 15 ? color.toString(16) : '0' + color.toString(16)
    ).toUpperCase()
  }
  return convert(r) + convert(g) + convert(b)
}

// console.log(rgb(255, 255, 255));
// console.log(rgb(148, 0, 211));

// 42., Valid Parentheses

function validParentheses(parens) {
  const reg = /\(\)/g
  while (reg.test(parens)) parens = parens.replace(reg, '')
  return parens === ''
}

// function validParentheses(parens) {
//   let n = 0
//   for (let i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++
//     if (parens[i] == ')') n--
//     if (n < 0) return false
//   }

//   return n === 0
// }

// console.log(validParentheses('(())((()())())'))
// console.log(validParentheses(')((())((()())())'))

// 43., Caesar Cipher Helper

class CaesarCipher {
  constructor(shift) {
    this.shift = shift
  }
  encode(str) {
    let charName,
      result = ''
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
        charName = str[i].charCodeAt()
      } else if (str[i].charCodeAt() + this.shift > 122) {
        charName = 96 + (str[i].charCodeAt() + this.shift - 122)
      } else {
        charName = str[i].charCodeAt() + this.shift
      }
      result += String.fromCharCode(charName)
    }
    return result.toUpperCase()
  }
  decode(str) {
    let charName,
      result = ''
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() < 97 || str[i].charCodeAt() > 122) {
        charName = str[i].charCodeAt()
      } else if (str[i].charCodeAt() - this.shift < 97) {
        charName = 123 - (97 - (str[i].charCodeAt() - this.shift))
      } else {
        charName = str[i].charCodeAt() - this.shift
      }
      result += String.fromCharCode(charName)
    }
    return result.toUpperCase()
  }
}

// const c = new CaesarCipher(14)
// console.log(c.encode('Codewars'))
// console.log(c.decode('QCRSKOFG'))
// console.log(c.encode('Waffle'))
// console.log(c.decode('KOTTZS'))

// 44., Vector class

class Vector {
  constructor(components) {
    this.components = components
  }

  add(el) {
    if (this.components.length !== el.components.length) {
      throw Error('Vectors are not same length.')
    }

    const sums = []

    for (let i = 0; i < this.components.length; i++) {
      sums.push(this.components[i] + el.components[i])
    }

    return new Vector(sums)
  }

  subtract(el) {
    if (this.components.length !== el.components.length) {
      throw Error('Vectors are not same length.')
    }

    const differences = []

    for (let i = 0; i < this.components.length; i++) {
      differences.push(this.components[i] - el.components[i])
    }

    return new Vector(differences)
  }

  dot(el) {
    if (this.components.length !== el.components.length) {
      throw Error('Vectors must be the same length.')
    }

    const products = []

    for (let i = 0; i < this.components.length; i++) {
      products.push(this.components[i] * el.components[i])
    }

    return products.reduce((x, y) => x + y)
  }

  equals(el) {
    if (this.components.length !== el.components.length) {
      return false
    }

    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] !== el.components[i]) {
        return false
      }
    }

    return true
  }

  norm() {
    return Math.sqrt(this.components.reduce((x, y) => x + y * y))
  }

  toString() {
    return `(${this.components.join(',')})`
  }
}

// class Vector {
//   constructor(components) {
//     this.arr = components;
//   }

//   add({arr}) {
//     if (this.arr.length !== arr.length) throw new Error();
//     return new Vector(this.arr.map((val, idx) => val + arr[idx]));
//   }

//   subtract({arr}) {
//     if (this.arr.length !== arr.length) throw new Error();
//     return new Vector(this.arr.map((val, idx) => val - arr[idx]));
//   }

//   dot({arr}) {
//     if (this.arr.length !== arr.length) throw new Error();
//     return this.arr.reduce((pre, val, idx) => pre + val * arr[idx], 0);
//   }

//   norm() {
//     return Math.hypot(...this.arr);
//   }

//   toString() {
//     return `(${this.arr})`;
//   }

//   equals({arr}) {
//     return this.arr.every((val, idx) => val === arr[idx]);
//   }
// }

// 45., PaginationHelper

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
  }
  itemCount() {
    return this.collection.length
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage)
  }
  pageItemCount(pageIndex) {
    return pageIndex < this.pageCount()
      ? Math.min(
          this.itemsPerPage,
          this.collection.length - pageIndex * this.itemsPerPage
        )
      : -1
  }
  pageIndex(itemIndex) {
    return itemIndex < this.collection.length && itemIndex >= 0
      ? Math.floor(itemIndex / this.itemsPerPage)
      : -1
  }
}

// function PaginationHelper(collection, itemsPerPage) {
//   ;(this.collection = collection), (this.itemsPerPage = itemsPerPage)
// }

// PaginationHelper.prototype.itemCount = function () {
//   return this.collection.length
// }

// PaginationHelper.prototype.pageCount = function () {
//   return Math.ceil(this.collection.length / this.itemsPerPage)
// }

// PaginationHelper.prototype.pageItemCount = function (pageIndex) {
//   return pageIndex < this.pageCount()
//     ? Math.min(
//         this.itemsPerPage,
//         this.collection.length - pageIndex * this.itemsPerPage
//       )
//     : -1
// }

// PaginationHelper.prototype.pageIndex = function (itemIndex) {
//   return itemIndex < this.collection.length && itemIndex >= 0
//     ? Math.floor(itemIndex / this.itemsPerPage)
//     : -1
// }

// 46., Simple Events

class Event {
  constructor() {
    this.subscribers = new Set()
  }

  subscribe(func) {
    this.subscribers.add(func)
  }

  unsubscribe(func) {
    this.subscribers.delete(func)
  }

  emit(...args) {
    this.subscribers.forEach((func) => func(...args))
  }
}

// 47., Advanced Events

function Event() {
  let stack = []

  this.subscribe = function (fn) {
    Array.from(arguments).forEach((e) =>
      typeof e == 'function' ? stack.push(e) : ''
    )
  }

  this.unsubscribe = function (fn) {
    Array.from(arguments).forEach((e) =>
      stack.includes(e) ? stack.splice(stack.lastIndexOf(e), 1) : 0
    )
  }

  this.emit = function () {
    let currentStack = [...stack]
    currentStack.forEach((e) => {
      e.apply(this, Array.from(arguments))
    })
  }
}

// 48., Vigenère Cipher Helper

function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let encodeStr = ''
    for (let i in str) {
      let char = str[i]
      let k = key[i % key.length]
      abc.indexOf(char) >= 0
        ? (encodeStr += abc[(abc.indexOf(char) + abc.indexOf(k)) % abc.length])
        : (encodeStr += char)
    }
    return encodeStr
  }

  this.decode = function (str) {
    let decodeStr = ''
    for (let i in str) {
      let char = str[i]
      let k = key[i % key.length]
      abc.indexOf(char) >= 0
        ? (decodeStr +=
            abc[(abc.indexOf(char) + abc.length - abc.indexOf(k)) % abc.length])
        : (decodeStr += char)
    }
    return decodeStr
  }
}
