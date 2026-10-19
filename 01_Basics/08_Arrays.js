const myArr = [1,"vihaan", 2, true]

console.log(myArr[0]);
console.log(myArr[1]);

const myHeros = [" f vchjSk","hjdsbvfjhsb","hdvfhjsbv"]
// Array methods -->
//1.Push
myHeros.push("Vihaan")
//console.log(myHeros[3])

//2. Push 
console.log(myArr.pop())
console.log(myArr)

console.log(myArr.includes(2));
console.log(myArr.indexOf("vihaan"));

// concat and push

const marvel_heros = ["ironman", " thor ", "shaktiman"]
const dc_heros = ["batman", "superman", "flash"]

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros); 

//spread operator --> [...array_name, ...array_2, ...array_3 , ...]

const all_heros2 = [...marvel_heros, ...dc_heros];
console.log(all_heros2);




