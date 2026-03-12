const express = require("express");

const app = express();

const port=8080;



app.use(express.urlencoded({ extended: true }));
//express can understand 

app.use(express.json());




app.get("/register",(req,res)=>{
    //console.log(req.query);
let{ user,password} = req.query;

    res.send(`standrad GET response.Welcome ${user}`);
});








app.post("/register",(req,res)=>{

    
    //console.log(req.body);  //express cannot understand the data format:

    //now adding line "app.use(express.urlencoded({extended:true}));" 
    // express can understand  

    let { user,password } = req.body;

    res.send(`standard POST response . welcome ${user}`);

    //gernerally we take data user and pass store in database we see later when study database.
    
});






app.listen(port,()=>{

    console.log(`listening to port ${port}`);

});

