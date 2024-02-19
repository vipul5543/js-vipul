const coding = ['py', 'java', 'cpp']

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach( (val)=>{
//    console.log(val);
// })

// function printMe(val){
//     console.log(val);
// }

// coding.forEach(printMe)

// coding.forEach((val, index, arr)=>{
//    console.log(val, index, arr);
// })

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'c++',
        languageFileName: 'cpp'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})
