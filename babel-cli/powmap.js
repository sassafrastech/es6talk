// Given an array of numbers and an optional exponent,
// returns an array of the given numbers raised to the given exponent.
function powMap(bases, exp = 2) {
  return bases.map((x) => Math.pow(x, exp));
}
