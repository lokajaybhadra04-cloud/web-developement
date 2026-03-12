templating :

EJS(Embedded javaScript templates)

EJS is simple templating language that lets you gernate HTML markup with plain javascript. 

for this we need tools:handlebar,EJS(popularly used in only javascript logic)


--> npm init -y


-> npm i express

-> npm i ejs

->touch index.js(create index.js file)

--> In index.js we start server



















--> let see how ejs is used and how template is made by EJS

--> we write :



app.set("view engine","ejs");


--> we set  "view engine" to "EJS"(means)








-->
//like "express" is a package we "need" to  "REQUIRE"

//but EJS we donot require because express internally require the express

//app.set() use set many things,it set view engine (template engine ) to EJS format



//with EJS we donot send response(strings,array ,html code,object,bolean value) 

// we render (sending the file: ejs file as response).


// app.get("/",(req,res)=>{

// res.send("this is home");

// });


app.get("/",(req,res)=>{

    res.render("home.ejs");
    
    });
    





--> inside ejs dirtecory we create diretocry   "views"
because,
by default if we use view engine  ,view engine  think that all view 
or template store in views folder


so express will try to find the veiws folder to render the ejs files.



->we create template of ejs in home.js (contain html+js code mix in from of template)


->if write hmtl +js code inside res.send() then index.js file would became bulky .so
we write all this ejs file.

--> ejs extension in vscode install


--> we can start  index.js  outside of it's directnory by commands:

" nodemon NODE.EJS/index.js "  but,

if we put code:
    
    app.get("/hello",(req,res)=>{

        res.send("hello");
        
        });

try exceute in localhost/8081/hello in run succesfully


but we try exceute in localhost/8081 it throw error:

 "Failed to lookup view "home.ejs" in views directory "/home/loka/Downloads/web developement/6.backend NODE.js and sql/views"




 it search home.ejs in  views directory of parent diretcory (backend node) where server index.js has run
 but it cannot find.


 -->our code in the condition that only at NODE.EJS diecotory with views diecrotry present & the server index.js with the exceute in localhost/8081 it run successfully.




 --> but if we change this: then we need to write line below,




 -->view directory:




 app.set("views",path.join(__dirname,"/views"));

 "path" is package we need to reqiured before above code i,by:

  const path= require("path");




























  interpolation syntax:

  interpolation refers to embedding expression into marked up text.
  
  In EJs template we can embedded entire js code  .

  using interploation we make our html code dynamic.


  -- tesing go to in web brwoser  " ejs.co   "

  like html tags  ,we  EJS tags.


  EJS tsg:

  <%= -->Outputs the value into the template (HTML escaped-- final output is string)

  %>  --> Plain ending tag


  example:  IN home .ejs



















  NOw, gernally in backend  data come from database.so data come to index.js,then when  render the response 
  and send the data  to render files(like home.ejs)

passing  data in  EJS:


  //let suppose we get data from database
  let how pass data to EJS or render the EJS files:

  let make new route/path:  in index.js (server)


  app.get("/rolldice",(req,res)=>{

res.send("");
  });


-->let make new template(ejs file rolldice.ejs) in VIEWS FOLDER :

  gernally all data come it come from database  ,we donot gernate at ejs file
 we saved data in varable   

let diceval=Math.floor(Math.random()*6)+1  in index.js(server)

we assume value became from datatbase












































//ACtivity:Instragram ejs


create a basic template for instagram page based on following route:


/ig/:username  ig-->instrgram


so we make template for different username give us different webpages using same template(ejs file).




























<!-- conditonal statements of js   inside  EJS file 
 adding conditons inside EJS file.

 let see example  rolldice.ejs



-->
















<!-- loops in EJS :

use example of instrgram.ejs

here we want print list of followers


-->   
   
   
   
   
   <%=     username     %>                           username  is treated as varaible 
  <%  for( let name of followers){     %>         it treated control string






