const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'webapp',
  password:'sa'
});








let getRandomUser = () => {
  
    id=faker.string.uuid(),
    username=faker.internet.username(), 
    email= faker.internet.email(),
    password=faker.internet.password()

   let user = [id,username,email,password]

return user;

}


//insert new data
// let query="insert into user1(id, username, email, password ) values (?,?,?,?)";



// try
// {
//   connection.query(query,getRandomUser(), (err, results, fields)=>{
//     if (err) throw err  
//       console.log(results);
//       console.log('Data inserted successfully');
    
//   }
// );



  
// }

// catch (error) {
//   console.error('Error executing query:', error);
// } 
// finally
//  {
//   connection.end();
// }


// console.log(getRandomUser());









// //insert data in bulk
// let data = [];
// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser());
// }

// // console.log(data);

// let query="insert into user1(id, username, email, password ) values ?";



// try
// {
//   connection.query(query,[data],(err, results, fields)=>{
//     if (err) throw err  
//       console.log(results);
//       console.log('Data inserted successfully');
    
//   }
// );

  
// }



// catch (error) {
//   console.error('Error executing query:', error);
// } 
// finally
//  {
//   connection.end();
// }

















// setting up express APP



const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const { userInfo } = require('os');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // for PUT and DELETE requests
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));




// 1.  show total number of users in our app

app.get("/", (req, res) => {
  let query = "SELECT COUNT(*) AS Total FROM user1";
  
 try{
  connection.query(query, (err, results) => {

    if (err) throw err;
    let count = results[0].Total;
    res.render("home.ejs", { count });
    console.log("Data retrieved successfully");
    console.log(`Total number of users: ${count}`);
 
  });

}

catch (error) {
  console.error('Error executing query:', error);
  res.render('Internal Server Error');
}

});













//2. fetch and show (userid,username,email) of all users in our app

app.get("/users", (req, res) => {
  let query = "SELECT id, username, email FROM user1";  
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      res.render("users.ejs", { users: results });
      console.log("Data retrieved successfully");
    });
  }
  
  catch (error) {
    console.error('Error executing query:', error);
    res.render('Internal Server Error');
  }
});










// 3. edit username of a user by id  by help of form but it will need password to confirm the edit

//check if user exists and then show edit form
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
    //console.log(id);
   let query = `SELECT * FROM user1 WHERE id ='${id}'`;
  
  
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
       //console.log(results[0]);
        res.render("edituser.ejs", { user: results[0] });
    });

  }
  catch (error) {
    console.error('Error executing query:', error);
    res.render('Internal Server Error');
  }
});



//  to edit username if password is correct


app.patch("/user/:id", (req, res) => {
  
  let { id } = req.params;
  let { username, password } = req.body;

  //console.log(id, username, password);

   let query = `SELECT * FROM user1 WHERE id ='${id}'`;
  
   try {
        connection.query(query, (err, results) => {
        if (err) throw err;
      
      // Check if the password matches
     // console.log(results);
          if (results[0].password === password) {
        // Update the username
        let updateQuery = `UPDATE user1 SET username ='${username}' WHERE id = '${id}'`;
       connection.query(updateQuery,  (err, updateResults) => {
          if (err) throw err;
         // console.log(updateResults);


          // Redirect to the users page after successful update
          res.redirect("/users");
          console.log("Username updated successfully");
        });
      } else {
        res.status(400).send("Incorrect password");
      }
    });
  } catch (error) {
    console.error('Error executing query:', error);
    res.render('Internal Server Error');
  }     


});

// 4. add new user to our app by help of form
app.get("/adduser", (req, res) => {
  res.render("newuser.ejs");
});





app.post("/user", (req, res) => {
  let { username, email, password } = req.body;
  //console.log(username, email, password);   
  let query = "INSERT INTO user1 (id, username, email, password) VALUES (?, ?, ?, ?)";        
  let user = [faker.string.uuid(), username, email, password];        
  try {
    connection.query(query, user, (err, results) => {
      if (err) throw err;
     // console.log(results);
      console.log("New user added successfully");
      res.redirect("/users");
    });
  } catch (error) {
    console.error('Error executing query:', error);
    res.render('Internal Server Error');
  }
});   
// END of CRUD operations 








// delete user correct email and password
//check if user exists and then delete user by id


app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
    //console.log(id);
   let query = `SELECT * FROM user1 WHERE id ='${id}'`;
  
  
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
       //console.log(results[0]);
        res.render("deleteuser.ejs", { user: results[0] });
    });

  }
  catch (error) {
    console.error('Error executing query:', error);
    res.render('Internal Server Error');
  }
});



//delete user if email and passweord is correct

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { email, password } = req.body;           
  //console.log(id, email, password);

   let query = `SELECT * FROM user1 WHERE id ='${id}'`;
  
   try {
        connection.query(query, (err, results) => {
        if (err) throw err;
      
      // Check if the email and password match
      console.log(results);
          if (results[0].email === email && results[0].password === password) {
        // Delete the user
        let deleteQuery = `DELETE FROM user1 WHERE id = '${id}'`;
       connection.query(deleteQuery,  (err, deleteResults) => {
          if (err) throw err;
         console.log(deleteResults); 
          // Redirect to the users page after successful deletion
          res.redirect("/users");
          console.log("User deleted successfully");
        });
      } else {
        res.status(400).send("Incorrect email or password");
      }
    });
  } catch (error) {
    console.error('Error executing query:', error);
    res.render('Internal Server Error');
  }     
});









app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
// END of express APP setup

