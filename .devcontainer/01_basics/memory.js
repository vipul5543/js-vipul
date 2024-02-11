// Stack(primitive)  heap(non-primitive)

let myName = "vipul"
let anotherName = myName // primitive me value ka ek copy hi assign hua haii...aur original value me koi change nhi aya hai

anotherName = "Shivendra" // isiliye anothername me change krne pe myNmae me change nhi aya

console.log(myName);  
console.log(anotherName);

let userOne = {
    email: "vipul@google.com",
    upi: "user@ybl"
}

let userTwo = userOne // yha pe userTwo bhi same value pe refere kr rha...jispe userOne kr rhaa..yha copy nhi bnti

userTwo.email = "anu@google.com" // isiliye kisi ek ki value change krne pe dono me change ayega....qki iski value heap me store hoti hai..aur variable stack me hi..aur vahi se refer kr rhe hote

console.log(userOne.email);
console.log(userTwo.email);