// Arthemetic operations
console.log(5*3);
console.log(5**3); // Exponentiation

// Assignment operator
// =
// a+= b ==> a=a+b
let k = 20;
let g=10;
g+=24; // g = g+24;
console.log(g);


// if - else syntax
let a = 4
let b = 10;
if(a>b){
    console.log(a);
}else{
    console.log(b);
}

// comparsion
// == (equals to)
// === (strictly equals)

// difference b/w == & ===
let num1 = 4;
let num2 = 4;
if(num1 == num2){
    console.log("This is fine");
}else{
    console.log("This is not fine");
}

let num12 = 4;
let num21 = '4';
if(num12 == num21){ // in this case also we will get the opt fine
    // bcz the value inside the num12 and num21 are same. so it won't check the datatype
    // but when we change to === then opt will become the "This is not fine"
    console.log("This is fine");
}else{
    console.log("This is not fine");
}


let num31 = 4;
let num13 = '4';

if(num31 === num13){
    console.log("This is fine");
}else{
    console.log("This is not fine");
}


// difference b/w (not equals) != and (strictly not equals) !==

let numb1 = 4;
let numb2 = '4';
if(numb1 != numb2){
    console.log("this is fine");
}else{
    console.log("This is not fine"); // in this case it will execute
    // bcz both the value are same. it won't check the datatype
}

// !== (Strictly not equals) in this case it will check the both datatypes and the data also

if(numb1 !== numb2){
    console.log("This is fine"); // this conditon will be executed
}else{
    console.log("This is not fine");
}


// ternary Operator
// a = 4, b = 10
let ans = (a>b)?10:12;
// a is less than b so it will give output as 12.
console.log(ans);

// logical Operator

let a1 = 4;
let a2 = 2;
let a3 = 1;
if(a1>a2 && a1>a3){
    console.log("a1 is greater");
}else{
    console.log("a1 is not greater than some number");
}

a3 = 10;
if(a1>a2 || a1>a3){
    console.log("a1 is greater than atleast 1 number");
}else{
    console.log("a1 is not");
}

// a1 = 4, a2=2
if (!a1>a2){ // if a1 is not greater than a2
    // 4 is not greater than 2 (! is used to reverse the condition)
    // so we will get ans: a1 is not greater 
    console.log("a1 is greater");
}else{
    console.log("a1 is not greater")
}


// switch case in java
let x = 4;
switch(x){
    case 1:
        console.log("One");
        break;
    case 4:
        console.log("fourth");
        break;
    default:
        console.log("nothing matched");
}


let cy = "varshtih";
switch(x){
    case "Nathani":
        console.log("One");
        break;
    case "varshith":
        console.log("forth");
        break;
    default:
        console.log("nothing matched");
}


// nested switch case
let nhi =2;
switch(nhi){
    case 2:
        console.log("It is true");
        let k = 3;
        switch(k){
            case 2:
                console.log("2 from nested");
                break;
            case 3:
                console.log("3 from nested switch");
                break;
            default:
                console.log("End of nested switch");
            
        }
        break;
    case 4:
        console.log("fourth case");
        break;
    default:
        console.log("Learned nested Switch case");
        break;
}
