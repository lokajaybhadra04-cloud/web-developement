// event bubbling:  for nested elements in htmlpage  if we create many eventlistener then 
//  phenomeana caled event bubbling.

// let div=document.querySelector("div");
// let ul=document.querySelector("ul");

// let lis=document.querySelectorAll("li");


// div.addEventListener("click",function(){

//   console.log("div was clicked");
  

// });


// ul.addEventListener("click",function(){


//   console.log("ul was clicked");
  
// });


// for(let i=0;i<lis.length;i++)

// {


// lis[i].addEventListener("click",function(){

  
//   console.log("li was clicked");

// });

// }



//when we click 'div'  only         the o/p is:   div is clicked  ( "NO event bubbling")

//when we click 'li' only           the o/p is:   li is clicked ,
//                                                ul(parent of li)  is clicked   , 
//                                                div (parent of ul and grand parent of li) is clicked(all 3 are clicked)
//                                        ( "event bubbling")


//when we click 'ul' only           the o/p is:   ul is clicked , 
//                                                div( parent of ul) is clicked
     
//                                        ( "event bubbling")


//problems is called    "event bubbling"



//solve this problem of event bubbling we need to used
//method called :

//  event.stopPropagation();



//event bubbling will stop.



// let div=document.querySelector("div");
// let ul=document.querySelector("ul");

// let lis=document.querySelectorAll("li");


// div.addEventListener("click",function(){

//   console.log("div was clicked");
  

// });


// ul.addEventListener("click",function(event){

//   event.stopPropagation();
//   console.log("ul was clicked");
  
// });


// for(let i=0;i<lis.length;i++)

// {


// lis[i].addEventListener("click",function(event){

//   event.stopPropagation();
//   console.log("li was clicked");

// });

// }


















































// //Activity: building todo with DOM


// let inp=document.querySelector("input");

// let btn=document.querySelector("button");

// let ul=document.querySelector("ul");




// btn.addEventListener("click",function(){





// //add to list: we need to  create list item for inp.values


// let item=document.createElement("li");

// // console.dir(item);
// // console.dir(inp);
                                                                                                                                                            
// item.innerText=inp.value;

// // console.dir(item);
// // console.dir(inp);



// let delbtn=document.createElement("button");

// delbtn.innerText="delete";
// //delbtn.classList.add("delete");



// item.appendChild(delbtn);

//  ul.appendChild(item); // add item to unorderlist


//  inp.value="";  //after we enter the input we need to reset to empty string so the input is clear after the input




// });





// //delete item logicS:






// //Important
// //  delete click on  task(eat ,sleep) in html before is deleted

// //but delete click  on added task are not deleted 










// let delbtns=document.querySelectorAll(".delete");
// for(let delbtn of delbtns)
// {

//     delbtn.addEventListener("click",function(){




//         let parent = this.parentElement;    //deletebutton  parent is  item(li) 
//   //console.dir(parent);
//         parent.remove();  //remove item (li) in list
       
//     });
// }
//it will not work this logic














// //but if we want for our new element(delbtns(html collection)) also 'eventlistener '  work than:
// //we need to  'event delegation' is method  here we want our   'eventbublling'   to work .

// //if we want some evenetlistener to happen for    'child'      we  write those triggrd event(event listener)
// //  for our  ' parent'.

// //using 'event bubbling'    we do  'event delegation'.



// //so,  for event delegation:

// // Instead of delbtns  we do event delegation on it's parent (list item  (li)) or (grandparent  unorderlist(ul) )



// //let do eventdelegation on grandparent(unorder list(ul)):  we canot use (parent)item because 2 item(eat ,sleep) added earlier
// //  and new items created later wiil not be detect by   query selcetor fucntion to get item(li  object as new li object will not be detected )








// ul.addEventListener("click",function(event){

//    // console.log(event.target.nodeName);  // o/p:  BUTTON (delete button),
//    //                                               LI(item of list),
//    //                                               UL(unorder list)



//   // when WE click  "delete button" only then  item should be  deleted.



//    if(event.target.nodeName==='BUTTON')
//    {

//  let listitem=event.target.parentElement; 
 
//  //it will give parent element of button  that is 'LI-->item of list' of  that 'we want to delete particularly'we clicked

//      // console.log(listitem);
                                                                                                                                                                                      


//        listitem.remove();  //delete element


//    }




// });








































































































































































//simon say game:



let gameSeq=[]; //initlized to empty arrays
let userSeq=[];

let started=false;// is game is started?

let level = 0;

let usermaxscore=[0];

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");


let btns=["red","yellow","green","purple"];





document.addEventListener("keypress",function(){
  

h3.innerHTML=`user max score ${Math.max(...usermaxscore)}`;


if (started==false)
{
 console.log("game started");
 started=true;   // so that our game will start only once
}

levelUP();

});




function gameFlash(btn)                        //flash btn after 1sec
{

    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}



function userFlash(btn1)                        //flash btn after 1sec
{

    btn1.classList.add("userflash");

    setTimeout(function(){
        btn1.classList.remove("userflash");
    },250);
}






function levelUP()
{
    userSeq=[];  //it will reset usersequence  and user had insert all "usersquence" that match the "game sequence"
  level++;

h2.innerText=`Level ${level}`;

//random button choose after
//  then only it flash the button


let randIdx=Math.floor(Math.random()*4);

let randColor=btns[randIdx];

let randBtn=document.querySelector(`.${randColor}`);

// console.log(randBtn);
// console.log(randColor);
// console.log(randIdx);




// In gamesquence array we need to store randomcolor generated


gameSeq.push(randColor);


console.log("game sequence",gameSeq);



gameFlash(randBtn);






}




//game logic










//now user input logic:





function check(idx)
{

    //in very level game generate new color 
   // to know which level

   //console.log("current level is:",level);














if(userSeq[idx]===gameSeq[idx]) //check last index of game and user sequence are same
{
      if(userSeq.length==gameSeq.length)   //until both game and user sequence length  are not  do nothing,wait check btn to be click
                                           //until it match the length
      {
        setTimeout(levelUP(),5000);  //then we levelup after 1 sec
      }


}
else{
    //console.log("game over");
    h2.innerHTML=`Game Over! your score was<b> ${level-1} </b> <br> Press any key to start`;
    let body=document.querySelector("body");
 
    body.style.backgroundColor="red";

    setTimeout(function(){
        body.style.backgroundColor="white";
    },150);
   
 usermaxscore.push(level-1);

h3.innerHTML=`user max score ${Math.max(...usermaxscore)}`;



   reset();
}



}









//now we use our eventlistener


function btnPress() {

    //console.log("btn was pressed");

    //detect which button is pressed
   // console.dir(this);
 // console.dir(this.getAttribute("id"));





let btn=this;
userFlash(btn);

let usercolor=btn.getAttribute("id");

userSeq.push(usercolor);

//see usersquence
console.log("user sequence",userSeq);


//for usercolor press by user we check if it same game sequence.

check(userSeq.length-1);  //we check index last element





//to see user pick color squence
//console.log(usercolor);




//to know which button flash
//console.log(btn);


    
}






let allbtns=document.querySelectorAll(".btn");

for (let btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}


function reset()
{
    started = false;
    gameSeq=[];
    userSeq=[];

    level=0;
}





