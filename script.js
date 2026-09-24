// https://chatgpt.com/share/6ab40436-21b0-83ee-b78b-e63f2815966d

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

const fruits = ["apple", "banana", "mango", "kiwi", "pineapple"];

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
