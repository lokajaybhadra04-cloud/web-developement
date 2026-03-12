// let n = 5;
// for(let i=0;i<n;i++)
// {
//     console.log("hello",i);
// }








// console.log(process.argv);



















//  if we want to use arugments(hello ,bye) in node,js then:

















// //  if we want to use arugments(hello ,bye) in node,js then:


// let args=process.argv

// // console.log(args);


// for (let i=2;i<args.length;i++)  // both we want ingore(executable path for NODE.js) & (current file we running path)
// // we want only to print agrumnents(hello ,bye) so i=2
// {
//     console.log("hello to",args[i]);
// }






















// const value=require("./math");

// console.log(value);



// const sumFunction=require("./math"); // return OR export  address of function save in sumFunction
// // from math.js
// console.log(sumFunction(2,3));




// const value1=require("./math");

// console.log(value1);
//nothing exports  it return empty set































//send or export  sum,mul,PI,g  to scrpit.js there many ways:

// const objectMath=require("./math");

// //console.log(objectMath);

// console.log(objectMath.sum(2,3));
// console.log(objectMath.g);
















//exporting from directories:

//we create special file "index.js" name should be same as it will comibine all data and then exports
//to script.js which outside of fruit

















// const info=require("./fruits");  //it will work it will not require file & it will require info from dictoray
// //index.js is  entry point ,it get the folder fruits  import special js file index,js
// console.log(info);





























//script.js is outside of figlet dirtecory which contain "figlet module" it is called local installtion.

//when run it by"node script.js"we get error  "MODULE_NOT_FOUND"

//So, we can do golbal installation of module 


//In command line:
// "sudo chown -R $USER /usr/local/lib/node_modules" treated as admin
// " npm install -g "package name" 
// npm link "package name".





// const figlet = require("figlet");

// figlet("test package outside !!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });














































//reqiure  v/s import

// import {sum,PI} from "./math.js";  //WE CAN CHOSE WHICH INFO TO IMPORT    and write full file name unlike in require we write only ./math

// console.log(sum(2,3));

//we cannot directly print we need to:create a package.json file by

//In commandline -->                   npm init

//make   -->                           author:lokajay

// IN PACKAGE.JSON FILE WRITE -->      "type":"module"          in front of   author :lokajay


//In commandline -->                   node script.js





















//let "import" package   "random words"

import { generate, count } from "random-words";


//IN PACKAGE.JSON FILE WRITE -->      "type":"module"          in front of   author :lokajay

//now:

console.log(generate());
console.log(count());