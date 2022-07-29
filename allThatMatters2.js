// Linear search

const linearSearch = (arr, item) => {
  for (const i in arr) {
    if (arr[i] === item) return +i
  }
  return -1
}
// console.log(linearSearch([2, 9, 9], 9))

// Binary search

const binarySearch = (arr, item) => {
  let l = 0,
    r = arr.length - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const guess = arr[mid]
    if (guess === item) return mid
    if (guess > item) r = mid - 1
    else l = mid + 1
  }
  return -1
}
// console.log(binarySearch([1, 2, 3, 4, 5], 5))

// Bubble sort

const bubbleSort = (arr) => {
  let swapped = false
  const a = [...arr]
  for (let i = 1; i < a.length; i++) {
    swapped = false
    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        ;[a[j], a[j + 1]] = [a[j + 1], a[j]]
        swapped = true
      }
    }
    if (!swapped) return a
  }
  return a
}
// console.log(bubbleSort([2, 1, 4, 3]))

// Selection Sort

const selectionSort = (arr) => {
  const a = [...arr]
  for (let i = 0; i < a.length; i++) {
    const min = a
      .slice(i + 1)
      .reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i)
    if (min !== i) [a[i], a[min]] = [a[min], a[i]]
  }
  return a
}
// console.log(selectionSort([5, 1, 4, 2, 3]))

// Insertion sort

const insertionSort = (arr) =>
  arr.reduce((acc, x) => {
    if (!acc.length) return [x]
    acc.some((y, j) => {
      if (x <= y) {
        acc.splice(j, 0, x)
        return true
      }
      if (x > y && j === acc.length - 1) {
        acc.splice(j + 1, 0, x)
        return true
      }
      return false
    })
    return acc
  }, [])
// console.log(insertionSort([6, 3, 4, 1]))

// Merge sort

const mergeSort = (arr) => {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  const l = mergeSort(arr.slice(0, mid))
  const r = mergeSort(arr.slice(mid, arr.length))
  return Array.from({ length: l.length + r.length }, () => {
    if (!l.length) return r.shift()
    else if (!r.length) return l.shift()
    else return l[0] > r[0] ? r.shift() : l.shift()
  })
}
// console.log(mergeSort([5, 1, 4, 2, 3]))

// Quick sort

const quickSort = (arr) => {
  const a = [...arr]
  if (a.length < 2) return a
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = a[pivotIndex]
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val)
      } else if (val > pivot) {
        acc[1].push(val)
      }
      return acc
    },
    [[], []]
  )
  return [...quickSort(lo), pivot, ...quickSort(hi)]
}
// console.log(quickSort([1, 6, 1, 5, 3, 2, 1, 4]))

// Luhn Check

const luhnCheck = (num) => {
  const arr = (num + '')
    .split('')
    .reverse()
    .map((x) => parseInt(x))
  const lastDigit = arr.shift()
  let sum = arr.reduce(
    (acc, val, i) =>
      i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
    0
  )
  sum += lastDigit
  return sum % 10 === 0
}
// console.log(luhnCheck(123456789))
// console.log(luhnCheck(6011329933655299))
// console.log(luhnCheck('4485275742308327'))

// Heap sort

const heapsort = (arr) => {
  const a = [...arr]
  let l = a.length

  const heapify = (a, i) => {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let max = i
    if (left < l && a[left] > a[max]) max = left
    if (right < l && a[right] > a[max]) max = right
    if (max !== i) {
      ;[a[max], a[i]] = [a[i], a[max]]
      heapify(a, max)
    }
  }

  for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i)
  for (i = a.length - 1; i > 0; i--) {
    ;[a[0], a[i]] = [a[i], a[0]]
    l--
    heapify(a, 0)
  }
  return a
}
// console.log(heapsort([6, 3, 4, 1]))

// Count substrings of string

const countSubstrings = (str, searchValue) => {
  let count = 0,
    i = 0
  while (true) {
    const r = str.indexOf(searchValue, i)
    if (r !== -1) [count, i] = [count + 1, r + 1]
    else return count
  }
}
// console.log(countSubstrings('tiktok tok tok tik tok tik', 'tik'))
// console.log(countSubstrings('tutut tut tut', 'tut'))

// Index of substrings

const indexOfSubstrings = function* (str, searchValue) {
  let i = 0
  while (true) {
    const r = str.indexOf(searchValue, i)
    if (r !== -1) {
      yield r
      i = r + 1
    } else return
  }
}
// console.log([...indexOfSubstrings('tiktok tok tok tik tok tik', 'tik')])
// console.log([...indexOfSubstrings('tutut tut tut', 'tut')])

// Bucket sort

const bucketSort = (arr, size = 5) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  )
  arr.forEach((val) => {
    buckets[Math.floor((val - min) / size)].push(val)
  })
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], [])
}
// console.log(bucketSort([6, 3, 4, 1]))

// Array Permutations

const permutations = (arr) => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
          item,
          ...val,
        ])
      ),
    []
  )
}
// console.log(permutations([1, 33, 5]))

// Ceasar cipher

const caesarCipher = (str, shift, decrypt = false) => {
  const s = decrypt ? (26 - shift) % 26 : shift
  const n = s > 0 ? s : 26 + (s % 26)
  return [...str]
    .map((l, i) => {
      const c = str.charCodeAt(i)
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65)
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97)
      return l
    })
    .join('')
}
// console.log(caesarCipher('Hello World!', -3))
// console.log(caesarCipher('Ebiil Tloia!', 23, true))

// Euclidean distance

const euclideanDistance = (a, b) =>
  Math.hypot(...Object.keys(a).map((k) => b[k] - a[k]))

// console.log(euclideanDistance([1, 1], [2, 3]))
// console.log(euclideanDistance([1, 1, 1], [2, 3, 2]))

// Arithmetic progression

const arithmeticProgression = (n, lim) =>
  Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n)

// console.log(arithmeticProgression(5, 25))

// Powerset

const powerset = (arr) =>
  arr.reduce((a, v) => a.concat(a.map((r) => r.concat(v))), [[]])

// console.log(powerset([1, 2]))

//  Greatest common divisor

const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y))
  return [...arr].reduce((a, b) => _gcd(a, b))
}
// console.log(gcd(8, 36))
// console.log(gcd(...[12, 8, 32]))

// Fibonacci

const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  )
// console.log(fibonacci(6))

// Prime factors of number

const primeFactors = (n) => {
  let a = [],
    f = 2
  while (n > 1) {
    if (n % f === 0) {
      a.push(f)
      n /= f
    } else {
      f++
    }
  }
  return a
}
// console.log(primeFactors(147))

// Vector distance

const vectorDistance = (x, y) =>
  Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0))

// console.log(vectorDistance([10, 0, 5], [20, 0, 10]))

// Shuffle array

const shuffle = ([...arr]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}
// console.log(shuffle([1, 2, 3, 4]))

// Factorial of number

const factorial = (n) =>
  n < 0
    ? (() => {
        throw new TypeError('Negative numbers are not allowed!')
      })()
    : n <= 1
    ? 1
    : n * factorial(n - 1)
// console.log(factorial(6))

// Number is prime

const isPrime = (num) => {
  const boundary = Math.floor(Math.sqrt(num))
  for (let i = 2; i <= boundary; i++) if (num % i === 0) return false
  return num >= 2
}
// console.log(isPrime(11))
