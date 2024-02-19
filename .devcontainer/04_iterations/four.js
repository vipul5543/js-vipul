const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((nums)=>{
       return nums>4
})
console.log(newNums);

const books = [
    {title: 'book one', genre: 'fiction', publish:1982, edition: 2010 },
    {title: 'book two', genre: 'non-fiction', publish:1995, edition: 2014 },
    {title: 'book three', genre: 'history', publish:2005, edition: 2015 },
    {title: 'book four', genre: 'science', publish:2001, edition: 20007 },
    {title: 'book five', genre: 'history', publish:1992, edition: 2000 },
    {title: 'book six', genre: 'fiction', publish:1989, edition: 2019 },
    {title: 'book seven', genre: 'non-fiction', publish:2002, edition: 2006 },
];

let userbook = books.filter((bk)=>{
   return bk.genre ==='history' && bk.publish > 2000
})

console.log(userbook);