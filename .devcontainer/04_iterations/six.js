const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc+ curval
// },0)

const myTotal = myNum.reduce((acc,curval)=> (acc+curval),0)

console.log(myTotal);

const shoppingCart = [
    {
        courseName: 'py',
        price: 999

    },
    {
        courseName: 'js',
        price: 2999

    },
    {
        courseName: 'DSA',
        price: 1999

    },
    {
        courseName: 'Data Science',
        price: 5999

    },
]

const totalAmount = shoppingCart.reduce((acc,item)=>(acc+item.price),0)

console.log(totalAmount);