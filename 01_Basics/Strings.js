//Strings are of object types and values are stored key value pair always 
// declaration method --

let name = new String('vihaanc')
console.log(name.length)

console.log(name.toUpperCase());
console.log(name[0])
console.log(name.__proto__); // outputs as an empty object 

// original values never get changed while performing these methods as Strings are  primitive data types
// so only copies are passed to these methods and not the original string 

const newString = new String('  hahahaha  ')

console.log(newString.trim())
console.log(newString)

console.log(newString.substring(0,6))

