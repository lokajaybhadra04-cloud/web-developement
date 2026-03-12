
/*

// function syntax:

->
function defintion:


function funcName()
{
//do something
}




->
function calling:



funcName();



example


function hello()
{
  console.log("hello");

}

hello();














let num3=Math.floor(Math.random()*((6-1)+1))+1; 

console.log(`ludo dice outcome is: ${num3}`);










//function with Arugments and return keyword :

values we pass to the function

function funcName(arg1,arg2..(formal parameters)) //function defintion
{
     //do something

     
}

funcName(var1,var2(actual parameters))//function calling

acutal parmeters==formal paramter   ,also order is maintain,and  missing parameter will be "undefined"








//return  -> return keyword is used to return some value from the function


function funcName(arg1,arg2..(formal parameters)) //function defintion
{
     //do something

  return val ;   // no code excute after return statment
}

funcName(var1,var2(actual parameters))//function calling




// to reurn multivalue we need to store those value in the array or object and the we return it.


*/





//tricky calculate sum of 3 nos:



// function sum(a,b)
// {
//  return a+b;

// }


// console.log(sum(2,3)); // sum of 2 numbers

// // sum of 3 numbers


// console.log(sum(sum(2,3),4)); 








// concantnatio all string in array


// let array=["i","love","coding"];


// function concatofarray(arr)
// {
//     let str="";
     
//    for(i of arr)
//    {
//         str+=i 

//    }

// arr=[str];

// return arr;

// }

// console.log(concatofarray(array));
































//scope :-->  it determine the accessiblity of varaibles,object and functions from different parts of the code.
/*

function scope: variable defined inside a function are not acessible (visible) from outside the function.



lexical: a variable defined outside a function can be accessible inside another function defined 
         "after" the varaible  declaration  .

           (but opposite is not true ): if variable define in the innerfunction cannot access by 
                                          outer function 

          but,
          a variable defined outside a function can be accessible inside another function defined 
          "before" the varaible  declaration in the outer function
          

          this mainly used to for nested function





block  :


















function scope 
example:

let sum=54; // this sum has global scope

function calsum(a,b)
{
  let sum=a+b;  //this sum has function scope

                // this  sum is not then  


  console.log(sum); // sum =3  //sum=54
}

calsum(1,2);

console.log(sum) ;// sum =54









inside the function (proirty):-->



function scope >> golbal scope
































//lexical scope:

//examples:



function outerFunc()
{

let x=5;
let y=6;

function innerFunc()
{
  console.log(x,y);      //outer function variable acessible by the inner function 
                         //   "AFTER" the varaible  declaration  of outer function.
}

innerFunc();

}


outerFunc();











function outerFunc()
{

function innerFunc()
{
  console.log(x,y);  

}

let x=5;                // a variable defined outside a function can be accessible inside another function defined 
let y=6;                 // "BEFORE" the varaible  declaration it is possible concept    "hoisting" see later
          
                   
innerFunc();

}


outerFunc();







//but opposite is not true:-->if variable define in the innerfunction cannot access by outer function


function outerFunc()
{
  let x=5;
  let y=6;


function innerFunc()
{
  let a=10;
  
  console.log(x,y);  

}

console.log(a)        // error  'a' is not defined at outerfunc           
                   
innerFunc();

}


outerFunc();














function outerFunc()
{
  let x=5;
  let y=6;


function innerFunc()
{
  let a=10;
  
  console.log(x,y);  

}

console.log(a)     // error  'a' is not defined at outerfunc           
                   
innerFunc();      // no error   call sucessfully 

}


outerFunc();

innerFunc();  //but  here, error because  innerfunc is define inside the outerfunc
               //so , access the  innerfunc is out of scope










lexcial scope:  inside access the outside 
                outside cannot access the inside



*/













// let greet="hello";

// function changegreet()
// {
//     let greet="namaste";
//     console.log(greet);
//     function innergreet()
//     {
//         console.log(greet);
//     }
 
// }

// console.log(greet);       
// changegreet();

//since innergreet () never called  output: hello nasmate.









































/* 

// --> Function Expressions: nameless function

const variable = function(arg1,arg2...)
{
 // do something
}



  varaible contain the enitre function

*/


// const sum=function(a,b)    // here sum is "variable"   not function name
// {
//     return a+b;
// }




// let a=sum(2,3);


// console.log(a);































/* 
-->
Higher order Functions:

a function that does one or both:

->take some or multiple functions as arugments.

->return a function.





example:


 function multiplegreet(anyfunctionname,count)
 {
        for(let i=1;i<=count;i++)
        {
          anyfunctionname();
        }

 }


 let greet = function()
 {

  console.log("hello");

 }

 // function  as variable "greet"  is pass to function  "multiplegreet()" 
 // so "multiplegreet()" is a higher order functions.

multiplegreet(greet,2);


// we also pass directly function(nameless) in higher order function:


multiplegreet(function() { console.log("nasmate");},10);








*/
























/* 
-->
Higher order Functions with returns:

it return a function.it actually return the "enitre"  function  defination




example:
detect odd or even number







let test="odd";




function oddeventest(request)
{

  if(request == "odd")
  {

    return function(n) {console.log(!(n%2==0));}
  }
  else if(request == "even")
    {
  
      return function(n) {console.log((n%2==0));}
    }
    else
    {
      console.log("wrong request");
    }



}


const testfunction=oddeventest(test);    // it return the function store in testfunction variable.

testfunction(2);
testfunction(3);








*/



















































/*


//object with methods:


//actions that can be performed on a Object;

//seen already in object literals



const calculator ={

  add: function(a,b)            // key (varaible that store address of function ,
                                // it means variable name == address of the function == function name )
                                //      :           value(whole function body)
  {return a+b;

  }
                     ,
  sub: function()
  { return a-b;

  }
                     ,
  mul: function(a,b)
  {return a*b;

  }


};

console.log(calculator.add(3,4));  // objectname.key(function name== varaible)  (x,y (parameter))




//Math .random()  // Math is object and random() is method

//[1,2,3].push(4)  //array  and typeof [1,2,3]  it is object  ,so array is object
                   //  and push() and pop() are methods
 //[1,2,3].pop()








*/
























// //(shorthand) for Methods:

// const calculator ={

//   add(a,b)           
//   {return a+b;                  // there is no need of wrting   " :  function"  memeber symbol ":" 
//                                // and keyword   "function"
//   }                            // javascrpit automatically understand it is function defined inside
//                                 // the  object (calculator).

//                      ,
//   sub(a,b)
//   { return a-b;

//   }
//                      ,
//   mul(a,b)
//   {return a*b;

//   }


// };



// console.log(calculator.add(3,2));

















//assigment questions:





//tricky questions: retuens array elements larger than numbert.


// let arr=[1,3,2,7,9,4,2,1,6];
// let num=5;

// function large(arr1,n)
// {

//   let arr=[];
//   let j=0;
//    for(i of arr1)
//    {

//     while(i>n)
//     {
//       arr[j]=i;
//       j++;
//       break;
//     }
//    }


//    return arr;
// }


// console.log(large(arr,num));



















// //tricky questions: extract unqiue  charaacterrs from a string 


// let  str="abcdabcdefgggh";



// function extract(str)
// {
//   let str1="";

//   for(let j=0;j<str.length;j++)
//   {
//       let char=str[j];

//       if(str1.indexOf(char)==-1)   // that character "char" has never been added to the new string "str1"
//        {
//            str1+=char;
//        }



//   } 
    
   
//  console.log(str1);

// }


// extract(str);

















//tricky question:

//count  the vowels in string:




// let  str="abcdabcdefgggh";

// function vowel(str)
// { let count=0;

//   for (let char of str)
//    {
//       if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='u')
//              {
//                 count++;
//              }

//     }
// return count;
 
// }

// console.log(vowel(str));






























// //tricky question: generate  randomnumber with range (start,end)


// let end=6;
// let start=1;

// function random_number(num,num1)
// {

//   let num2=Math.floor(Math.random()*num1)+num;
//   console.log(num2);

// }

// random_number(start,end);



































//questions: list of countery display  the longest country name


// let country=["Australia","Germany","united States of America"];  
// let coun_len=[""];
// let len=country.length;


// function largest(count)
// {
//   let large=0;
//   let pos=0;

//   for(let i=0;i<count.length;i++)
//   { 
//       if(count[i]>large)
//       {
//         large=count[i];
//        pos=i;
    
//       }

//   }
// return pos;
  
// }



// function country_len(arr,co,len)
// {
  
//   for(let i=0;i<len;i++)
//   {
//       co[i]=arr[i].length;
//   }
   
// let k= largest(co);

// console.log(arr[k]);
     

  

//  }


// country_len(country,coun_len,len)









