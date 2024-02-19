// for of

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`each char of greetings: ${greet}`);
}

const map = new Map()
map.set('IN' , 'INDIA')
map.set('USA', 'UNITED STATE OF AMERICA')
map.set('Fr', 'FRANCE')
map.set('IN' , 'INDIA')

for (const [key, value] of map) {
    console.log(key,':-', value);
}