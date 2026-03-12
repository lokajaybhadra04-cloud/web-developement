REST:

(Representational State Transfer):->

Rest is an architectural style that defines a set of constraints(RULES) to be used for creating web services  or RESTFUL API's.it mainly used for  "CRUD" oprations(mainly in Database).

--> we will build quora Posts:-




REST  mainly used for  "CRUD" oprations(mainly in Database).
CRUD OPERATIONS:
c-> CREATE
r-> READ
u-> UPDATE
d-> DELETE

to handle this operations we need API's(endpoints).some API's endpoint use to create new data endpoint,some use for view data or READ,update or delete

ALL api's we write individually.


for perfroming above 4  operation we need Restful API's.



example: RESTful API's ->


developer.twiiter.com

the stackoverflow blog(for conecpts)



















































CURD operations on database:

GET  -> retrieves/read resources.                 READ  
POST -> submits/create new data to the server.    CREATE
PUT  -> updates existing data.                    UPDATE
PATCH-> update existing data partially.           UPDATE
DELETE->removes data.                             DELETE






""""
->here we will build quora Posts page with many post.

                                                         """"

 each post has :
  username,
  content, 
  Add many functionalites like:   view,view individual post,edit,delete

  
  To build all this functionality we will write API's


  ~there is term called resources/data where we will perfrom " curd operation"


''
   data here is ?  
                ''

like:
for twitter  data/resouces is "tweets"

for US       data/resources is  "post in quora post"
where all operation will be perform.





































































//creating the RESTFUL API'S:

//                                                     
//                                                   functionality          route
GET          /posts       to get data for all posts, this is view route ->INDEX/HOME
POST         /posts       to add a new posts       ,to add/create new post->CREATE
GET          /posts/:id   to get one post (using id),to see individual post->VIEW
PATCH        /posts/:id   to update specific post,to update individual post->UPDATE
DELETE       /posts/:id   to delete specific post,to delete individual post->DESTROY






install :

npm init -y


npm i express

npm i ejs

touch index.js

create folder public(html and css files) and views( all ejs files)







homework:

Do this same example  for Instagram/twitter/volgging page posts  photo,photo_caption,id,edit and delete caption,instrgram post delete
