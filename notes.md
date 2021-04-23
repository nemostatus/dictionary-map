notes from https://blog.webdevsimplified.com/2020-12/javascript-maps/

A Map in JavaScript is a class that allows you to store a value at a specific key,
With objects you can pretty much only use strings as your keys, but a Map can have any value as a key

const obj = {
  a: 'b',
  1: 2
}

console.log(Object.keys(obj))
// ["a", "1"]

const map = new Map([
  ['a', 'b'],
  [1, 2],
  [{ key: 'value' }, 'obj']
])
console.log(Object.keys(map))
// ["a", 1, { key: "value" }]

In order to create a map you need to pass it an array of arrays instead of an object. Also, the console.log for the map technically won’t print out this exact result since it returns an iterator instead of an array, but you can convert it to an array to get this result [...map.keys()].