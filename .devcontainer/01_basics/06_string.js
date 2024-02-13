const name = "vipul"
const age = 22

// console.log(name + age + " value"); // should not use this concatination because it is outdated method

console.log(`Hello my name is ${name} and my age is ${age} `); // string interpolation

const gameName = new String('vipul-vs-com')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = "    vipul   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vipul.com/vipul%20singh"
console.log(url.replace('%20' , '_'));
console.log(url.includes('rahul'));

console.log(gameName.split('-'));