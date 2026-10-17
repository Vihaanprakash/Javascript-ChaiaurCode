// Primitive DataTypes -->

// 7 Types --> 
/*   a) String 
     b)Number
     c)Boolean
     d)Null
     e)undefined variable declared memory allocated but value is not given 
     f)Symbol for defining unique elements used during advanced Js project
     g)BigInt for scientific and big values 

     2 Non-primitive reference Types -->

     a)Array
     b)Objets 
     c) Functions 

     egs-->

     */
const isLoggedIn  = false// Boolean type 

const number1 = 100
const number2 = 100.3

const outsideTemp = null
// array-->

const heros = ["shaktiman", "ironman", "jehfuaowehjf"]
// object -->

let myObj ={
    name: "Vihaan",
    age: 22 
}

const myFunction = function(){
    console.log("hello world")
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// COPY IS MADE FOR PRIMITIVE DATA TYPES WHICH USES STACK MEMORY SPACE FOR VARIABLES 
let myYoutubeName = "Vihaan"

let anotherName = myYoutubeName
console.log(anotherName)


// No copy while passing the variables so original values get changed --> (important)

let user={
    name: "Vihaan",
    email:"vihaanprakash1@gmail.com"
}

let user2 = user

user2.email = "vihaanprakash"
console.log(user)

const name = "Vihaan"
const repoCount = 50

console.log(`my name is ${name} and my repocount is
    ${repoCount}`);

    //String methods +++++++++
console.log(name.toUpperCase());

console.log(name.length);



