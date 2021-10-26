function maximum_integer(given_int) {
  let sum = 0;
  let no_of_integer = 0;
  for (let i = 1; sum <= given_int; i++) {
    sum = sum + i;
    no_of_integer = no_of_integer + 1;
  }
  return no_of_integer - 1;
}
console.log(maximum_integer(2));
console.log(maximum_integer(1));
console.log(maximum_integer(11));
console.log(maximum_integer(15));
