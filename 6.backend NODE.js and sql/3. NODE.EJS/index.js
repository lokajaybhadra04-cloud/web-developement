const { error } = require("console");
const express = require("express");
//console.log(express);
const app=express();

const port=8080;

const path=require("path");




//view directory:

app.set("views",path.join(__dirname,"/views")); //we make "views folder" static







// we set  "view engine" to "EJS":-->


//like "express" is a package we "need" to  "REQUIRE"

//but EJS we donot require because express internally require the express

//app.set() use set many things,it set view engine (template engine ) to EJS format



//with EJS we donot send response(strings,array ,html code,object,bolean value) 

// we render (sending the file: ejs file as response).


// app.get("/",(req,res)=>{

// res.send("this is home");

// });


app.set("view engine","ejs");









 //serving  Static Files:->


 //app.use(express.static("public"));





 //so by default every static files is taken from folder "public" by  EXpress function
 //we should have folder "public" in NODEE.JS folder always to serve the static folder.

 //like earlier, ejs template --> we should have "views" folder always


//we made style.css inside public folder. 





// we use style.css in the instrgram1.ejs and
// 
//  Remove style tag in instrgram.ejs and link the files


//like same reason  for view diertory:->
// but we try exceute in localhost/8080 it throw error:

//  "Failed to lookup view "instrgram1.ejs" in public directory "/home/loka/Downloads/web developement/6.backend NODE.js and sql/public"

//  it search instrgram1.ejs in  public directory of parent diretcory (backend node) where server index.js has run
//  but it cannot find.

//  -->our code in the condition that only at NODE.EJS diecotory with public diecrotry present & the server index.js with the exceute in localhost/8080 it run successfully.




//  --> but if we change this: then we need to write line below,



//app.use(express.static(path.join(__dirname,"/public"))); //we make "public folder" static







 //Now when serving the static files there not complusary to store one single folder 
 //example:

 //we make 2 folder inside  "public"
 // css ,js  added style.css to css folder

 

 //we can write both at same time in server (index.js) files:


app.use(express.static(path.join(__dirname,"/public/js"))); 

app.use(express.static(path.join(__dirname,"/public/css"))); 

//we serve by 2 directory

//we create app.js in public/js  folder










app.get("/",(req,res)=>{

    res.render("home.ejs");
    
    });


    
    app.get("/hello",(req,res)=>{

        res.send("hello");
        
        });



        // for rolldice

  app.get("/rolldice",(req,res)=>{

    let diceval=Math.floor(Math.random()*6)+1 ;

    res.render("rolldice.ejs",{num:diceval}); //1st arugemnt pass ejs file name
                                    //2nd arugemnt we can pass is "OBJECt"
                                    //inside OBJECT we can send (key :value) pair 
      });
                                     //now diceval  AS KEY(=num)  can access inside roldice.ejs file
   
                                    // gernally we send  "key name"=="value" 
                                    // example:  {diceval:diceval}  or  send only {diceval}


















//activity: instragram ejs


app.get("/ig/:username",(req,res)=>{

    let { username }=req.params;
   // console.log(username);
 


   //print list of followers
   const followers = ["adam","bob","steve","jhon"];//we assume followers data from database
  
   //with "username"  we also sending/rendering  the  "followers" to ejs file

   res.render("instagram.ejs",{username,followers});





});














  
    // To access data in   data.json:
    //we write:
    

app.get("/ig1/:username1",(req,res)=>{

    
    
    // instaData is object contain all data send by data.json file but 
    // we want only some selected data only based on username 
    // so  let store username
    let { username1 }= req.params;


    const instaData=require("/home/loka/Downloads/web developement/delta-main/EJS/data.json");
    
    
   // console.log(instaData);   
    
    //it give ReferenceError:
    
    //"username" is not defined in instagram1.ejs 
    
    // As 
    
    //we donot have render the "username" variable in the  index.js file we comment it out
    
    //we need delete that varible in instagram1.ejs file
    
    

//every data on data.json store in object "instaData" of JS
//now we pass this object.

    
  let data=instaData[username1];

  // to check we type url : http://localhost:8080/ig1/lokajay
  //  that present data.json(gernally in database) or not 

  //if not then it should never render it.

  //console.log(data);  

  if(data)
{
    res.render("instagram1.ejs",{instaData:data});

}
    
    //we want data only for that username1 only so
    
    else{
    //if data is not present we make another error.ejs

    res.render("error.ejs");

    }  


    });
    






























    


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

