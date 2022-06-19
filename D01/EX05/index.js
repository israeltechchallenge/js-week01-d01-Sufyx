function moduloEx5(num1, num2) {
  let str;
  if (num1 > num2) {
    str = `The number ${num1} is bigger than ${num2}`;
    let num3 = num1 % num2;
    if (num3 !== 0) {
      str += `. But the modulo of ${num1} % ${num2} is ${num3}`;
    }
    
  } else if (num1 < num2) {
    str = `The number ${num1} is less than ${num2}`
  } else {
    str = `The number ${num1} is equal to ${num2}`;
  }
  console.log(str);
}

// Do not remove or change this line, or the tests won't work
export {
  moduloEx5
};