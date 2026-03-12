//Axios: library to make same http requests as we have send by usin`function fetch()

//using AXios better than fetch()

//we can  install axios  but we get axios by : In GITHUB axios and in CDN Using jsDelivr CDN (ES5 UMD browser module):













//eariler using only  fetch() function  return readable json object 

// json()  function  use change json object to json data


// let url2="https://catfact.ninja/fact";



// async function getFacts() {

//     try {
//     let response1=await fetch(url2);
//     console.dir(response1);
//     let data=await response1.json();

//     console.dir(data);
//     console.log(data.fact);


//     let response2=await fetch(url2);
 
//     let data2=await response2.json();

//     console.dir(data2);
//     console.log(data2.fact);

// }



// catch (error) {
// console.log("ERROR -",error);

// }
// console.log("bye!!");
// } 
































//Now using ""  axois.get(url) " fucntion only  return promise object

//example1:


//  let url2="https://catfact.ninja/fact";



// async function getFacts() {

//     try {
//     let response1=await axios.get(url2);  //to get the request and return promise  object
//     //console.log(response1);
//     // console.log(response1.data);
//     console.log("data1=",response1.data.fact);
       
   



//     let response2=await axios.get(url2); //to get the request and return promise object
//       //  console.log(response2);
//     //console.log(response2.data);
//     console.log("data1=",response2.data.fact);
//     }



// catch (error) {
// console.log("ERROR -",error);

// }
// console.log("bye!!");
// } 

















































//example2:


// let url="https://catfact.ninja/fact";

// async function getFacts()
// {

// try {
// let response=await axios.get(url );    
// console.log(response);

// } 

// catch (error) {
//     console.log("ERROR - ",error);
    
// }

//}





// even though we have fetch() function we  still need to use axios.get()  function becoz

//fetch(url) -> return readable stream  but it not json data so we need " prase stream(json object) to json data  " by fuction  json object.json()


//but axios.get(url)-> return promise object directly.we get data directly. here there is no need to prase the json object like in fetch() function








//getFacts();











































































// //now we connect Json code to html:
// let btn=document.querySelector("button");
// let fact=document.querySelector("#fact");

//  btn.addEventListener("click",async()=>{


// let fact1= await getFacts(); 

// //return promise object as async fucntion always return promise
// //for this we need await to promise to resloved 

// //by making callback function of "button" as  async function
// //and put "await" keyword  in front of functionb getfacts() 

// //Inside the  "async function"  all asynchrous fucntion will added with keyword  "await"

// //console.log(fact1);


// fact.innerHTML=`<b>${fact1}</b>`;


//  });




    
//  let url="https://catfact.ninja/fact";

//  async function getFacts()
//  {
 
//  try {
//  let response=await axios.get(url );    
// return response.data.fact;
 
 
//  } 
 
//  catch (error) {
//     return "No fact found !!!";
     
//  }
 
//  }





























































































 //samething can be done dog API's:




 //now we connect Json code to html:
//let btn=document.querySelector("#btn");
// let fact3=document.querySelector("#pic");




//  btn.addEventListener("click",async()=>{


// let fact1= await getImage(); 


// fact3.src=fact1;


//  });




    
//  let url="https://dog.ceo/api/breeds/image/random";

//  async function getImage()
//  {
 
//  try {
//  let response=await axios.get(url);   
//  //console.log(response.data.message); 
//  //return response.data.fact;
// return response.data.message;
 
 
//  } 
 
//  catch (error) {
//   //  return "No fact found !!!";
// return "No Data Found!!!";
     
//  }
 
//  }

































































































//  //using axis we can send Headers

//  //we make "header object"
//  //In header object :  keys---> headers
//  //                    values--->make another object where we pass all object



//  //example1:

// //  let url1="https://icanhazdadjoke.com/";

// //  // In icanhazdadjoke.com  we need send header ---> ( Accept  :  Application/json)

// // async function getJoke()
// // {
   
// //    try {

// //       //let result=await axios.get(url1);
// //       //console.log(result.data);   //result came in html format

// // // we want data in appliction json format


// // const config={headers:{Accept:"application/json"}}  //object  --> object 1st keys are headers and values are headers pairs
// // //we pass config object with url
// // let result=await axios.get(url1,config);
// // console.log("joke of the day is :",result.data.joke); 



// // } 
// // catch (error) {
// //    console.log("ERROR!!",error);
// // }

// // }



// // getJoke();







































































































//Axios : if we want  "UPDATE QUERY STRINGS IN URL'S"

let url3= "http://universities.hipolabs.com/search?country=India&name=";

let btn1=document.querySelector("#btn2");
let inp2=document.querySelector("#state");
let list3=document.querySelector("#list1");




//console.dir(inp.value);

// console.dir(para);





btn1.addEventListener("click",async()=>{

   let state=inp2.value;
let result1=await getCollage(state);


//console.log(result1);


showcollege_statewise(result1.data);

});









   





function showcollege_statewise(collgelist)
{

   //console.log(collgelist);

for(collegenames of collgelist)
   {

  
   let item=document.createElement("li");  
   item.innerHTML=`collegename:${collegenames.name}<br>`; 
  

 
   list3.appendChild(item);
   
   }

}





async function getCollage(state) {

   try {
   
      
let result=await axios.get(url3+state);


return result;
   } 
   catch (error) {

return "ERROR!";
   }
   
}



















































//using state we get name of assam university


