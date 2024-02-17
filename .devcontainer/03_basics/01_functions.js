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

