const express = require("express");
const app = express();
const port = 8082;
const path=require("path");
const methodOverride = require('method-override')
app.use(methodOverride('_method'));


//we create unqiue  id for the post UUID package (done by developers)
const { v4: uuidv4 } = require('uuid');//require packge  uuid
//v4 is use  --> version 4 for creating this id's
//name it as uuidv4
//uuidv4 is function will gernate new id 

//uuidv4(); is use in    posts array  ARRAY "id"
//id : uuidv4();



app.use(express.urlencoded({ extended: true }));
//express can understand 

app.use(express.json());


app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views")); 

app.use(express.static(path.join(__dirname,"/public")));



// app.get("/",(req,res)=>{

//     res.send("server working well");
// });





// since we donot have data like username ,password etc... from database now
//we assume use ARRAY as database

//we use posts as "let" not as "const" because in future 
// we have to delete data also like in database


let posts=[

    {
        id: uuidv4(),
     username:"jayanta bhadra",
     content :"I love eating"
    },
    {
        id: uuidv4(),
        username:"jayta bhadra",
        content :"I love sleeping"
       },
       {
        id: uuidv4(),
        username:"sabita bhadra",
        content :"I love chating"
       },   

];


















//now we need to create POST our REST API's:

app.get("/posts",(req,res)=>{

    res.render("index.ejs",{ posts });
});




















//"create new "POST"   in REST API's:

// when we send request in     " /posts "       it  add new post

//but we need 2 route to implement is:



//1.serve the form            GET             /posts/new

//here: to add new post
//who is the user and what is content:-user,content 
// ,we get this data in a format of "FORM" and submit
// it get info from the user and send back to backend




//2.add the new post          POST            /posts

//then by using this info we create post request 
//save the post request info into the database/(for now in  Array);



app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
});



app.post("/posts",(req,res)=>{
   //console.log(req.body);
let { username,content}=req.body;
let id=uuidv4();
posts.push({id,username,content});

res.redirect("/posts");

 //  res.send("post request received");
});




//REDIRECT:

//we want as we post input by FORM we want rredirect to quora post page but 
//direct us res.send("post request recieved"):




//FOR we need  to:   Redirect to the other page we want.  by  GET REQUEST always





// "    res.redirect(other URL|status)  "

//  with status --> 3XX means redirect(default=302),200 means ok ,5XX means server problem
//unlike:
//res.send()-> for text,htmlpage,objects    OR   res.render()-> ejs.files















































//SHOW POST:

//we see new route: 
// method            route                   explain

//  GET           /posts/:id          to get one post info (using id)

//let add in the posts array






app.get("/posts/:id",(req,res)=>{
 let { id }=req.params;
//console.log(id);
 let post=posts.find((p)=>id===p.id);
 //console.log(post); //we find the post
if(post)
{ 
    res.render("show.ejs",{post});
    }
    else{

    res.render("error.ejs");
    }

 //console.log(post);
 //res.send("requesting working!!");
 });
 
 

































 //create id for posts:

//when we create post by us we donot give id to it so when click see details ,
// there is no action perfrom

//so we add "id" in each new post we create by :

//1. creating counter function to auto increamnet id  and give it the post.
//2. we create id for the post UUID package (done by developers).



//UUID package: universally unqiue identifier          

//install :-    npm install uuid

//create long unique id's

























































//updation on POST:

//method(patch request)                  route                  details
// PATCH OR PUT                 /posts/:id              to update specfic post

//id,username remains same but content need to be updated again & again


app.patch("/posts/:id",(req,res)=>{

    let { id } = req.params;
    let newcontent=req.body.content ; 
//content that will be updated later from hopposcoctho.io came 

 

  //now we have to update  newcontent or updated content in the post.
  let post=posts.find((p)=>id===p.id); //we find the post
 
  post.content=newcontent;
console.log(post); 



//let send patch request by hoppscocth.io  (we update from  hoppscocth.io )

//body -->appliction/x-www-form-urlencoded
//response boy :
//content (parameter)           --->  updated content (value)
//http://localhost:8082/posts/ae6bb313-8cd2-49f6-8ad1-8812ea626950  in url of   hoppscocth.io 
// ae6bb313-8cd2-49f6-8ad1-8812ea626950 --->   id   will change every time server(index.js) restart
//so we need to take new updated id  
// send it.

res.redirect("/posts");


//res.send("patch request send");

});




















//EDIT option in Quora post:

//we want update or edit content  "option"   in index.ejs in quora post page
//when we click  "edit option" it will give new "FORM"
//In NEW FORM  we can edit/update  new content and submit
//then we redirect to ALL Quora post page(index.ejs) and content get updated 

// New Edit Route:

//serve the edit from                GET           /posts/:id/edit



app.get("/posts/:id/edit",(req,res)=>{
    let { id }=req.params;  //edit which particular "id" ?
    let post=posts.find((p)=>id===p.id); // to edit which post or content
    //we get enitre post
    //console.log(post);


    res.render("edit.ejs",{post});
});

//edit.js form  by deafult send   GET Request but we can   send  POST Request also.
//In already in index.js has PATCH Request where we edit it ,and we have Patch Request Route

//But Patch Request cannot send in HTML FORM only GET AND PUT Request is allowed.


//so we need PACKAGE   "METHODOVERIDE" in npm  ,it override request methods

//  convert    POST REQUEST --->  PATCH or PUT or DELETE Request

// npm i method-override:-

// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.













//DESTROY ROUTE:

//delete oprations:



//   DELETE              /posts/:id               to  delete specific post

//post we want to delete we delete based on "id"


app.delete("/posts/:id",(req,res)=>{

let { id }=req.params;
posts=posts.filter((p)=>id!==p.id); // which post to delete

//res.send ("deletion is success");
//to actually delete post we can use   and  write post.filter in  place of post.find function



//it will filterOUT  Array "posts" which donot match our "id"  and put the   OUR original Array "posts".

res.redirect("/posts");
});










app.listen(port,()=>{
    console.log(`listening to port :${port}`);
});

