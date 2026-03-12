
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

    main()
    .then(()=>{console.log("connection successful");

    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
 

//insert data chat
let chats=[
    {
        from:"lokajay",             
        to:"jayta",
        message:"kuti mori za",
        createdAt: new Date(),
    },      
    {
        from:"jayta",             
        to:"lokajay",       
        message:"kuta mori za",
        createdAt: new Date(),
    },
    {       
        from:"lokajay",     
        to:"sabita",
        message:"buri ",
        createdAt: new Date(),  
    },  ]




 Chat.insertMany(chats).then((res)=>{
    console.log(res);
}
).catch((err)=>{
    console.log(err);
}); 


