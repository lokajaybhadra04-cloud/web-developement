/* object literals:

 javascript object literals used to store keyed collections & complex entities.




 objects:
   are a collection of "properties" .





 property:==> (key,value)pair




 example 1 of object:->

 let student :->  name(key) : "lokajay"(value) -->(key,value) called property 1
                age       :  23              -->(key,value) called property 2


student (object) has 2 property . so object is collection of property



exmple 2 og object:


const person = new Object();
person.name = "Bob";
person.age = 30;
person.greet = function () {
  console.log("Hi there!");
};

person.greet(); // Output: Hi there!


This also creates a JavaScript object, but not using an object literal.

It uses the built-in Object constructor.






















so,object liertals used to store keyed's collection and complex entites

example 1 of object literals:

let student={
           name:"lokajay",
           age: 23,
           marks: 94.4,
           city : "delhi
           };



student --> object name


{
           name:"lokajay",
           age: 23,
           marks: 94.4,
           city : "delhi                     ------>object value
           };




example 2 object literals





 const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log("Hello!");
  }
};

person.greet(); // Output: Hello!


This is called an object literal because you're literally writing out the object structure with curly braces {}.

It's also an object — specifically, an object created using a literal.





 there is difference "object"    and   "object literals"

Feature	              Object Literal                         	Object (General)
Syntax	              { key: value }	                        Can be created using new Object(), classes, etc.
Simplicity	          Very concise and readable	                Slightly more verbose
Flexibility	          Good for static/simple objects	        Better for dynamic/complex structures
Common Usage	      Most common way to define objects	        Less commonly used than literals



*/






//object literals



// const students={

//     name:"lokajay",
//     age :23,
//    marks:94.4
// };
// console.log(students);

//here in object literals it has no index so key,value pair can come any order





/* !important:

-->In array : if array is decared as "const" keyword  

const arr=["a","b"];

arrayname is address/refrenece of memory
by making "const" it array address/refrenece of memory has become constant and cannot be changed




but array value can be changed








-->In object litreals:

simlarly 
if object literals decalre with "const" keyword

const students={

    name:"lokajay",
    age :23,
   marks:94.4
};



students -->object literals name with have memory address/reference stores will become constant and not be changed

but key, value in the object lietrals can changed .and added new value also.
*/


//So, object and object literals are gernally decalred with  const 
































//object litrals:



// const students={

//     name:"lokajay",
//     age :23,
//    marks:94.4
// };
// console.log(students);





// let delhi={


//     latitude:"28.7041.N",
//     longitude:"77.1025.E"
// };




// const person = {
//     name: "Alice",
//     age: 25,
//     phone : ["9100232221","8982172892"],//array store in literals
//     greet: function () {   //liretals we store function and also array
//       console.log("Hello!");
//     }



//   };
  
//   person.greet(); // Output: Hello!
//   console.log(person.phone);

























//creating post with object literals:


// const post={

//         username:"lokajay bhadra",
//         content :"this is my post",
//         likes   :150,
//         reposts :5,
//          tags   :["@jayta","@jayanta","@sabita"]  ///multiple accounts is tags in array


// };

// console.log(post);
























//getting values  form objects literals:


// object["key"] ---get the-->value
//object.key  ---> value (mostly used)
//both way works

// console.log(post["username"]);

// console.log(post.username); // this mostly used... both ways works



// console.log(post.tags[0]);  //   @jayta

// console.log(post.tags); 







//object["key"] --> value  used when-->
//example:

// let property="reposts";


// console.log(post[property]);


// same canmot be done for " . " opertor 

//console.log(post.property); // it will be undefined























//get values:  

// javascrpit  automtically coverts objects keys to strngs.

// Even if we made the number as a key ,the number will be converted to string.


//example:
 

// const obj={

//    1:"a",
//    2:"b",
//    true: "c",
//    null: "d",
//    nudefined:"e"

// };

// // javasciprt read all the  key's as strings

// console.log(obj);
// console.log(obj[1]);
// console.log(obj[true]);
// // javascrpit change the  keys:-> 1, true  as strings

// console.log(obj.true);// no error

// //but console.log(obj.1);   //error   because in obj.1     1 is without [] and . opertor  so  
//                            // 1  is not covert directly into string here .




























//add / update value :


// const student={name:"lokajay",
//                age: 23,
//                marks: 94.4,
//                city:"delhi"
// };

// console.log(student);

// student.city="Mumbai"; //update the city propetry

// console.log(student);

// student.gender="Male";  //added the new property gender

// console.log(student);

// student.marks="A";  //update the marks to 94.4 to "A" string

// console.log(student);



// student.marks=[89,98,89,];  //update the marks the as array of marks  of three subject
// console.log(student.marks);
// console.log(student);



// //delete the  object property(key ,value) pair :



// delete student.age;

// console.log(student);


// delete student; // it wil not work

// console.log(student); // object will exist

/*


 -->
 Delete the Whole Object?
You cannot use delete to remove a variable declared with let, const, or var:

let user = { 
             name: "Bob"
           };

delete user; //  Does nothing

console.log(user); // Still exists




-->
Now if the object is a property of another object, you can delete it:

//like nested object
const app = {
  name : "game",
   
  config: {
            theme: "dark"
           }

          };
           

console.log(app); 
delete app.config;  // Works object config is sucessfully deleted

console.log(app); // {name:game} is only left 








-->
Set Object to null or undefined:


If you want to "remove" the object from use, you can set it to null or undefined:



let user = { 
  name: "Charlie"

 };

console.log(user);
user = null;         // or undefined  object 'user' will be set to null or undefined
console.log(user);




This won't "delete" the object from memory immediately, but it makes it eligible for garbage collection if nothing else is referencing it.


*/




























//--> Nested objects:

//storing information of multiple students.


//here classinfo is object


// const classInfo ={
        

//                lokajay: {
                         
//                         grade:"A+",
//                         city  :"delhi"
//                         },

//                jayta : {
                         
//                         grade:"A",
//                         city : "pune"

//                          },         

//                sabita: {

//                        grade:"0",
//                        city :"Mumbai"

//                        }

//                  };



// console.log(classInfo);

// console.log(classInfo.lokajay);


// console.log(classInfo.lokajay.grade);





// classInfo.lokajay.grade="B+";  //setting the classinfo(object)  of  lokajay (object) of grade as "B+"

// console.log(classInfo.lokajay);




// classInfo.lokajay.age =32;   //add the new property "age =32" in the object of object (lokajay)

// console.log(classInfo.lokajay);
// console.log(classInfo.lokajay.age);






















//Array of objects:

//multiple objects on array:

////here "classdetails" is Array



// const classdetails =[
//             {
//              name :"lokajay",
//              grade: "A+",
//              city : "delhi"

//             },
//             {
//               name :"jayta",
//               grade:"A",
//               city : "pune"
              

//             },
//             {
//               name :"jayanta",
//               grade:"0",
//               city :"Mumbai"

//             }

           



// ];



// console.log(classdetails);    //get the enitre array

// console.log(classdetails[1]); // get the object inside the array



// console.log(classdetails[1]["name"]); //get the name of the object . 
// console.log(classdetails[1].name);     // both ways works





// classdetails[1]["name"]="guhawati"; //set /update  the city of the object .
// console.log(classdetails[1]); 
// classdetails[1].name="nogaon";         // set /update  the city of the object . both way works
// console.log(classdetails[1]); 




// classdetails[1].age=32;  //add new proprtry in object inside the array
// console.log(classdetails[1]);
// classdetails[1]["like"]="anime" //add new proprtry in object inside the array  .both way works
// console.log(classdetails[1]);


// //same as nested objects








































//-->
// Math object:


/*   properities:                                  methods:
    Math.PI                                           Math.abs(n)
    Math .E                                           Math.pow(a,b)
                                                      Math.floor(n)
                                                      Math.ceil(n)
                                                      Math.random()  give 0 to 1 example:0.56467436,0.4t7373 
                                                                     but it will never give 1 .this will never 
                                                                     be interger number




    */


// console.log(Math);   
// console.log(Math.PI);                        


































//random intergers generate:


// let num=Math.floor(Math.random()*10);   //gernarte range between 0 to 10 , we multiple by 10,
//                                            //  10 will never be in the number

// //console.log(num);


// let num1=Math.floor(Math.random()*10)+1;  // if we want to have 1 to 10 in the generated number than we need add '1' to it


// console.log(num1);


// let num2=Math.floor(Math.random()*5)+21;  // if we want to have 21 to 25 in the generated number 
//                                           //  than we need add '21' to it
//                                            // multple by 5



//  console.log(num2);




/*to generate x to  y  using floor 

 let num3=Math.floor(Math.random()*((y-x)+1))+x; 


*/





































// Guessing game



// const max=prompt("enter max number");

// const random=Math.floor(Math.random()*max)+1;

// console.log(random);


// let magicnumber=prompt(`guess the number${1} to ${max} or type quit to exit `);


// while(true)
// {
  
  
//   if(magicnumber==random)
//   {
//      console.log("you win the game");
//      break;
//   }

//   else if (magicnumber=="quit")
//   {
//      console.log("exiting...");
//      break;
//   }
//   else
//   {
//     console.log("wrong choice try again...");
 
//     magicnumber=prompt("guess the number again..or type quit to exit ");

//   }
// }


































































//assigment  questions:
//1.


// let num2=Math.floor(Math.random()*6)+1;
// console.log(num2);





//2.

// const car={
          
//             name:"tesla",
//             model:"VX",
//             color:"red"
//           };


// console.log(car.name);



//3.
const person={
         name:"lokajay",
         age: 32,
         city:"delhi",
};

person.city="New York";
console.log(person);

person.country="United States";
console.log(person);





















