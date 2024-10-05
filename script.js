function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

multiplicationTable(5);

function convertCelsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return ` ${celsius}°C is equal to ${fahrenheit}°F`;
}

const celsius = 10;
console.log(convertCelsiusToFahrenheit(Number(celsius)));

function checkNumber(num) {
  if (num > 0) {
    console.log(num + "positive number");
  } else if (num < 0) {
    console.log(num + "negative number");
  } else {
    console.log(num + "zero");
  }
}
checkNumber(5);
