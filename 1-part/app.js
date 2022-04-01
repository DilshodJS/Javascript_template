//Data types
/*
let n = 123; //number
let name='Hello world' //string
let isMarried=false //boolean
let x; //undefined
*/



// Basic operators, maths

/*

let x = 1;
x = -x
console.log(x);


let z = 1, y = 3;
console.log(y - z); // 2, binary minus subtracts values
console.log(5 % 2);  //1
console.log(8 % 3);  //2 
console.log(2 ** 2); // 2² = 4;
console.log(2 ** 4); // 2⁴ = 16
console.log(4 ** (1 / 2)); // 2
let s = "my" + "string";
console.log(s); //mystring
console.log('1' + 1); //1
console.log('3' * 3);  //9
console.log(2 + 2 + '1');  //41
console.log(typeof '1' + 2 + 2); //122



let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log(n);


let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3
let counter1 = 2;
counter1--;        // works the same as counter = counter - 1, but is shorter
console.log(counter1); // 1




let counter2 = 0;
counter++;
++counter;
console.log(counter); // 2, the lines above did the same


let counter3 = 0;
console.log(++counter3); // 1



console.log(2>1); //true
console.log(2==1); //false
console.log(2!=1); //true

console.log('2'>1); //true
console.log('0'==0); //true
console.log('0'===0); //false
*/





// Conditional branching: if


let num = 3
if (num > 0) {
  console.log(`${num} musbat son`)
}


let isRaining = true
if (isRaining) {
  console.log('Yomg\'ir paltongizni olishni unutmang.')
}



let num1 = 3
if (num1 > 0) {
  console.log(`${num1} musbat son`)
} else {
  console.log(`${num1} manfiy son`)
}
//  3 musbat son

num1 = -3
if (num1 > 0) {
  console.log(`${num1} musbat son`)
} else {
  console.log(`${num1} manfiy son`)
}
//  -3 musbat son


let isRaining1 = true
if (isRaining1) {
  console.log('Sizga yomg\'ir palto kerak.')
} else {
  console.log('Yomg\'ir paltosi kerak emas.')
}
// Sizga yomg'ir palto kerak.

isRaining = false
if (isRaining) {
  console.log('Sizga yomg\'ir palto kerak.')
} else {
  console.log('Yomg\'ir paltosi kerak emas.')
}
// Yomg\'ir paltosi kerak emas.





// Logical operators

/*

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}



console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false


let hour1 = 12;
let minute = 30;

if (hour1 == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}




// Loops: while and for


for(let i = 0; i <= 5; i++){
    console.log(i)
  }
  // 0 1 2 3 4 5



  for(let i = 5; i >= 0; i--){
    console.log(i)
  }
  
  // 5 4 3 2 1 0



  let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// 0 1 2 3 4 5


let a = 0
do {
  console.log(a)
  i++
} while (i <= 5)

// 0 1 2 3 4 5

*/



// Functions
function showMessage() {
    console.log( 'Hello everyone!' );
  }
showMessage();


function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() // 4


  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers() 

  


  function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())


function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // funktsiyasi bitta argument bilan chaqirilishi kerak



function square(number) {
    return number * number
  }
  
  console.log(square(10))

  const speak=function(){
      console.log("Hello world");
  }
  speak()