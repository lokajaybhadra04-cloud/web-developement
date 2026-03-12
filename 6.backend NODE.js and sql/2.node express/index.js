const express = require('express')

//const express       'express' is a function

const app = express()  //express()   function return value store in  'app'

//this 'app' --->  object    
// which help to creating a server side web-application


//console.dir(app);


const port = 8081;   //ports:logical endpoint of a networkj connection that 
// is used to exchange infromation between a web server and web clients


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)   //it making server
    //which will listen and when server start then callback will excute
  });
  
  // close server ctrl+c

  //Now send request this server we goto  localhost:3000(it means server we send request is our own local machine)

  //we get error  "Cannot GET" means server there but for your request donot response.NO Resposne return.






  //now create response: manys ways:




//use    "app.use":  alltype request will be "listen"







// app.use((req,res)=>{ //req(request)& res (response) by default parameters
//     //console.log(req);//request object
//     console.log("new incoming request");



//     //RESPONSE:
//     //as request has come  response will be:


//   //res.send("this is basic response ");

//   //we send response by send object;

//   let fruits={name:"apple",color:"red"};

//   //res.send(fruits);

//   //express convert js object to json representation.



//   //let send html resposnse:

//   let htmlcode="<h1>Fruits</h1> <br> <ul><li>apple</li><li>orange</li></ul>";
//   res.send(htmlcode);
            
    

// });




//so  app.use   listen an track request's.
//express  by default create the res,req both paramerters.



//based on request how we send response.
//SENDING a RESPONSE:



//let both parameters:
//1.request 2.response


//we send API request  by hoppscotch or browser  then OUr http reqquest(requet are text based so that other language have server they can understan.


//express change " HTTP requerst" into  "object"    called prasing.


























// routing:
//it is process of selecting a path for traffic in a network or between or across multiple networks.
// generally  big website has many links  in diffrent route. and pages or PATH  where we can send request



//eariler  in   app.use()  for every route / PATH we get same response.
//example:

/*
http://localhost:8080
http://localhost:8080/fruits
http://localhost:8080/help

etc... for Any path or route we get same response.

*/




//gernally we get different response for different route/PATH.

//we use diffenet method of  "app.get(path,callback function)"

//FOR SINGLE PATH WE  HAVE ONLY ONE RESPONSE ONLY. 


//see in expressjs.com 


//  "/" ---> root path






app.get("/",(req,res)=>{

  res.send("hello i am root");

});



app.get("/apple",(req,res)=>{

  res.send("you contacted  apple  path");

});

app.get("/orange",(req,res)=>{

  res.send("you contacted  orange path");

});






// like app.get ()    that we  can  use   app.post()

app.post("/",(req,res)=>{

  res.send("you send post request to root");

});










app.get("/:username/:id",(req,res)=>{
  //usrename is varaible it's info is already  save in "req"
  //In req.params

  //console.log(req.params);  //request parameters
  //res.send("hello i am user");





  //we can save it varables also:
  let{username,id}=req.params;

 // res.send(`welcome to the page of @${username}.`);


 //we can send html code

 let htmlcode=`<h1> welcome  to the page ${username}.</h1>`;

 res.send(htmlcode);//that is how customize page gerenate
 
});







//query strings:






app.get("/search",(req,res)=>{

  //console.log(req.query);  //all query string in url of  hopscotch as

//http://localhost:8081/search?q=apple&color=green


//request object's   query parameter q=apple color=green is saved


//let save query inside the varaible have to be " q "
//As ALWAYS  1st query string saved in  " q " 


let { q ,color}  =req.query;



//after the search there is no query then:

if(!q)
{
  res.send(`<h1>nothing searched</h1>`);
}




  res.send(`<h1>this are the search resuls for query: ${q} & color is: ${color}<h1>`);

});





//default path when we type any path  for which no response we donot give
//we can use   app.use() it should be last function

app.use((req, res) => {
  res.status(404).send("Path does not exist");
});



