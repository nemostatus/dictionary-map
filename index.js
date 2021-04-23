// const emptyMap = new Map()
const map = new Map([
  ['data', 'datatype']
])
// console.log(...map)
map.set(true,'boolean')
map.set(false,'boolean')
// console.log(...map)
map.set(7,"number") //the second param isnt strict and can be named whatever
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
//arr -for of, also for each but map tables use the value and key rather than just the element
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

const groceries =new Map([["product", "price"]])//creates new table with an array wrapping around key value pair names --> ["movie name","genre"]
groceries.set("chocolate", 2.50)
console.log(...groceries)
groceries.set("graham crackers", 2.00)
groceries.set("marshmallows", 1.75) //set or write a key value pair array in table
console.log(...groceries)
console.log(groceries.has("milk")) //has method insert key name and if exists in table true else false
console.log(groceries.get("graham crackers")) //returns value of key

function tableGui(table){
    console.log("")
    console.log(`Table has ${table.size} entries.`)
    console.log( `---------------------`)
   
table.forEach((value, key)=>{
   
    console.log( `${key} | ${value}`)
    console.log( `---------------------`)
})} //why use interpolation and template literals without them NaN is returned

tableGui(groceries)
tableGui(map)

const chessPieces = new Map([["piece","point"]])
chessPieces.set("pawn", 1)
chessPieces.set("knight", 3)
chessPieces.set("bishop", 3)
chessPieces.set("rook", 5)
chessPieces.set("queen", 9)
chessPieces.set("king", 0)
tableGui(chessPieces)
