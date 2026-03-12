// "this"   keyword

// "This" keyword refers to an   "object"   that is executing the  "current piece of code" . 


//example:


// const student={
//        name:"Lokajay",
//        age: 23,
//        english_marks: 95,
//        math_marks: 89,
//        phy_marks: 95,


// //calulate average of three subjects:

//    getavg()
//    {
//     //let avg=(english_marks+math_marks+phy_marks)/3;  // through error :english_marks is not defined 
    
//     let avg=(this.english_marks+this.math_marks+this.phy_marks)/3; 
    
//     console.log(`${this.name} average marks is: ${avg}`);   // avg is local varible of the function getavg() 
//                                                              //this.avg is not needed
                                                    
//                                              // Using this.avg: You're calculating avg as a local variable, 
//                                              // but then trying to access it as a property using this.avg. Either assign it to this.avg, 
//                                              // or just use the local variable avg directly in the console.log.

    
        


//    //we want to print the object itself we used the keyword  "this"

//    console.log(this);





//    }

// };


// student.getavg(); //student  (object )  is calling the function  and function using keys of 
//                                // itself (of the same object) so "this"  keyword is used.                      









// // if we define the  getavg()   outside the  object the student then :

// function getavg()
// {

    
//     console.log(this);  //we get gernally window object
// }


// getavg();



// // window object: higher level object all code under the window object

// console.log(window);


























//try and catch  statment:

/*
the try sttatement allow you to define a block of code to be tested for errors while it is being executed .


the catch statment allows  you to define a block of code to be executed ,if an error occurs in the try block.










console.log("hello");
console.log("hello");

// let a=5;   // if we define a=5 then normally 'a' will be printed.

//we  estimate that error may occur : we put that piecec of code in try block.
try{

    console.log(a);  // a is not defined  for error and exception.
}



//-->
// catch{
//     console.log("variable a doesnot defined"); // try has error ,so catch block will exceute
    
//     }

// console.log("hello");
// console.log("hello");

// //after the try and catch block normal flow of execution of the program wil began







//-->
// we can put system define error meassge in the catch block;


catch(err){
   
    console.log(err);                                     //system define error  message is printed.
    
    }

console.log("hello");
console.log("hello");







*/

























//Miscellaneous Topics:




//1. Arrow functions: nameless function

/*

const function_varible = (arg1,arg2..) => {  function definition  } 


arrow  function is treated as  value to  variable





const sum =(a,b)=>
    {
    console.log(a+b);
   }

sum(2,3);  //5

    

if  2 or more than 2 arugments and b  parenthesis needed:


const sum =(a,b)=>
    {
    console.log(a+b);
   }


if arugment is 1    parenthesis not needed:



const sum = a =>
    {
    console.log(a+b);
   } 

    

 if arugments is zero  parenthesis is must else there will be error:


 
 const sum =()=>
    {
    console.log(a+b);
   }

*/
















//  implicit(means :already understood) 

// 2. implicit return  in  Arrow functions(nameless function)

/*


it is not printng   only returning

we reduce syntax of  arrow function by->

const function_varible = (arg1,arg2) => ( value to return )  ----> it parenthesis "()",not curly brackets "{}"








const square =(a) => ( a**2 );    //return without return keyword  ( between parentheis treated as return statment)

// big function reduce into small function


    console.log(square(3));



// we reduce it further:

const square =(a) => ( a**2 );    // for single arugments both place in function parmeter
                                 //  and function body '( )' is not necessary  

    console.log(square(3));










*/





























//3. set timeout: inbuilt function of "Window object"  set time in millisec(1s=1000milisec_)  after which the function /task will exceute

/*

setTimeout(function(as parameter),timeout)

function =            ()=>{
                           // do something
                        }





console.log("hi there!");

setTimeout(()=>{console.log("lokajay bhadra")},4000);    // function execute after 4sec and shows   lokajay bhadra

console.log("welcome to lalaland");





*/






































// 3.  set interval function  and clearinterval function:

/*

setInterval(function,timeout): after tmeout  repeadtley exceute the function





setInterval(()=>{ console.log("lokajay bhadra")},3000);









// setInterval(()=>{ console.log("lokajay bhadra")},3000);

// stop interval  by clearinterval

//   by  getting id  of setinterval() as every setinterval genarate id 
  

//   clearinterval(id)



//-->


  
  let id=setInterval(()=>{ console.log("lokajay bhadra")},2000);

  let id1=setInterval(()=>{ console.log("welcome to javascrpit")},3000);

  console.log(id);
  console.log(id1);

  clearInterval(id)  // setinterval with id with stop and setinterval with id1 will run






*/

















































/*
"
4. "this"    with Arrow functions:


  Arrow fuction:
  scope: the scpoe is lexcial scope (in case of nested function / see what is the parent function scope  or  scope is golbal)
         
         arrow function donot see who calling it.it see who is calling the parent function or scope is golbal scope.



         arrow function scope  === scope of parent(parent function/ parent itself  is golbal) 




       arrow function :
"
       "this" = "this" of "this" of calling function





normal function:

scope-> "this"  depend on the calling function/object
















//example:






const student={

               name:"lokajay",
               marks: 94,
               property: this,   //key  is "property"  and value is "this"
    
              //for student object     the  "this"===Window object   
              //As student  object      scope: golbal .






              
              // for normal function:
              getName: function()
                           {                     //for normal function:
                         //   console.log(this);   // "this" === student object.  (parent scope == studentscope)
                         //   return this.name;   //so , this.name === "lokajay"


                    //this === student

                        
                           }
                           ,




            


               
                           
             //for arrow function:

              getmarks : () =>{
                                                 
                         //    console.log(this);
                                                  //for arrow function:
                                                  // "this " === window object   (parent scope == window scope)




                          //   return this.marks;    // here by using this we never able access 
                                                 // the student obnject details name,marks etc..

                                                  // so, this.marks === nothing  it cannot recongized

                                                   // this.marks  ==  (this== student)  of (this==window) marks is not defined. 


                                                    //   so it return and print undefined
                   
                         
                                         // this == "this" of "this" of calling function

                                         // this ==  this of arrow function    of   "this" of student object that is calling 
                                                    // by student.getmarks()  is "window"


         // this === window

              },













 // here by using this we never able access the student object details name,marks etc.. by using
 // "this " in arrow function.

 //let see example using settimeout function :



    getInfo1: function(){

        setTimeout(()=>{ console.log(this);},2000);  // arrow function "this"  == student
    }
    
    ,



    getInfo2: function(){
        

            setTimeout(function (){ console.log(this);},2000); //normal function "this" == window
        }
        
















    
  // why this change has occured:

In getinfo1:->


the" getInfo1 fucntion"   "parent" of  "arrow function"  inside it .

so, 'this' === (
                 'this' of (arrow function)== getinfo1   (it donot see who calling arrow it see who is
                  calling the parent function as  setimeout function called by getinfo1 so 'this' equal to 'getinfo1' )  

                 of

               'this' of (getinfo1) is equal 'student'
         
         
                  )
         
         == student object  


this=== (this of(arrowfunction)===getinfo1) of (this of (getinfo1)=== student) student


(but here, Arrow function is pass only  as parameter in setTimeout(),

here also settimeout is called by window object but 

it is arrow function so  
 the scpoe is lexcial scope arrow function donot see who calling it.it see who is calling the parent function)












In getinfo2:->




here (settimeout function) is parent of (normal function) 

this=== 'this' of (settimeout fuction) equal to window===window

AS settimeout is inbuilt function called by window so 'this === window'




































    };



    


          //console.log(student.getName());  //normal function calling




         // console.log(student.getmarks());  // arrow function calling
          
          
          //console.log(student.property);  // for the calling " student " object
                                          // "this" === window object





       student.getInfo1();
       student.getInfo2();



*/



























//practice questions:


// const square = a =>  a**2 ;    // for single arugments both place in function parmeter
//                                  //  and function body '( )' is not necessary  

//     console.log(square(3));









// setInterval(()=>
//       {
//         for(let i=0;i<5;i++)
//             {console.log("hello");}
//       },2000);










// setInterval will run indefintely so to stop it from happening we need use   'setTimeout(id)' and 'clearinetrval'
// id we get form the setInterval().



// let id=setInterval(()=>   // after every 2sec hello print infinte times
//     {
//       for(let i=0;i<5;i++)
//           {console.log("hello");}
//     },2000);

// console.log(id);



// setTimeout(()=>{ clearInterval(id);console.log("stoping the execution....");},10000); //after 10 sec this exceute once 

//                                                //clearinterval(id) will stop execeute of setinterval with 'id' specfic for that particular 
//                                                //setinterval only.

       


//  // using setinterval and settimeout and clearinterval we can run a soecfic code for specfic time.                                               

































//Assigments:




// let arr1=[1,2,3,4,5,6,7,8,9]

// const arrayAverage=(arr)=>
//     { let sum=0;
//         for(i of arr)
//         {
//             sum+=i;
//         }

//         return (sum/arr.length);
//     }

//     console.log(arrayAverage(arr1));














// const isEven=(n)=>{return((n%2)==0);}


// let result=isEven(6        );

// if(result)
// {
//     console.log("number is even");
// }
// else{console.log("number is odd");}











// const object={

// message: "hello world!",


// logMessage()
// {
//     console.log(this.message);

// }

// };


// setTimeout(object.logMessage,1000);  //output  undefined




//because the object.logMessage function is pass as parameter to settimeout function

//You're passing the function logMessage as a reference, not calling it in the context of object. 
// So when setTimeout runs it after 1 second, it calls it as a plain function, not as object.logMessage() —
//  which means this is no longer bound to object.

//When setTimeout calls it later, it's no longer inside the object. So this is no longer object.
//  It's undefined (in strict mode) or the global object (window in browsers).


//In this.message:

//  this  ----->   window
// so this.message  is window .message 
//And it is not define 











let length=4;
function callback()
{
    console.log(this.length);  // this == window

                               //window.length == nos of window object(window frames)  is zero

}

const object ={

    length: 5,
    method(callback)
    {
        callback();
    },
};


object.method(callback,1,2);   //output is zero






























































