// Ojects in JS
// what is an obj
// name value pair or key value pair

const student= {firstname:"varshith",address:"Martur",phone:"999999999"};
console.log(typeof student);

console.log(student["firstname"]);

// another way of declaring an object
const emp ={};
emp.name="alpha";
emp.regNo = "70098";
emp.address="Amaravati";
console.log(emp);

// another way to declaring an object;
const stud = new Object();
stud.regNo = "21bce";
stud.name = 'Nathani';
stud.address='AP';
console.log(stud);


// accessing the data inside the object
for(let x in student){
    console.log(student[x]);
}

// we can add the data to object later also
student.cgpa = '8.43';
console.log(student);

// we can delete the specific key value pair from the object
delete student.phone;
console.log(student);


console.log(delete student.cgpa);  // we will get true as ans
console.log(student)


// nested objects

const students={
    firstname:"varshith",
    phone:"9090909090",
    address:{
        permanent:"Martur",
        temporary:"Amaravati",
    }
}

// access the elements within a nested object
console.log(students.address.permanent);
console.log(students.address.temporary);

console.log(students["address"]["permanent"]);
console.log(students.address['permanent']);

for(let x in students.address){
    console.log(students.address[x]);
}

//nested objects and array of nested objects
const faculty={
    firstname:"alpha",
    phone:"909090999",
    degree:[
        {Dname:"BTech", university:"MoneyTaker"},
        {Dname:"P.hd", university:"MoneyTaker"},
        {Dname:"MTech",university:"CompleteMoneyTaker"}
    ]
}
console.log(faculty.degree[0]);// printing complete obj
console.log(faculty.degree[0].Dname);
console.log(faculty.degree[1].Dname);
// print the degree names from faculty.degrees
// using a for loop
for(let x in faculty.degree){
    console.log(faculty.degree[x].Dname);
    console.log(faculty.degree[x].university);
}

// print the degree name that faculty has received a degree from moneytaker
for(let x in faculty.degree){
    if(faculty.degree[x].university == 'MoneyTaker'){
        console.log(faculty.degree[x].Dname);
    }
}

// if the faculty is from MoneyTaker then print the no.of degrees he had from MoneyTaker
count=0;
flag = false;
for(let x in faculty.degree){
    if(faculty.degree[x].university=='MoneyTaker'){
        count++;
        flag=true;

    }
}
console.log(flag+":: Total No of degrees: "+count);



// Object method

const testing={
    firstname:"Dummy",
    phone:"9898998989",
    test:function(){console.log("It is a Object Method");}
}

testing.test();

testing.test2 = function(){console.log("This is another method.")}
testing.test2();