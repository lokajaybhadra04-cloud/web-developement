// const stu1={
// name:"lokajay",
// age: 25,
// subjects:{ 
//     maths:{ marks:78  },
    
//     science:{ marks:86 },
    
//     computer_science:{ marks:95}                 
                     

//          },

// getmarks: function()
//               {
//                 let avg = (this.maths.marks+this.science.marks+this.computer_science.marks)/3;
//                 return avg;
//               }

// };


// const stu2={
//     name:"ravi",
//     age: 31,
//     subjects:{ 
//         maths:{
//                   marks:89  
//                     },
//         science:{
//                   marks:89  
//                     },
//         computer_science:{
//                   marks:98 
//                     }                 
                         
    
//     },

//     getmarks: function()
//     {
//       let avg = (this.maths.marks+this.science.marks+this.computer_science.marks)/3;
//       return avg;
//     }
    
//     };





// const stu3={
//     name:"jhon",
//     age: 28,
//     subjects:{ 
//         maths:{
//                   marks:84   
//                     },
//         science:{
//                   marks:87  
//                     },
//         computer_science:{
//                   marks:97
//                     }                 
                         
    
//     },

//     getmarks: function()
//     {
//       let avg = (this.maths.marks+this.science.marks+this.computer_science.marks)/3;
//       return avg;
//     }
// };


    // all student object have same key so it is better to template 
    //so can be use again  and again...
    //if student object have function define then 
    //for every function for every object space will be wasted.it is not feasible.






    // so we used OOPs:
//blueprint of student: we use   " class ""


// class student
// {
 


// };

















//object prototypes:

// let arr=[1,2,3];

// let arr1=[2,4,5];

// arr.sayHello=()=>
// {
//   console.log("hello!, i am array");
// }



//arr have function sayhello() but arr1  donot have function 

// if we want all array's made should have sayhello  function .then: it define 

//in  " ARRAY prototype ".











// -----> arr.__proto__(Reference) it will  " point/refer "   to the object prototype:
//                                                              it conatin:
//
//                                                                methods and property.


//let's _print    ---> arr.__proto__(Reference)       in console window.
  



//we want change push function defintion(only printing pushing  the number "n" ) of array then we write:
   


//example:
//  ----> arr.__proto__.push=(n)=>{ console.log("pushing the number:",n);}



// so arr.push() function defintion is change all push function for Array ENTIRELY.















// we  access the    " actual object "  of prototype:

// ---> Array.prototype(actual object)



//earlier:
//arr.__proto__  --> give us the copy or refrences



//NOW:
//~~~for array:
//arr.prototype -->  give us the actual object 

//~~~~for string:
//string.prototype





//example:
 // IN console window


//Array.prototype,String.prototype  it all methods define  so we donot need to again & again 
//define when again & again use Array. 























//PROTOTYPE: means:-->
//it is like a single template object that all objects inherit methods and properties from without having their own copy 

//menaing:--> example:

let arr1=[1,2,3];

let arr2=[2,4,5];


arr1.sayHello=()=>
{
  console.log("hello!, i am array");
}


arr2.sayHello=()=>
{
  console.log("hello!, i am array");
}



//arr1.sayHello == arr2.sayHello      then:  false  because,

//for individual object when we define property or methods (like sayhello function)
//it occupy different memory space to for different Array  arr1,arr2.









//But using  Array.prototype or string.prototype 

//object  donot occupied diferent space  for different arrays arr1,arr2.
//object donot make copy of themselves.

//example:
//"abc".toUpperCase === "xyz".toUpperCase;  // true because  

//toUpperCase define already  in  Array.prototype 
//both xyz  &  abc donot have differnt copy of method(toUpperCase) 
// both string refer to same method only.
//memeory is saved.
                                                                                                                                                                                                                                  



//Array and string that prototype already build so it donot need to copy itself again and again 
//when we use array and string again & agian ..

















































// //factory fuctions:


// function PersonMaker(name,age)
// {

//   const person={
//     name: name,

//     age: age,

//     talk(){
//       console.log(`hi my name is: ${this.name}`);
//     }

//   };
// return person;
// }

//let p1 = PersonMaker("lokajay",31); 


// --> create person object with name : lokajay & age:31
// //p1.talk(); --> print : hi my name is :lokajay
//simlalerly  for person p2,  

//let p2=PersonMaker("jayta",30);


//-->yeilds same result.
//here, like earlier  we donot need codes enitrely 
// for every array or string or 1000 students all it's  property and methods enitrely.
// so it is better then eariler








//disadvantges of factory fucntions :
//every object has to create  copy of iteslf

//  p1.talk()===p2.talk()  //result  false

//because methods talk()  have copy each in each in the object p1 and p2 
//they are copy each other, that occupied different memory address.
// it is not feasible.













// // solution for this:  
//  //construcotr+ New operator-->

// // constructors: doesnot return anything & start with capital letter.



// //New opertor :

// //the New operator let's developers create an instance of a user-defined object type 
// // or of one of the built-in object types that has a constructor function ,



// function Person(name,age) //constructor or blueprint
// {

//   this.name = name;
//   this.age = age;
// }



// //if  we want every objects (person) have function  "talk()" the we can write:

// Person.prototype.talk= function(){

//   console.log(`hi ,my name is: ${this.name}`);

// };

// // fucntion talk() is in window console of browswer  
// // -->person--> prototype-->talk()
// // beacuse prototype talk function goes to prototype block of person object
// //so ,
// //    p1.talk===p2.talk        // it's is true






// let p1 = new Person("lokajay",31);//objects or instance  both "this" is p1
// let p2 = new Person("jayata",30);                        // both "this" is p2

// console.log(p1);

// console.log(p2);



//p1 and p2 are two new objects.

//it do same work does by factory function

//it better because if we define a some function inside the   Person constructor
//when we define object p1 and p2  fucntion  will not create copy of itself again .
//it will be same copy













// function Person(name,age) //constructor or blueprint
// {

//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

//if there no object declaration:  let p2 = new Person("jayata",30);

//then we get  "window"  as object




























// another better than "factory fucntions"  and " constructor+new operator"

//called  Class template/blueprint:

// CLASS: classes are a template for creating objects,The constructor  method is a special 
//method of a class for creating and initialzing an object instance of that class.




// class Person{
// constructor(name,age){  //  here we need to use constructor KEYWORD
//   this.name=name;
//   this.age=age;
// }
// talk()                   // Inside class only we have method /function and "tbis"
//  {           // not need to write prototype.talk() function 
//  // As it is inside the prototype -->person   of browser window console
//   console.log(`hi ,my name is: ${this.name}`);
//  }

//  //p1.talk===p2.talk //true  as talk funnction occupy the same memory space 
// //talk() donot create the copy of self like in 'factory functions"  and "constuctor+new operator"

// }
// let p3 = new Person("lokajay",31);//objects or instance  both "this" is p3
// let p4 = new Person("jayata",30);                        // both "this" is p4








































//Inheritance:  Inheritance is a mechansim that allows us to create new classes on
//the basis of already existing classes.


class Person{
  constructor(name,age){ 
    this.name=name;
    this.age=age;
    console.log("parent class constructor");
  }
  talk()                   
   {          
    console.log(`hi ,my name is: ${this.name}`);
   }
  
  }
  

class Student extends Person{

  constructor(name,age,marks){
    
    super(name,age); // name and age both in person and Student so name and age inherit "student class"  from "person class"
       //with help keywords :  extends and super
       
       //super(name.age)  super  means parent class constructor "person" is called  name and age
     this.marks=marks;

     console.log("child class constructor");

  }


  //student class will inherit person class METHOD  :talk function()



talk()
{
  console.log("this is overriding example of function having same name child classes function  will override talk function of parent classs");

}


  greet()
  {
    return "hello!";
  }


}

//object of student class
let s1 = new Student("adam",25,95);




console.log(s1);

//student --> prototype ==person--> greet fucntion and  prototype == object --> talk function







let p1 = new Person("eve",29);

console.log(p1);