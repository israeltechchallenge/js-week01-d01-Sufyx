function getRandomInt(max) {
  let num = parseInt(Math.random() * max) + 1;
  return num;
}

function moduloEx7() {
  let max = 100;
  let num1 = getRandomInt(max);
  let num2 = getRandomInt(max);
  let str;

  if (num1 > num2) {
    let num3 = num1 % num2;
    if (num3 !== 0) {
      str = ` The modulo of ${num1} % ${num2} is ${num3}.`;
    } else {
      str = `The number ${num1} is bigger than ${num2}.`;
    }
  } else if (num1 < num2) {
    str = `The number ${num1} is less than ${num2}.`
  } else {
    str = `The number ${num1} is equal to ${num2}.`;
  }
  document.getElementById("output").innerHTML = str;
}

document.getElementById("go").addEventListener("click", moduloEx7);