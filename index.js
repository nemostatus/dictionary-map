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

// const groceries =new Map([["product", "price"]])//creates new table with an array wrapping around key value pair names --> ["movie name","genre"]
// groceries.set("chocolate", 2.50)
// console.log(...groceries)
// groceries.set("graham crackers", 2.00)
// groceries.set("marshmallows", 1.75) //set or write a key value pair array in table
// console.log(...groceries)
// console.log(groceries.has("milk")) //has method insert key name and if exists in table true else false
// console.log(groceries.get("graham crackers")) //returns value of key

function tableGui(table){
    console.log("")
    console.log(`Table has ${table.size-1} entries.`)
    console.log( `---------------------`)
   
table.forEach((value, key)=>{
   
    console.log( `${key} | ${value}`)
    console.log( `---------------------`)
})} //why use interpolation and template literals without them NaN is returned

// tableGui(groceries)
// tableGui(map)

// const chessPieces = new Map([["piece","point"]])
// chessPieces.set("pawn", 1)
// chessPieces.set("knight", 3)
// chessPieces.set("bishop", 3)
// chessPieces.set("rook", 5)
// chessPieces.set("queen", 9)
// chessPieces.set("king", 0)
// tableGui(chessPieces)

// console.log(...chessPieces.keys())

// const tmnt = new Map([["turtleName","personality"],["rafael","aggressive"],["leonardo","brave"],["donatello","tactical"],["michaelAngelo","chaotic"]])
// tableGui(tmnt)

function addFieldToForm(){
    console.log("rhj")
    //loop through list once submitted and set new instance every other el
    let keytype = document.getElementById("keysDatatype").value
    let valtype = document.getElementById("valueDatatype").value
    let orderedList = document.querySelector("#dynamic > ol")
    let newli = document.createElement('li')
    let FN = document.createElement("input");
    let VN = document.createElement("input");
    FN.setAttribute("type", keytype);
    FN.setAttribute("name", "key");
    FN.setAttribute("placeholder", "Key");
    VN.setAttribute("type", valtype);
    VN.setAttribute("name", "value");
    VN.setAttribute("placeholder", "value");
    newli.appendChild(FN)
    newli.appendChild(VN)
    orderedList.appendChild(newli)
    

    //.appendChild(`
//    <li> <label>Key</label><input type="${keytype}"> <label>Value</label><input type="${valtype}">  </li> 
//     `)
}

function createTable(event){
    event.preventDefault()
    let table = document.querySelector("#dynamic > ol")
    console.log(table.children[0])
    table.innerHTML=""
    // document.querySelector("#dynamic > ol").innerHTML =""
}

//once all fields are filled out i need a way to uniquely set id(maybe ol li # somehow ) long enough to create the table, reset the form and display the table with the key and value
//user adds data type)dropdown list) and value of key and it passes it to this fn which in turn