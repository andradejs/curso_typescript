const variavel; //variavel do tipo undefined

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null
}

const squareOfTwoNumbers = squareOf(2);

const squareOfTwoNumbers2 = squareOf("1");

if (squareOfTwoNumbers === null) {
  console.log("conta invalida");
} else {
  console.log(squareOfTwoNumbers);
}
