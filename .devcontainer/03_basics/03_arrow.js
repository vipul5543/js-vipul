const user = {
    username: "vipul",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "vipul"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "vipul"
//     console.log(this.username);
// }

// chai()

const chai = () => {   // arraow function
    let username = "vipul"
    console.log(this.username);
}

// chai()

// const addTwo = (nums1 ,nums2 ) => {
//   return nums1 + nums2
// }

// const addTwo = (nums1, nums2) => (nums1 + nums2)  // implicite return - mtlb ki jb () use krte hai to return nhi likhna padta but jb {} use krte to return likhna padta

const addTwo = (nums1, nums2) => ({username: "vipul"})
console.log(addTwo(2,5));