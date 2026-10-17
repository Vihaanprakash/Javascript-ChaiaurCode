const score = new Number(100);
console.log(Number);

 
//++++++++++++++++++++   Maths-----

console.log(Math.ceil(2.3)) // upper values of the decimal numbers 
console.log(Math.floor(2.7)) /// lower values of the decimal points 

console.log(Math.random()) // For generating random numbers between 0 and 1.  
console.log(Math.random()*10+1) ; // +1 for removing zeronumbers like 0.0090 , 0.044432423

console.log(Math.floor(Math.random()*10))

// for example we have a range between max and min--++++++

const min = 10
const max = 20


console.log(Math.floor(Math.random()*(max - min +1 ))+min)