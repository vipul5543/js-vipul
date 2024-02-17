function myName(){
    console.log("v");
    console.log("i");
    console.log("p");
    console.log("u");
    console.log("l");
}

myName()

// function addTwoNumbers(num1, num2){
//     console.log(nums1+nums2);        // is function me kuch return nhi kr rhe
// }

function addTwoNumbers(num1, num2){
    let ans = num1+ num2
    return ans
}

// addTwoNumbers(3,4)
const result = addTwoNumbers(3,5)
console.log(result);

function loginUserMessage(username = "sam"){ 
    if(/*username === undefined*/ !username){
        console.log("please enter a username");
        return
    }
    return `${username} you are logged in`
}

console.log(loginUserMessage("vipul"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,400)) // val1 = 100 , val2 = 200 and remaining wil go in num1 and more than one is going in num1 because of ...(rest operator)


const user ={
    name: "vipul",
    price: 6000
}

function handleObject(anyUser){
    console.log(`username is ${anyUser.name} and price is ${anyUser.price}`);
}

// handleObject(user)

handleObject({
    name: "sam",
    price: 1
})

const myArray = [1,2,3,4,5,6]

function handleArray(getArray){
  return getArray[1]
}

console.log(handleArray(myArray))
