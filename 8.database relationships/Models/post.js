//connect db
 const mongoose = require("mongoose");
 
 main().then(()=> console.log("connection sucessful"))
       .catch(err => console.log(err) );
 
 async function  main(){
     await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo1');
 
 }
 
 
 






 
 //create schema
 
 const {Schema}=mongoose;
 



 
 //userSChema 
 const userSchema = new Schema({
     username:String,
     email:String,
   });



   //postSchema
  const postSchema = new Schema({
     content:String,
     likes:Number,
     user:{
      type:Schema.Types.ObjectId,
        ref:"User",
     },
    
   });





 const {model}=mongoose;

 
 const user=model("User",userSchema);
  
 const post=model("Post",postSchema);
 



 const addData=async()=>{

//create user

// let user1=new user({
//     username:"lokajay",
//     email:"lokajaybhadra5@gmail.com",
// });



//now get user1 from database

let  user1=await user.findOne({username:"lokajay"});
//console.log(user1);


//create post
// let post1=new post({content:"solo leveling",
//     likes:37,

// });
  

let post2=new post({content:"unlimited gacha",
    likes:10000,

});

//post1.user=user1;
  
post2.user=user1;

//await user1.save();


//await post1.save();

//await post2.save();

 }


 addData();







 const getData=async()=>{
// let res=await post.findOne({}).populate("user");

//if we want print only username then 
let res=await post.findOne({}).populate("user","username");

console.log(res);
 };

 getData();