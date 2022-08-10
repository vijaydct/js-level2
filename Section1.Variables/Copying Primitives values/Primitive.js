let a=10
let b=20

console.log('a', a)
console.log('b', b)

// copy value of a into c

let c=a
console.log('a', a) //10
console.log('c', c) //10

a=125
console.log('a', a) //125
console.log('c', c) //10

c=500
console.log('a', a) //125
console.log('c', c) //500

// NOTE : primitive values are independent variables which are not effect on other variables if one one variable value changes