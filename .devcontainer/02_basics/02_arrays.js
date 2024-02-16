const marvel = ["iron", "spider", "caption"]
const dc = ["super", "bat", "flash"]

const all_heros = marvel.concat(dc)
console.log(all_heros);

const allHeros = [...marvel, ...dc] //spread operator
console.log(allHeros);

const array = [1,2,3,4,[5,6],7,[8,[9]]]
const usableArray = array.flat(Infinity) // .flat makes all the arrays in depth in a single array and value in paranthesis is the depth till you want to use this method
console.log(usableArray);

console.log(Array.isArray("vipul"));
console.log(Array.from("vipul"));
console.log(Array.from({name:"vipul"})); // if you want to make array from object you have to define it whetehr to make array from keys or values otherwise it gives empty array

let s1 = 10
let s2 = 20
let s3 = 30

console.log(Array.of(s1,s2,s3));