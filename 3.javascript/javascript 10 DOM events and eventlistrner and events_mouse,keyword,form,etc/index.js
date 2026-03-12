//DOM events:
/*
events are signals that something has occured(user imputs/actions).




*/






//inline events:  we seen in html page





















//DOM events:

//onclick (when an element is clicked).


//onmouseenter (when  mouse enter an element).





//1. access that button in html   using    'onclick'  :






// let btn=document.querySelector("button");
// //console.dir(btn);





// // btn.onclick= fucntion =>{
// //     console.log("button was clicked");
// //     alert("button is clicked");
// // }



// //OR


// function callclick() 
// {
//     alert("button is clicked");
//     console.log("button was clicked");
// }

// btn.onclick=callclick;








// let btns=document.querySelectorAll("button");// colection of button

// function callclick() 
// {
//     alert("button is clicked");
//     console.log("button was clicked");
// }


// function likeclick() 
// {
//     alert("liked it");
//     console.log("liked it");
// }



// function postclick() 
// {
//     alert("posted");
//     console.log("posted");
// }





// btns[0].onclick=callclick;  // we are assigning name of function here it not exceuting so () not needed
//                              // callclick         (right)
//                             //  callclick()        (wrong)

// btns[1].onclick=likeclick;


// btns[2].onclick=postclick;

















//2. using onmouseenter




// let btns=document.querySelectorAll("button");// colection of button

// function callclick() 
// {
//     console.log("you enter button");
// }


// function likeclick() 
// {
   
//     console.log("you enter like button");
// }



// function postclick() 
// {
//     console.log("you enter post button");
// }





// btns[0].onmouseenter=callclick;  // we are assigning name of function here it not exceuting so () not needed
//                              // callclick         (right)
//                             //  callclick()        (wrong)

// btns[1].onmouseenter=likeclick;


// btns[2].onmouseenter=postclick;


















































































// // Event listener

// /*
// until we seen 2 ways to  DOM events can track:

// 1.inline events: 'inline events' we create  button  inline events make html code bulky



// 2.  onmouse  or onclick  methods propetry values set with help of function;
// we set property once only 
// example:
// let btns=document.querySelectorAll("button");
 
// for(let btn of btns)
// {
//     btn.onclick=sayhello;
//     btn.onclick=sayName;
// }


// function sayhello()
// {
//     alert("hello!");
// }

// function sayName()
// {
//     alert("apna college");
// }

// //output :  only alert message apan college  hello is never print or popup.this disavdagtes of
// //onmuouse or onclick methods etc....
// //methods propetry values set with help of function;
// //we set property once only not multiple function with not exceute



// /*
// 3.  so, Event listener.: it wait when event occured


// element.addEventListener(event,callback)

// example:-->


// btn.addEventListener("click or drag or mouseenter",function(){consle.log("button clicked");});


// */



// // for single object  'btn' button we can have multiple eventlistener










// let btns=document.querySelectorAll("button");// colection of button

// function callclick() 
// {
//     alert("button is clicked");
//     console.log("button was clicked");
// }


// function likeclick() 
// {
//     alert("liked it");
//     console.log("liked it");
// }



// function postclick() 
// {
//     alert("posted");
//     console.log("posted");
// }

// function callclick1() 
// {
//     console.log("you enter button");
// }


// function likeclick1() 
// {
   
//     console.log("you enter like button");
// }



// function postclick1() 
// {
//     console.log("you enter post button");
// }



// //btns[0].addEventListener("click",callclick);

// btns[0].addEventListener("mouseenter",callclick1);

// btns[0].addEventListener("dblclick",function(){ console.log("you double click me");});



// //btns[1].addEventListener("click",likeclick);
// btns[1].addEventListener("mouseenter",likeclick1);
// btns[1].addEventListener("dblclick",function(){ console.log("you double click like button");});




// //btns[2].addEventListener("click",postclick);

// btns[2].addEventListener("mouseenter",postclick1);
// btns[2].addEventListener("dblclick",function(){ console.log("you double click post button");});




































































































//Activity: generate a random color:-


// let btn=document.querySelector("button");
// let div=document.querySelector("div");
// let h1=document.querySelector("h1");


// function randomcolor()
// {

// let x= Math.floor(Math.random() * 255);
// let y= Math.floor(Math.random() * 255);
// let z= Math.floor(Math.random() * 255);

// div.style.backgroundColor=`rgb(${x},${y},${z})`;
// h1.innerText=`rgb(${x},${y},${z})`;

// }



// btn.addEventListener("click",randomcolor)






















































































//Event listeners for ELements:-

//until now we take eventlistener for button only .
//but now we can take eventlistener for elements other than button also.


// let para=document.querySelector("p");


// para.addEventListener("click",callback);//when paragraph is click callback triigged the event


// function callback()
// {
//     console.log("paragraph is clicked")
// }





// let box=document.querySelector("div");


// box.addEventListener("mouseover",callback1);//when div is click callback triigged the event


// function callback1()
// {
//     console.log("inside the div")
// }





















































//'this' in Event listeners

//when 'this' is used in a callback of event handler of something ,it refers to that something.


//eaxmple
/*

object-->event listener (event ,callback)

          callback--> this (it is 'object' that is calling)

*/




//if create eventlistener for button:




// let btn=document.querySelector("button");


// btn.addEventListener("click",function(){
//     console.log(this);   // 'this' will print the   'button html code'  in console

//     console.dir(this);       // it wil print the     'button'  object.

//  // access the proprty of button

//    console.dir(this.innerText);    
   
//    this.style.color='green';
//    this.style.backgroundColor='yellow';


    // btn === this  (object itself)

// });
 





  // we want eventlistener apply on multiple elements:--


  //we want whichever elemnt we click it turn blue?

  //so we may need to use queryselector function to select EACH the elements



//   let btn=document.querySelector("button");

//   let h1=document.querySelector("h1");

//   let para=document.querySelector("p");

//   let h3=document.querySelector("h3");


//   btn.addEventListener("click",function(){
  
     
//      this.style.color='blue';
    

//   });


//   h1.addEventListener("click",function(){
  
     
//     this.style.color='blue';
   

//  });


//  h3.addEventListener("click",function(){
  
     
//     this.style.color='blue';
   

//  });


//  para.addEventListener("click",function(){
  
     
//     this.style.color='blue';
   

//  });







    //OR






    //better to reduce the redendency code  bulkness reduce  by using   concept

    // this === calling object itself



//     let btn=document.querySelector("button");

//   let h1=document.querySelector("h1");

//   let para=document.querySelector("p");

//   let h3=document.querySelector("h3");



//   function changecolor()
//   {

//     this.style.color='blue';

//   }

//   h1.addEventListener("click",changecolor);
//   h3.addEventListener("click",changecolor);
//   para.addEventListener("click",changecolor);
//   btn.addEventListener("click",changecolor);






























































//keyboard events  and   default arugemnts in callbackfunction:





//click and double click event's :


// let btn=document.querySelector("button");


// btn.addEventListener("click",function (event){

//   console.log("button clicked");
//   console.log(event);   //event is 'pointer event' of our cursor

// });




// //callbackfucntion  has  'default arugmrnts'-->event or e


// btn.addEventListener("dblclick",function (event){

//   console.log("button double clicked");
//   console.log(event);   //event is ' mouse event' of our cursor

// });











//keyboard events

// let inp=document.querySelector("input");


// inp.addEventListener("keyup",function(event){


// console.log("character code  is:",event.keyCode); //charcater's ascii code

// console.log("character  is:",event.key); // character itself

// console.log("character  is:",event.code); // character itself but written in alphabet

// console.log(event);  // event is 'keyboard event'  for: keyup or keydown or keypress


// });






//mini game:

//  to know game character going using arrow :- up, down ,right or left


// let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event){

//   //console.log("code= ",event.code);

//   if(event.code=="ArrowUp")
//   {
//     console.log("move main character  to upward");

//   }else if(event.code=="ArrowDown")
//   {
//     console.log("move main character to downward");

//   }else if (event.code == "ArrowLeft")
//   {
//     console.log("move main character to left");
//   }else if (event.code == "ArrowRight")
//     {
//       console.log("move main character to right");
//     }else
//     {
//     console.log("move main character do not move ");
//   }

// });









































































































//Form events:




// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){

//   alert("form submitted"); 

//   console.log(event);                 //submit event

//   event.preventDefault();  // when click on register our 'html page' goto  'action page' to stop that we used this
//                               //action="/action" goto this page is cancel


// });



















































































// extracting FORM data:



// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){

// event.preventDefault();

// let inp=document.querySelector("#user");
// let pas=document.querySelector("#password");

// // console.dir(inp.value); // give   ' input (object) value' that type in html page
// // console.dir(pas.value); 

// alert(`hi your username is:${inp.value} and password set to is:${pas.value}`);

// });







//using  queryselector we access indicvidal element of FORM but

//there is other way access elemnt in the FORM 

//using only 'form'-->object



// let form1=document.querySelector("form");

// form1.addEventListener("submit",function(event){

// event.preventDefault();

// // console.dir(form1);




// console.dir(form1.elements[0].value);  //  form1.elements[0]===username (object)


// console.dir(this.elements[1].value); //this.elements[1] === password (object)

//                                        //'this'=== form1 calling object

// });





































































// //More events:

// /*

// change events:

// the change event occur when the value of elemnt has been changed (only works on  <input>,<textarea> and <select> elemets)




// input events:


// the input events fires the value of an  <input>,<select>,<taxtarea> element has been changed .



// */




// //example of    -->  change events :





// let form1=document.querySelector("form");


// form1.addEventListener("submit",function(event){
//   event.preventDefault();            //when regidter is click we will not go to 'action' page

// }); 




//   let user=document.querySelector("#user");
  
//   user.addEventListener("change",function(){ 
    
//     //when my input value  'changed' it trigged the function()'change event'  
//     //when inital value of username change as we click outside the input (username input button)
//     //change will detect and  below code will run 
//     //also we click  register change will detect so below code also run.


//     //it detect only  inital and final value of username change.

      

//      console.log("....example of change events...");

//       console.log("username is changed");
//       console.log("new username is :",this.value);

//     });



    




















//     //but if we want our small change to be detected then we use    ---> 'input events'


//     //example







//     user.addEventListener("input",function(){ 
      
//       //when my input value  'changed' it trigged the function()'input event'  

//       //our small change to be detected 

//       //  "only charceter keys triggered the input events"
  
//       console.log("example of input events");

//         console.log("username is changed");
//         console.log("new username is :",this.value);
  
//       });
  













      //based on input and change events we can make text editor  (ACTIVITY)
      //anything write the 'input'   it should come to above 'paragraph'


      // let inp = document.querySelector("#text");

      

      // inp.addEventListener("input",function(){

      //   let para = document.querySelector("#para");

      //  para.innerText=this.value;


      // });

      
 

























































































































      //assigments:

//1.



//mouseout events:
  
//  let usr = document.querySelector("#user");

//       let count=0;

//       user.addEventListener("mouseout",function(){

          
//           count++;
//           display(count);

//       });

//       function display(c)
//       {

//         console.log("number times the we outside the input is:",c);

//       }







//keypress




// let usr = document.querySelector("#user");

//       let count=0;

//       user.addEventListener("keypress",function(){

//           console.log(this.value);
         

//       });

      














//scroll events:




// const element = document.querySelector("#scroll-box");
// const output = document.querySelector("#output");

// element.addEventListener("scroll", (event) => {
//   output.textContent = "Scroll event fired!";
//   setTimeout(() => {
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// });


























//load events:(too vcomplicted)


// const log = document.querySelector(".event-log-contents");
// const reload = document.querySelector("#reload");

// reload.addEventListener("click", () => {
//   log.textContent = "";
//   setTimeout(() => {
//     window.location.reload(true);
//   }, 200);
// });

// window.addEventListener("load", (event) => {
//   log.textContent += "load\n";
// });

// document.addEventListener("readystatechange", (event) => {
//   log.textContent += `readystate: ${document.readyState}\n`;
// });

// document.addEventListener("DOMContentLoaded", (event) => {
//   log.textContent += `DOMContentLoaded\n`;
// });



























































//2.         

// let btn = document.querySelector("#button");


// btn.addEventListener("click",function(){

// this.style.backgroundColor="green";

// });












































//3.





      let inp = document.querySelector("#text");


      inp.addEventListener("input",function(event){

     let heading= document.querySelector("#heading");

          
//console.dir(this.value);  //this.value is a collection

//console.dir(this.selectionStart);  


let char = '';

for(let i=0;i<this.selectionStart;i++)
{

  let char1 = this.value[i];
  if ((char1 >= 'A' && char1 <= 'Z') || (char1 >= 'a' && char1 <= 'z') || char1 === ' ') 
    {
    char += char1;
  }

heading.innerText = char;


}
  

    



      });