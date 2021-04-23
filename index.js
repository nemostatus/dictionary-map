// const emptyMap = new Map()
// const map = new Map([
//   ['key', 'value']
// ])
// console.log(...map)
// map.set(true,'boolean')
// map.set(false,'boolean')
// console.log(...map)
// map.set(7,"blah") //the second param isnt strict and can be named whatever
// console.log(...map)
// map.set(7,"number")//seems to overwrite the other value ??
// console.log(...map)
// console.log(map.get(7))
// console.log(map.has(80))//is false because it doesnt exist in the table
// map.delete(7)
// console.log(...map)
// map.set(1, 'number')
// map.set('a', 'b')

//iteration
//obj - for in
//arr -for of
//map - for each

// map.forEach((value, key) => {
//   console.log(`${key} => ${value}`)
// })

// console.log(map.size, map.entries())
//first param is the value then key
//displayed to console 
// key => value
// true => boolean
// false => boolean
// 1 => number
// a => b

const groceries =new Map([["product", "price"]])
groceries.set("chocolate", 2.50)
console.log(...groceries)
groceries.set("graham crackers", 2.00)
groceries.set("marshmallows", 1.75)
console.log(...groceries)
