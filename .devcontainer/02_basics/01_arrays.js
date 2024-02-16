const myArray = [1,2,3,4,5]
// console.log(myArray[0]);

const myArray2 = new Array(1,2,3,4)
// myArray.push(6)
// myArray.pop()
// myArray.unshift(9) // age se element add kr dega
// myArray.shift() // age se element remove krdega
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArr = myArray.join();
// console.log(newArr);
// console.log(myArray);

// slice  and splice

// console.log("A" , myArray);
const myn1 = myArray.slice(1,3) // 1,3 tk ka element ka alag array bna dega excluding 3rd place wala
// console.log(myn1);

// console.log("B" , myArray);
const myn2 = myArray.splice(1,3) // existing array me se 1,3 tk ka element nikal ke nya array bna dega including 3 aur existing array mese remove kr dega 
// console.log("C",myArray);
// console.log(myn2);


