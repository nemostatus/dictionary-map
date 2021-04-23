const emptyMap = new Map()
const map = new Map([
  ['key', 'value']
])
console.log(...map)
map.set(true,'boolean')
map.set(false,'boolean')
console.log(...map)
//array of arrays
//[[ 'key', 'value' ], [ true, 'boolean' ], [ false, 'boolean' ]]