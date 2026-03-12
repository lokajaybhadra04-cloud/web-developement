//call stack: in function calling it used

//stack :dats structures(LIFO),track the function calling






//visualizing the call stack

// function one()
// {
//     return 1;


// }

// function two()
// {
//     return one()+ one();
// }

// function three()
// {
//     let ans=two()+ one();
//     console.log(ans);
// }


// three();




























//breakpoints: js call stack can view using breakpoints

//used in debugging

// function one()
// {
//     return 1;


// }

// function two()
// {
//     return one()+ one();
// }

// function three()
// {
//     let ans=two()+ one();
//     console.log(ans);
// }


// three();


// goto console-->soucres->slect jsfile-->select line you want add beakpionts-->press next functio n step button-->see the call stack (next option)

















































//Js is single Threaded:


//programming language divded into single thread lanaguage and multi-thread language




//In single thread
// let a=10;

// console.log(a);
// let b=20;

// console.log(b);

// console.log(a+b);

//exceute  one after another    ---->   "synchrous mode"







//for making it  multithread  it used     'callbacks'or 'setTimeout function'




// setTimeout(function(){
//     console.log("javascript");
// },2000);

// setTimeout(function(){
//     console.log("hello world");
// },2000);


// //settimeout function manage by 'Browser'  (written c++,java capable of multithreading)


// console.log("hello...");//js code is single threaded exceute immediately  


//waiting time handle by browser

//so js is always single threaded





// js  has        "asynchrous mode" of js(javascript)  

//so Javascript  has many problems and bugs and used concepts to deal this problems.

































































//js asynchrous mode problem nos 1:  callback Hell



// let h1=document.querySelector("h1");
// //we want that after 1sec  color change

// setTimeout(function(){
//     h1.style.color="red"; 
// },1000);


// //again after 1sec color is changing


// setTimeout(function(){
//     h1.style.color="green"; 
// },2000);


// //again after 1sec color is changing


// setTimeout(function(){
//     h1.style.color="purple"; 
// },3000);




//we will mnay work do like this after some delay but it is not feasible to calclate delay for every work

//better way :









// let h1=document.querySelector("h1");




// function changeColor(color,delay,nextColorChange) //this function will not work asynchrously  so use settimeout inside the function
// { 
//     setTimeout(()=>{
                            

//     h1.style.color=color;

//     if(nextColorChange)
//     {nextColorChange();
//     }

//     },delay);

// }




// setTimeout(changecolor("red"),1000);

// setTimeout(changecolor("green"),2000);

// setTimeout(changecolor("purple"),3000);








//better way write this lines of codes:




// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("purple",1000);            //here we donot need calaulate delay ever

//         //it like callback Nesting  is called   'CALLBACKHELL'

//     });
// });











//but writing and calculasting delay 1000(1sec),2000(2sec),3000(3sec) do look good 

//we want automatically first red color change happen,2nd green cloor happen,3rd purple..

// to get this delay  automatically   we use    " CALL BACK"

//name as "nextColorChange" is itself afunction  inside the  function 'changeColor'



//call the nextColorChange inside the  function 'changeColor'


//" nextColorChange "" is pass through the calling 'function changeColor of 'red''   as    function
// "changeColor" of the 'green'






//callback hell   problem in  asynchrously  mode in javascrpit













//solution for callback hell:

// promises  &  async &  await keywords are used  we later.

























































































































//let see example of "callbacks"  



//let imagine database  AND  see callbacks & promises





// function savetoDb(data,success,failure)
// {
//     let internetSpeed = Math.floor(Math.random()*10)+1;



//   if(internetSpeed>4)     
//     {
//         success(data);

//     }
//     else{
//      failure();   
//     }



// }


// savetoDb("lokajay", 
//   (data)=>{ 
//         console.log("suceess:data is saved",data);
//            savetoDb("hello world",
//                             (data)=>{console.log("suceess2:data is saved",data);}
//                                ,
//                            ()=>{console.log("failure2:weak connection. data not saved");}                
//                     ); 
//          }
// ,

// ()=>{ console.log("failure:weak connection. data not saved");}
// );




// after data is saved  we may need to others task also

//so, we may need  to use   2 callback

//if data is save sucessfully    call      the sucess function
//data is not save sucessfully    call      the faliure function









//Now suppose there is only one data is save and we want save more data to saved if data 
//1st data saved then only we save the next data


//In savetoDb() we again use savetoDb()  nested function  so that 1st data "lokajay"saved then only we save the next data


//this problems is   called   callback HEll







































// how "promises"  solve  this problem

//Promises:

//the promise    "object"     represents the eventual completion (or failure) of an asynchronous 
// operation and it's resulting value.


//promise object  has   'resolve'-->success callback   and  'reject'-->failure callback


// how this all work



// function savetoDb(data)
// {
   

//   return new Promise((resolve,reject)=>{
//     let internetSpeed = Math.floor(Math.random()*10)+1;


//   if(internetSpeed>4)     
//     {
//         resolve("success: data was saved");

//     }
//     else{

//      reject("failure : weak connection"); 

//     }



//   });


// }


//savetoDb("lokajay bhadra");
  











//in this promise object  it will have callback  which has two values :
//                                                                          success,failure
                                                                      

//promise object  get one of the values in return success or failure  anyone can be as result


//promise has 3 states:
//pending
//rejected(error caught)
//fulfilled(reslove)












































































































//PROMISES HAS TWO METHODS:
///then() --> use for fulfillied and after that work will happen
// catch() --> use for reject and after that work will happen


// function saveToDb(data)
// {
   

//   return new Promise((resolve,reject)=>{
//     let internetSpeed = Math.floor(Math.random()*10)+1;


//   if(internetSpeed>4)     
//     {
//         resolve("success: data was saved");

//     }
//     else{

//      reject("failure : weak connection"); 

//     }



//   });


// }

// let request = saveToDb("lokajay bhadra");

// //console.dir(request);     //request is a promise object


// //now promise methods

// //it take callback function as parameter


// request.then(()=>{
//   console.log("promise was resolved");
//   console.dir(request);
// })

//                    //remember no need to write  request.catch only catch is use
// .catch(()=>{
//   console.log("promise was rejected");
//   console.dir(request)
// });                       





























































//improved version of promise:  promise chaining

// function saveToDb(data)
// {
   

//   return new Promise((resolve,reject)=>
//     {
//       let internetSpeed = Math.floor(Math.random()*10)+1;


//        if(internetSpeed>4)     
//       {
//         resolve("success: data was saved");

//       }
//      else{

//           reject("failure : weak connection"); 

//          }



//     });


// }






// let request = saveToDb("lokajay bhadra");

// //console.dir(request);     //request is a promise object


// //now promise methods

// //it take callback function as parameter


// request.then(()=>{
//  // console.dir(request);
//   console.log("data1 saved promise was resolved ");

//   //after data1 is then again we call savetodbpromise
  
//   let request1=saveToDb("helloworld");
  
//   request1.then(()=>{ //console.dir(request1);
//      console.log("data2 saved promise was resolved ");})
  


// })



// //if 1st "then"fails it go to "catch"
// //if 1st "then" fulfilled  and  2nd "then" fails it will automically goto "catch"

// //remember no need to write  request.catch only catch is use  

// .catch(()=>{
//   console.dir(request)
//   console.log("promise was rejected");
  
  
// });                       
















































//   So, promise chaining:



//let request = saveToDb("lokajay bhadra")











// function saveToDb(data)
// {
   

//   return new Promise((resolve,reject)=>
//     {
//       let internetSpeed = Math.floor(Math.random()*10)+1;


//        if(internetSpeed>4)     
//       {
//         resolve("success: data was saved");

//       }
//      else{

//           reject("failure : weak connection"); 

//          }



//     });



//   }


// saveToDb("lokajay bhadra").then(()=>{
 
//   console.log("data1 saved promise was resolved ");

//  return ( saveToDb("helloworld"));

 
// //remember no need to write  request or request1 orsaveToDb("lokajay bhadra") .catch only catch is use  
//       //we can simply write:                
// })


// .then(()=>{
//   console.log("data2 saved promise was resolved ");})



// .catch(()=>{

//   console.log("promise was rejected");
  
  
// });                       
//it is better





































//results & errors in promises:
//promises are rejected and resolved with some data (valid results or errors)



//promises fulfilled --->  use  then()


//promisesd not fulfilled  ---->  use  catch()





// function saveToDb(data)
// {
   

//   return new Promise((resolve,reject)=>
//     {
//       let internetSpeed = Math.floor(Math.random()*10)+1;


//        if(internetSpeed>4)     
//       {
//         resolve("success: data was saved");

//       }
//      else{

//           reject("failure : weak connection"); 

//          }



//     });



//   }


// saveToDb("lokajay bhadra").then((result)=>{
 
//   console.log("data1 saved promise was resolved  the result is:",result);

//  return ( saveToDb("helloworld"));

 
// //remember no need to write  request or request1 orsaveToDb("lokajay bhadra") .catch only catch is use  
//       //we can simply write:                
// })


// .then((result)=>{
//   console.log("data2 saved promise was resolved the result: ",result);
//   return ( saveToDb("jayanta"));   })






//   .then((result)=>{
//     console.log("data3 saved promise was resolved the result: ",result);})







// .catch((error)=>{

//   console.log("promise was rejected error is:",error);
  
  
// });    




//this sitution  handle in API   1st exceute only then 2nd execeute and when 2 exceute then only 3rd excute
//this sitution deal with promisies & promises chaining, use of then() and catch () methods.
//In async JAVASCRIPT  we can do this with help of this above;



























































































//REfactoring  old codes:

//promises:  let apply promises to our callback hell.



let h1=document.querySelector("h1");




function changeColor(color,delay) //this function will not work asynchrously  so use settimeout inside the function
{ 

return new Promise((reslove,reject)=>{  setTimeout(()=>{  h1.style.color=color;  reslove(color); },delay);   }) ;

// color will change always so reslove always as there not use random function for color change

}




// let request=changeColor("red",20000);

// console.log(request)






//it also asynchrous code


//below is callback hell


//it can be solved by promise and promise chaining also methods of them are then  & catch like example below







changeColor("red",5000).then((result)=>{
 
 console.log(result,"has changed succesuflly");

 return ( changeColor("green",5000));

              
 })

 .then((result)=>{
 
  console.log(result,"has changed succesuflly");
    return ( changeColor("yellow",5000));  })
  
  
  
  
  
  
    .then((result)=>{
     
      console.log(result,"has changed succesuflly");})
  
  
  
  
  
  
  
  .catch((error)=>{
  
    console.log("promise was rejected error is:",error);
    
    // color will change always so reslove always as there not use random function for color change
 // not error object message
  });    





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































    




