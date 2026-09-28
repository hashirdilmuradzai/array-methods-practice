// https://chatgpt.com/share/6ab40436-21b0-83ee-b78b-e63f2815966d
// https://chatgpt.com/share/6ab681af-5590-83ee-bf42-26e4d75b420b

// for...of → values ke liye loop
// forEach  → array ki har value par kaam
// map      → har value ko transform karke NEW array

// forEach
// forEach() bhi array ke har element par loop chalata hai, bilkul for...of ki tarah, lekin iska syntax different hai.

const name = ["abc", "efg", "hij", "klm", "opq"];

name.forEach((value, index) => console.log(index + " : " + value));

// Map
// 1. ye shuru se end tak chalta hy
// 1.b isma break and continue
// 2.

const fruits = ["apple", "banana", "mango", "kiwi", "pineapple", "avacado"];

fruits.map(function (a) {
  console.log(a);
});

const result1 = fruits.map(getLength); // is trah bhi likhskty hai call ishr krwaky function ko

function getLength(element) {
  return element.length;
}

console.log(result1);

const vegatbles = ["tomato", "onion", "cucumber", "palak", "potato"];

const result2 = vegatbles.map(getLength);

console.log(result2);

const result3 = fruits.map((value) => value.length); // (Arrow function) function ko short likhny ka tareeqa

console.log(result3);

function square1(number) {
  return number * number;
}

console.log(square1(2));

// Arrow Function
// functions likhne ka short syntax hain
// arrow function hoist ko supprt nhi krty

const square2 = (number) => {
  return number * number;
};

console.log(square2(4));

const square3 = (number) => number * number;

console.log(square3(6));

const square4 = function (number) {
  return number * number;
};

console.log(square4(3));

let ary = [
  { fname: "Hashir", lname: "DZ" },
  { fname: "Shariq", lname: "DZ" },
  { fname: "Asif", lname: "DZ" },
];

let test = (x) => x.fname + " " + x.lname;

let a = ary.map(test);

console.log(a);

const add = (a, b) => a + b;

console.log(add(4, 2));

// Using Conditions in Arrow Function
// If you want to use conditions, you must use curly braces and return.

const add2 = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Enter a valid number";
  }
};

console.log(add2(6, "xcv"));

// Returning Object from Arrow Function
// You must wrap the object in parentheses.

const user = () => ({ name: "Hashir Dilmurad Zai" });

console.log(user());

// Arguments Keyword
// Works in normal functions
// Does NOT work in arrow functions

// const getAll = () => {
//   console.log(arguments); // Error
// };

// getAll("Apple", "Grapes", "Banana");

// Normal function:Computer Science

function getAll2() {
  console.log(arguments);
}

getAll2("Apple", "Grapes", "Banana");

//  filter()
// filter() bhi array method hai. Iska kaam hai:
// Array mein se woh values nikalna jo tumhari condition ko true karti hain, aur ek NEW array banana.
// filter() mein return important hai

const result4 = fruits.filter((fruit) => fruit[0] === "a");

console.log(result4);

const result5 = fruits.filter((fruit) => {
  let pehlaCharacter = fruit[0];

  return fruit[0] === "a";
});

console.log(result5);

const ages = [10, 19, 18, 16, 20];

let result6 = ages.filter((age) => age >= 18);

console.log(result6);

// Array of Objects

// find()

const students = [
  { name: "Ali", marks: 80 },
  { name: "Ahmed", marks: 40 },
  { name: "Sara", marks: 75 },
  { name: "Usman", marks: 30 },
  { name: "Shehzad", marks: 99 },
  { name: "Asim", marks: 10 },
];

const result7 = students.find((student) => student.marks < 50);

console.log(result7);
