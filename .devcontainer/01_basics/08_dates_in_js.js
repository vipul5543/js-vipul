let myDate = new Date()
console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);
let myCreatedDte = new Date(2023, 0, 23, 14, 5 )
console.log(myCreatedDte.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreatedDte.getTime());
