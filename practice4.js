const k = [1,2,3,4,5];

for(let i =0; i<k.length; i++){
    console.log(k[i]);
}

// for in loop
for(let i in k){
    console.log(k[i]);
}

// for of
for(let i of k){
    console.log(i);
}

// while loop
let i=0;
while(i<5){
    console.log(k[i]);
    i++;
}

// do - while
do{
    console.log(k[i]);
    i++;
}while(i<5);


// NaN in javascript --> Not a number
// its a number thats not a legal number

let x = NaN;
let y = Number.NaN;

let age = 150;
if(age > 120 || age<0){
    age= NaN;
    console.log(age);
}

let val = 'v';
if(isNaN(val)){
    console.log("It is not a number");
}else{
    console.log("It is a number");
}

// If the converstion fails for a number then we get NaN
// when we get NaN as output;
// failed number conversion.
let val2 = parseInt('s');
console.log(val2);
// math operation
let val3 = Math.sqrt(-1);
console.log(val3);
// working with infinity
let val4 = Infinity/Infinity;
console.log(val4);
// computation or expression with NaN then we will get NaN
let val5 = 7**NaN;
console.log(val5);
// NaN in if condition it always goes to else condition(It will make the condition false)
let val6 = 10;
if(val6 > NaN){
    console.log("Its true");
}else{
    console.log("Its false")
}

// NaN == NaN ==> false
if(NaN == NaN){
    console.log("its a true");
}else{
    console.log("its a false");
}

// NaN != NaN ==> true
if(NaN != NaN){
    console.log("its true");
}else{
    console.log("its false");
}