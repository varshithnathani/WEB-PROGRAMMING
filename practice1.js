// Javascript
/* This is a block comand */
// invented in 1995. we use Es6-2015

// variable Declaration
/* 
1. var
2. let &
3. const
 */


// When to use var - it is a part of older version
// so we won't use var
// js is case sensitive

var n = 23; // number
var g = 10.5; // float value
var name = "varshith";

b = 200; // auto declaration

// it  does not going to have any local scope
{
    var k = 26;
}
// normally we won't be able to access the data inside the local scope but in case of var we can access the local value outside the paranthesis
console.log(k);

// we can reinatilize the value with in the same scope
var k = 30;
console.log(k);


{
    var k = 29;
}
console.log("third change "+k);

// This is only for older browser. 


// let

let a;
a = 23;
console.log(a);

// let has got the local scope
// that means it cannot be accessed outside the paranthesis

{
    let a = 24;
    // here i will get a = 24
    console.log(a);

    // i won't be access the same variable name inside the local scope
    // let a = 25; // it won't possible
}
// here we will get 23 only. 
console.log(a);


// const

const m = 23; // it has mandatory to instalize while declaring 
/* we won't be able to access 
const m;
m = 23;  This is not possible
 */

// const is also have local scope. but we won't be able to reassign the value
/* 
const m = 23;
m = 25; // it is not possible
 */

// we can have the local scope 
{
    const m = 29
    console.log(m);
}


// direct assignment and later we can declare the data
// but it is only possible in var
x = 10;
console.log(x);
var x;




