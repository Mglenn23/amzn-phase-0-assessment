// 1. Write your functions here

function takeANumber(arr, str) {
  arr.push(str);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      console.log(`Welcome, ${str}. You are number ${[i + 1]} in line.`);
    }
  }
}

function nowServing(arr) {
  if (arr.length > 0) {
    console.log(`Currently serving ${arr.shift()}`);
  } else {
    console.log("There is nobody waiting to be served!");
  }
}

function line(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(i + 1 + ". " + arr[i]);
  }
  let stringReturn = newArr.toString().replaceAll(",", " ");
  if (arr.length > 0) {
    console.log(`The line is currently: ${stringReturn}`);
  } else {
    console.log("The line is currently empty.");
  }
}
// 2. Example Usage

const katzDeli = [];

console.log(takeANumber(katzDeli, "Ada")); //=> Welcome, Ada. You are number 1 in line.
console.log(takeANumber(katzDeli, "Grace")); //=> Welcome, Grace. You are number 2 in line.
console.log(takeANumber(katzDeli, "Kent")); //=> Welcome, Kent. You are number 3 in line.

console.log(line(katzDeli)); //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

console.log(nowServing(katzDeli)); //=> "Currently serving Ada."

line(katzDeli); //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz"); //=> Welcome, Matz. You are number 3 in line.

line(katzDeli); //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli); //=> "Currently serving Grace."

line(katzDeli); //=> "The line is currently: 1. Kent 2. Matz"

//test running code
// line(katzDeli);
// takeANumber(katzDeli, "MG");
// takeANumber(katzDeli, "Valen");
//  line(katzDeli);
//   nowServing(katzDeli);
// line(katzDeli);
//  nowServing(katzDeli);
//  nowServing(katzDeli);
//  line(katzDeli);
