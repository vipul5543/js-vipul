let a = 30

if(true){
    let a = 300
    const b = 400
   // console.log("INNER: ", a);
}

// console.log(a);

function one(){
    const username = "vipul"

    function two(){
        const website = "youtube" 
        console.log(username);
    }

    // console.log(website);

     // two()
}

one() 

if(true){
    const username = "vipul"

    if(username === "vipul"){
        const website = " youtube"
       //  console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

addOne(5)// yha function chalega qi hoisting ho rhii  // hoisting - function call kr skte initialize se pehle
function addOne(num){
   return num+1
}

addTwo(5) // yha function nhi chalega 
const  addTwo = function (num){
    return num+2
}

