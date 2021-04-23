const emptyMap = new Map()
const map = new Map([
  ['key', 'value']
])
console.log(...map)
map.set(true,'boolean')
map.set(false,'boolean')
console.log(...map)
map.set(7,"blah") //the second param isnt strict and can be named whatever
console.log(...map)
map.set(7,"number")//seems to overwrite the other value ??
console.log(...map)
console.log(map.get(7))
console.log(map.has(80))//is false because it doesnt exist in the table


//array of arrays
//[[ 'key', 'value' ], [ true, 'boolean' ], [ false, 'boolean' ]]