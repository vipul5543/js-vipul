// objects 2 tarah se bante hai
// 1. constructor // isme singleton hota hai


// 2. object literal

const mySym = Symbol("vip")

const jsUser = {
    name: "vipul",
    "full name": "vipul singh", // this cannot be accessed using dot operator so always try to use [] for accessing
    [mySym]: "vip", // sysntax of symbol
    age: 23,
    location: "Noida",
    email: "vipul2google.com",
    isLoggedIn: false,
    lastLoginDays: ["tuesday", "sunday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vipul@vhatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "bsdhfgsss"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello vipul");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());