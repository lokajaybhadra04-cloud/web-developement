 /*
 
 Array Methods:

1.forEach
2.map
3.filter
4.some
5.every
6.reduce
 
 */







/*

1.  forEach: 

                for each element in array the 'foreach function' will  run the calling function
                 ( enitre function defination" or "function name)        */   


//synatx->      arr.forEach(" enitre function defination" or "function name");







//samething can done by   "for( char of arr)"

//but we should know  foreach for array(spiceally).

//example:->








// let arr=[1,2,3,4,5];



// function print(el)  //normal function
// {
//   console.log(el);

// }

//arr.forEach(print);  //with function name






// let print = function(el) //using function variable
// {

//     console.log(el);
// }



//arr.forEach(print);  //with function name







// let print= (el)=>   //using arrow function
// {        
//     console.log(el);
// }




//arr.forEach(print);  //with function name







//OR





//arr.forEach(function(el) {  console.log(el);}   );  //with enitre function defination






//OR


// arr.forEach(  (el)=>{ console.log(el); } );















//  !very important

//--->
// forEach can use to  print and handle objects:
//example:


//   Array    containing    objects:


// let arr2=[{
//           name:"lokajay",
//           marks:95,

//           },

//           {
//             name:"jayanta",
//             marks:99,


//           },

//           {
//             name:"sabita",
//             marks:94,
//           }
//         ];


        // arr2.forEach((student)=>{ console.log(student);      });              // individually print each objects(students) in array

        // arr2.forEach((student)=>{ console.log(student.name);      });   // print name(propetry) of each object(student)
    





















































/*2. MAP & filter:

MAP : for each element in array (arr)  'map' run the 'calling function'( some function definition (to manupialate) OR  
           function name ) and also return the values for each element in array ,the return value save in the NEW created
            Array(newarr)

            New array size(newarr) == old array size(arr) 
            
*/

// syntax:--> 
// let newarr = arr.map(some function definition   OR  function name is used);  





//EXAMPLE : square of number

// let num=[1,2,3,4];

// let square=num.map((element)=>{return element**2;});  // each element of 'oldarr' return (double of element) in 'newarr'

// console.log(num);
// console.log(square);











//example2:


// let students=[{
//           name:"lokajay",
//           marks:95,

//           },

//           {
//             name:"jayanta",
//             marks:99,


//           },

//           {
//             name:"sabita",
//             marks:94,
//           }
//         ];



//         //now we want to gpa of each student in    "gpa"  array

//         let gpa=students.map((element)=>{return element.marks/10;});         //each elemnt(objects) of oldarray(student) we get newarray (gpa)

//         console.log(gpa);











//filter: it filter/return newarray with added element  based on calling function if is true or else element not added to new array

// syntax:--> 
// let newarr = arr.map(some function definition   OR  function name is used); 



//example:


// let nums=[2,4,1,5,6,2,7,8,9];

// let even=nums.filter((num=>(num%2==0)));


// console.log(nums);  //oldarray

// console.log(even);//new array all even nos




// let odd=nums.filter((num=>(num%2!=0)));



// console.log(nums);  //oldarray
// console.log(odd);//new array all odd nos

























//  3.  Every and Some:




   //  Every:  returns true if 'every' element of array gives true for some function .else returns  false.
   //            "similar to AND gate"


//syntax:  arr.every(some function definition  OR  name);

// let arr=[1,2,3,4,];

// let result=arr.every((element)=>(element%2 == 0)); // not all even so flase
// console.log(result);


// //OR



// let result1 = [2,4,6].every((element)=>(element%2 == 0)); // all are even so true
// console.log(result1);










//Some:    returns true if 'some elements 'of array give true for some function. Else returns false.



//syntax:     arr.some(some function_definition or function_name);




//example:


//  let result=[1,2,3,4,].some((element)=>(element%2 == 0)); // some are even so true
//  console.log(result);


// OR



// let result1 = [,3,5].some((element)=>(element%2 == 0)); // all not even so true
// console.log(result1);

































//4. Reduce:  return the reduce value.

  //reduce the array to a single value.reducer function with 2 variable "accumultor","element".
   

   //syntax:   arr.reduce((accumulator,element));









//   console.log([1,2,3,4].reduce((result,element)=>(result+element)));





  //OR




//   let arr=[1,2,3,4];

//   let final=arr.reduce((result,element)=>{  console.log(result,element);  return result+element;}); 
  
//   // to see 'result'(act as accumlator) and 'element'  for every time 

//   // it claculate the sum of numbers.

//   console.log(final);


































//5.  Maximum in Array  using the 'reduce' methods:

//for each element of array the reduce function is run and check for maxmium element


// let nums=[2,3,4,5,3,4,7,8,19,12];




// let max = nums.reduce(
        
        
//                         (max,element)=>{

                                       
//                                         console.log(max,element); //intially  accumalator =2(1st element)   and element=3 (second element)
                       
//                                         if(element>max)
//                                         { 
//                                                 return element;

//                                         }
//                                         else
//                                         {
//                                                 return max;
//                                         }



//                                                  }
                                                
//                 );

// console.log(max);


























//practice questions:

//example 1: check all the numbers in array are muliple of 10 or not


// let arr=[10,132,50,60,30,300];

// let result=arr.every((element)=>(element%10==0))
// if(result)
// {
//         console.log("all nos is multiple of 10");
// }
// else{
     
//         console.log("all nos are not multiple of 10");   
// }






//example 2:  create a function to find the min number in an array.



// let arr=[1,3,0,5,6,7,17];
// let result=arr.reduce((min,element)=>  
//                                   { 
//                                     console.log("elemnent and min both of pervous iteration:",min,element);
//                                         // min=(1st element) check with element=(2nd element) 
//                                         // min=(3rd element) check with element=(4th element)  soon..
//                                         if(element<min)
//                                          {
//                                            min=element;
//                                            return min;
//                                           }
//                                           else
//                                           {
//                                             min=min;
//                                             return min;
//                                           }


//                                      });

// console.log("minimum element is:",result);                                     



























//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
































//-->
// default parameters:   giving a default value to the arguments:


/*
function func(a,b=2)
{
//do something;
}

*/



// function sum(a,b=3) 
// {
//         return a+b;
// }

// console.log(sum(2)); //b value not passed in function calling so deafult value 3 is passed in function defination 

// console.log(sum(2,7));  // as b value is provided by the function calling so default value is not used





// function sum1(a=3,b) 
// {
//         return a+b;
// }

// console.log(sum1(2,7)); // output:9  a=2 b=7
// console.log(sum1(2));    //  a=2  b=undefined  output:NAN (not a number)























































 //-->
 // spread:  expand an iterable( like->( arrays ,string)    we need to acces each value one by one.) into multiple values


 /*
 function funcname(...arr)            //... we use 3 dot's
 {
 // do something
 }
 
*/



//-->for Array :

//  let arr=[1,2,3,4,5];



//  console.log(Math.min(1,2,3,4,5))                                 //math.min(numbers......) give minmum of list of numbers

//  console.log(Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]));        // but writing all this time consuming

//  //so we use spread to write this in few code.

//  console.log(Math.min(...arr)); 



//  //simlarly array elemnt 'printing' one by one is time consuming:

//  console.log(arr[0],arr[1],arr[2],arr[3],arr[4]);

//  console.log(...arr);                                   //output is 1,2,3,4,5   indviually elemnt is printed



// console.log(arr);                                          // output: [1,2,3,4,5]       elemnt is printed inside a array




                 
// //-->for Strings:



// console.log("lokajay bhadra");

// console.log(..."lokajay bhadra");
























































//-->
// spread in array literals:


// let arr = [1,2,3,4,5];


// let newarr=[...arr];  //using spread  'newarr' assign  'arr' element value indiviually
//                             //  'newarr'  is copy of  'arr'.
//                             //any change in one not effect another.
// console.log("newarr before modifaction ",newarr);

// newarr.push(7);
// console.log("new array",newarr);
// console.log("old array",arr);







// //OR 





// let arr2 = [3,4,5,7,6];

// let newarr2=arr2;                                     // it is just pass refernece/memory address of a'arr' to  'newarr'.
// console.log("newarr2 before modifaction ",newarr2);    // as mememy address is passed so
//                                                    // Any change in   one affect  another

// newarr2.push(90);
// console.log("newarr2 array",newarr2);
// console.log("old 2 array",arr2);










//--> for ( Array )   using spread:

// let chars=[..."hello"];  //indviually 'h','e','l','l','o'   store in array  'chars'


// console.log(chars);







// let oddarray=[1,3,5,7,9];
// let evenarray=[2,4,6,8,10];
// //we want array contain both odd and even array come togther:

// let num1=[...oddarray,...evenarray];    //we can spread the element of each array  both array together into one array.

// console.log(num1);



































//-->spread:  with object literals.



// const data={
//           email:"lokajaybhadar5@gmail.com",
//           password:"abcd",
//          };


//  console.log("object before the  modifaction\n",data); 



// const dataCopy={...data,id:123};     // ...data  it return "each memeber"-->(key,value) of the object literals spread 
//                                    // indivdually to the new object
//                                    //also add id:123 (key,value) pair added to   'new object' datacopy
//                                    //sso we added new addition new property added to new object
                                 
// console.log(dataCopy);  //the new object "datacopy"


// console.log("\nobject after the  modifaction:\n",data);   //old object donot change as no modifaction is done







// //OR 





// //--> we copy old object to new object directly and add new property directly


// const data1={
//         email:"jaytabhadar5@gmail.com",
//         password:"abcd",
//        };


//     const datacopy1=data1;

//        console.log(data1); 
//        console.log("object before modifcation:",datacopy1); 

//        datacopy1.id=123;

//        console.log("object after modifcation:",datacopy1);
       







//--> we can also store  :  Array and string  in inside the objects  using spread(...)

     //for array:

//        let arr=[9,5,3,4,5];  // array are all are values
//        let obj1={...arr};     // but object are --> (keys:values) pairs

//                               //here  because of using spread (...3 dots)  arrayindex->key  , arrayvalue-->values


//       console.log(obj1);


//      // for string:

//       let obj2={..."hello"};  // simlarly  
//                                //  string is all character
//                                 // but object are --> (keys:values) pairs

//                               //here  because of using spread (...3 dots)  string_index->key  , string_value-->values
     
//         console.log(obj2);
















































//REST:  ALlows a function to take an indefinite  number of arugments and bundle them in an array

//opposite of spread

//spread --> from single value(array or string)     mapped to         multiple values.

//rest--> oppsosite spread  ( multivalues values   mapped to  single value). 

//syantx of rest and spread are same. same (...) 3dots





// function print(...args)   //arugments (...args )  so 'args' can store multiple values  come to sum function
// {
//   for(let i=0;i<args.length;i++)
//   {
//     console.log("you gave us:",args[i]);
//   }

//   console.log(args);

//   }

//   print(1,2,3,4,5,1,2,90,3,3,545,6);


 //function to take an indefinite  number of arugments and bundle them in an   "Array".























//In javasciprt has inbult array = ...args





//example

// function min(a,b,c,d)
// {

//   console.log(arguments);  '  
 
// }


// function min()            //even if we remove arugments it wil works
//                             //because
// {

//   console.log(arguments);  //arugmets itself is collection
//   console.log(arguments.length);  //arugmets length print.

//   //arugmets itself is like collection or array (but not totally array)  
//                               //beacuse if we try  use  push function on 'arguments 'arg' will give error






// arguments.pushup(1);    //as arugments is a collection , it is not array so push/pop will not work on arguments

// }



//min(1,2,3,4);








// //calculating sum in array...

//  console.log("calculating sum....");

//  function sum(...args)                                    
// {                                   
//                                            //as arugments is a collection , it is not array so push/pop will not work on arguments
//                                            // using the REST (...) 3dots
//                                          //take an indefinite  number of arugments and bundle them in an   "Array".
                                        
//                                          //so  push/pop will  work on arguments (args).

//   console.log("before the push:",args);
                                     
//   args.push(1);  

//   console.log("after the push",args);   // push and pop operation will work on 'args' as in it like array                                    
     
//  let sum1 =args.reduce((result,element)=>(result+element));



//  return sum1;
//  }


//  console.log("sum is :",sum(1,2,3,4,5,1,2,90,3,3,545,6));

    
 









// // min in array :


// console.log("\n\ncalculating min ....");
// function min(...args)
// {

//   return args.reduce((min,element)=>{ 
//                                       if(min>element)
//                                       {   min=element;
//                                         return min;}
//                                       else
//                                       {
//                                         min=min;
//                                          return min;
//                                       }
     
//                                                       }) 

// }


// console.log("min  is :",min(1,2,3,4,5,1,2,90,3,3,545,6));






// //with   '...args' as inbult array in fuction we also    pass   other   'parametrers'

// //example:  calculate max in  inbult array in javascrpit (...args)



// console.log("\n\ncalculating MAX ....");


// function MAX(str,...args)
// {

//   return args.reduce((max,element)=> { 
                                      
//             console.log(str);

//                                       if(max>element)
//                                       {   max=max;
//                                         return max;
//                                       }

//                                       else
//                                       {
//                                         max=element;
//                                          return max;
//                                       }
     
//                                                       }) 
 
// }


// console.log(MAX("this is a maxmimum in array",1,2,3,4,5,1,2,90,3,3,545,6));

// we can passing the string = "this is a maxmimum in array"    in function
//other paramertres should before the inbultarray==...args==REST else it will show error 
//error -> A rest parameter must be last in a parameter list.








































































//DESTRUCTING:   storing values of array into multiple variables;




//for array DESTRUCTING:

// let names = ["tony","bruce","steve","peter","jhon"];


// // let ironman=names[0];
// // let green_monster=names[1];

// //console.log(ironman,green_monster);  //output:tony,bruce




// //OR we used DEStructing of array



// let [ironman,green_monster]=names;// tony,bruce         copy   to indivual vairable (ironman.green_monster)  

// console.log(ironman,green_monster);  //output:tony,bruce












// //ALSO the other name of array "names"  can be store  using concept called    "REST" --> (...othername)

// //here 'DESTRUCTRING OF ARRAY' +  'REST' CONCEPT COMBINE.



// let [name1,name2,...othername]=names;

// //so,  "steve","peter","jhon" all left names   are store in the   
// // (inbult array using REST  -->  ...othername) as   'ARRAY'

// console.log(ironman,green_monster,othername);


































































































//Destructuring  of objects:

// const student={

//   name:"lokajay",
//   class: 9,
//   age: 14,
//   subjects:["hindi","english","math","science","social studies"],
//   username:"lokajay@123",
//   password: 1234
//};



// let user1=student.username;
// let pass1=student.password;


// console.log(user1,pass1);









//OR we used DEStructing objects:





//const {username,password}=student;    //  student object   property name -->  username (key)

//console.log(username,password);
                                      // const{username(varaible) }  both should be matched

                                      // simalrly for password


                                      //else there will be  value as undefined

                                     //example:
                                    //   const {user,password}=student;  


                                    //  console.log(user,password);








//





// const {username: user,password:secert}=student;     //  student object   property--> username(key) : lokajay@123(value)

//                                                   //  const{ username(varaible) :  sceret} 

//                                                   //  username(key of object(student)) match with  username(varaible)

//                                                   // 'user'  will contain the  value (lokajay@123)

// console.log(user,secert);














// we can never add  new property in the object(student) as default property as  city="delhi" 

// but if the city:"pune",  is already in the object (student) then the default property city="delhi " will never 

// be saved in the object




// console.log(student);

// const {username: user,password:secert, city="delhi"}=student;    

// console.log(user,secert,city); //'city'print it's value but it  is just varable not related to object








// console.log(student); // output 'city' will not be added in the object (student).




// console.log(student);

// const {username: user,password:secert, city:place="delhi"}=student;    

// console.log(user,secert,place);  // output here  also city is key not varable 'place'(varaible ) will not 
//                                   // be added in the object (student).
//                                 //'place'print it's value but it  is just varable not related to object


// console.log(student);
























































































 //practice questions: 






// //1
// let arr=[1,2,3,4];


// let arr2=arr.map((element)=>(element**2));

// console.log("square:",arr2);



// let result=arr2.reduce((sum,element1)=>(sum+element1));

// console.log("sum:",result);




// let result1= arr2.reduce((result,element3)=>(result+element3));
// console.log("average:",result1/arr2.length);




























//2 


// let arr1=[1,2,3,4];

// console.log("before update the array:",arr1)
// let arr3=arr1.map((element)=>(element+5));

// console.log("updated array:",arr3);






















//3.
//create array to uppercase of oringnal array




// let str_array=["bob","mom","fof","lol"];

// let newstr_array=str_array.map((element)=>(element.toUpperCase()));

// console.log("ARRAY before updated:",str_array);

// console.log("ARRAY update updated:",newstr_array);




























//4.


                            
// const doubleAndReturnArgs =(arr,...args)=>
                         
//                           { let arr3=arr.concat(args.map((el)=>(el*2)));
                          
//                            return arr3;

                       
//                                          };



//  console.log(doubleAndReturnArgs([1,2,3,4],2,4,7));  
 
 




// //method: using spread

//  const doubleAndReturnArgs1 =(arr,...args)=>[...arr,args.map((el)=>(el*2))];
  
  




// console.log(doubleAndReturnArgs1([2,8,3,5],4,6,7));                                       




 /*
 

To concatenate two arrays in JavaScript, you can use the .concat() method or the spread operator .... Here are both methods:

 Using .concat():
javascript
Copy code
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = array1.concat(array2);
console.log(combined); // [1, 2, 3, 4, 5, 6]


Using the Spread Operator:
javascript
Copy code
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];    ' [] '  is used here
console.log(combined); // [1, 2, 3, 4, 5, 6]
Both methods are commonly used — the spread operator is especially popular in modern JavaScript.















//!important 
//we seen example:


// let oddarray=[1,3,5,7,9];
// let evenarray=[2,4,6,8,10];
// //we want array contain both odd and even array come togther:

// let num1=[...oddarray,...evenarray];    //we can spread the element of each array  both array together into one array.

// console.log(num1)



 
 
 */












































//5.


const object1={
                name:"lokajay",
                cpga:9.8

                   };


const object2={
                    name1:"jayta",
                    cpga1:9.9
    
                       };



const merageObjects=(obj1,obj2)  =>
                                  { 
                                    
                                    newobject={...obj1,...obj2} ;
                                    return newobject;
                                           
                                           }

  
console.log(merageObjects(object1,object2));


/*
-->This spreads the properties from both obj1 and obj2 into a new object. BUT:

-->If both objects have the same key, like name and cpga in your case, the second one (obj2) overwrites 
the value from the first (obj1).

-->If you want to merge and keep both, you'll need to rename

-->so output is only :{name: 'jayta', cpga: 9.9}
*/




/*we seen already:




//-->spread:  with object literals.



// const data={
//           email:"lokajaybhadar5@gmail.com",
//           password:"abcd",
//          };


//  console.log("object before the  modifaction\n",data); 



// const dataCopy={...data,id:123};     // ...data  it return "each memeber"-->(key,value) of the object literals spread 
//                                    // indivdually to the new object
//                                    //also add id:123 (key,value) pair added to   'new object' datacopy
//                                    //sso we added new addition new property added to new object
                                 
// console.log(dataCopy);  //the new object "datacopy





*/