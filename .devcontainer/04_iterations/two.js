const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ['cpp', 'py', 'java']
for (const key in programming) {
    console.log(programming[key]);  // for in loop me key print hota hai 
                                     // for of me value print hota haii
}