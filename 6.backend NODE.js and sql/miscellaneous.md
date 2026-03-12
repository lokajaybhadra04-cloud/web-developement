//GET & POST Request:

--> GET (we already seen) :

used to GET some response,

Data sent in query  strings 

drawbacks:

we can send limited data by URL else browser donot allow it ,

Any data send in query strings converted into string data,

if we send additonal data in URL  it is visible in URL which it not safe.

  let see example: with it's drawbacks:

~ create 2 folder backend and frontend
~ inside frontend create index.html
~ inside index.html we create    " from "
username and password is visible in URL when we use  " GET" 


- it solved by POST Request




--> POST:


used to post  something (for create /write /update)

data sent via request body (any type of data  example: json data,string data etc..)








-->Backend folder
 we create server  for getting response of get&post requests in index.html

-->
to create server:

cd Backend

npm init -y (it create package.json)

npm i express (install express)

create index.js by : touch index.js
'







--> now  Inside the post how can we access the request body :


we seen hopopcotch webiste( body--> context type==appliction+json--> write  raw  request body--> {  "user":"lokajay "  })




In index.html :

 ~ Inside the " GET  ":

"FROM"  data  username and password  accpeted by query strings (visbile in url)

username and pasword data  store  in    "req.query" is object

 and   store/deconstruct     in object only
 
 let { user,pass }  = req.query;












































 ~Inside the " POST "

similar things can be done in POST request.
username ,password came form  "Request Body"

we handle in two steps:

~ set up POST request route to get some response:
app.post()  --> we get stnadrad request


~ parse POST Request data for that:

In "request" object  has body property  will contain  data we access it

  "req.body"

    
    console.log(req.body);  but it will print undefined as " express" cannot understand the data format:
    so we need added two lines in code::



   " app.use(express.urlencoded({extended:true})); "

    ->if data in  urlcame encoded format anywhere express should understand it by prasing it.

   ->express.urlencoded({extended:true})  is a middleware



    "app.use(express.json());"  also middleware

    -> in case we send data in json format then :
    we seen hopopcotch webiste( body--> context type==appliction+json--> write  raw  request body--> {  "user":"lokajay " , "password":"12345678" })


    set the  (headers--> context-type as "appliction/json")

















































Revisting JS(OOPS):
OOP - object orientated programming

to structure our code:

prototypes

new operator


constructors


classes


keywords(extends,super)



examples:

/Frontend/app.js


    // all student object have same key so it is better to template 
    //so can be use again  and again...
    //if student object have function define then 
    //for every function for every object space will be wasted.it is not feasible.






    // so we used OOPs:
//blueprint of student: we use   " class ""


class student
{
 


};


















object prototypes:


prototypes are the mechsansim by which javascrpit objects inherit features from one another.

it is like a single template object that all objects inherit methods and properties from without having their own copy 



arr._proto_(referneces)

Array.prototype(actual object)

Stirng.prototype


~ every object in javascrpit has a built-in property ,which is called it's protype.
  The protype is itself an object, so the protype will have it's own prototype,making what's called a prototype. The chain  ends when we reach a prototype that has "null" for it's own prototype.


   let see some things intresting:

   in console window of web browser(google chrome)

   we have array 

   [1,2,3]

   In javascrpit array is also object



   but every we print array we find something:

   [[prototype]]:Array
   there are many functions inside

let see exmaple :

In app.js

//Array and string that prototype already build so it donot need to copy itself again and again 
//when we use array and string again & agian ..








































//factory fuctions:

A function that creates objects .

it is there disadvantages  



//we need " constructor "  and  " class "  migtiate this disadvantages

Example: In app.js





 


 example:



