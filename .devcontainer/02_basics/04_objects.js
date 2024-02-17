// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.age =  23
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "vipul@5543",
    fullname: {
          userfullname: {
            firstname: "Vipul",
            lastname: "singh"
          }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// obj3 = {obj1, obj2}

// obj3 = Object.assign({}, obj1, obj2)

obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
  courseName: "js in hindi",
  price:"999",
  courseInstructor:"vipul"
}

const{courseInstructor:instructor} = course  // de-structuring
console.log(instructor)
