const express=require("express");
const app=express();

const mongoose=require("mongoose");
const path = require("path");
const Chat=require("./models/chat.js");


   app.set("views", path.join(__dirname,"views"));
   app.set("view engine","ejs");
   app.use(express.static(path.join(__dirname,"public")));
    app.use(express.urlencoded({extended:true}));

    main()
    .then(()=>{console.log("connection successful");

    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



//index route


app.get("/chats",async(req,res)=>
{
    //gets chats from database 
    let chats = await Chat.find();
   // console.log(chats);
  //  res.send("working");
    res.render("index.ejs",{chats:chats});  
});


//create route to create new chat by taking data from form and saving it to database
app.get("/chats/new",async(req,res)=>
{
    res.render("newchat.ejs");
}
);


//new route to create new chat by taking data from form and saving it to database
app.post("/chats",async(req,res)=>
 {
    //access from data  
 let {from,to,message}=req.body;

 //create new chat
 let newchat=new Chat({from:from,to:to,message:message,createdAt:new Date()});  
//save chat to database
newchat.save().then((res)=>{ 
}).catch((err)=>{
    console.log(err);
}); 
res.redirect("/chats");
    }
);


//edit the chat   -  route

app.get("/chats/:id/edit",async(req,res)=>
{
    let id=req.params.id;
    let chat=await Chat.findById(id);
    res.render("editchat.ejs",{chat:chat});
}
);


//update chat by id - route
app.post("/chats/:id",async(req,res)=>
{
    let id=req.params.id;
    let {from,to,message}=req.body;
    await Chat.findByIdAndUpdate(id,{from:from,to:to,message:message,createdAt:new Date()});
    res.redirect("/chats");
}
);


//delete the chat - route
app.get("/chats/:id/del",async(req,res)=>
{
    let id=req.params.id;
  let deletechat= await Chat.findByIdAndDelete(id);
  console.log(deletechat);
    res.redirect("/chats");
}
);















//insert data chat
// let chat1=new Chat({.fin
//         from:"lokajay",
//         to:"jayta",
//         message:"kuti mori za",
//         createdAt: new Date(),


//     }
// );

// chat1.save().then((res)=>{
//     console.log(res);
// });







app.get("/",(req,res)=>
{
    res.send("root is working ")
}
)



app.listen(8080,()=>{
    console.log("server is listening on port 8080")
})
