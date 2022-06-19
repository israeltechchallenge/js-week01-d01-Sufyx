function moduloEx6(num1, num2) {
  let str;
  if (num1 > num2) {
    let num3 = num1 % num2;
    if (num3 === 0) {
      str = `The number ${num1} is bigger than ${num2}`;
    } else {
      str = `The modulo of ${num1} % ${num2} is ${num3}`;
    }
  } else if (num1 < num2) {
    str = `The number ${num1} is less than ${num2}`
  } else {
    str = `The number ${num1} is equal to ${num2}`;
  }
  document.getElementById("output").innerHTML = str;
}
