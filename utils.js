/* eslint-disable semi */

// returns whole numbers from 0, n-1
function random(n) {
  return Math.floor(Math.random() * (n))
}

// returns whole numbers from 1, n
function randomD(n) {
  return random(n) + 1
}

// returns an array of length n of random die rolls
// using a die with numbers 1,s
function randomRolls(n, s) {
  let result = []
  let m = n
  while (m > 0) {
    const num = randomD(s)
    result.push(num)
    m -= 1
  }

  return result
}

module.exports.random = random
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
