//connect db
const mongoose = require("mongoose");

main().then(()=> console.log("connection sucessful"))
      .catch(err => console.log(err) );

async function  main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');

}


// one to few (save few address of user inside the user itself)

//create schema

const {Schema}=mongoose;



const userSchema = new Schema({
    username:String,
    addresses:[
        {   _id: false,
            location:String,
            city:String,
        },
    ],
  });

const {model}=mongoose;

const User=model("User",userSchema);



//add new user function

const addUsers=async()=>{
let user1= new User({username:"lokajay",
    addresses:[{
                location:"mistry patti",
                city:"guwahati"
                 }

             ],
})

console.log(user1);

user1.addresses.push({  location:"shantinikton",
                city:"shiliong"})

// console.log(user1);


//add user to db
let result=await user1.save();

//console.log(result);
}


addUsers();