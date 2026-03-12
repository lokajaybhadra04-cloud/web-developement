// const sum=(a,b)=> a+b;
// const mul=(a,b)=> a*b;
// const g=9.8;
// const PI=3.14;

//module.exports=123;






// module.exports=sum;








//nothing exports it return empty set








//module.ecxports is object: it print 123

//example
// module.exports=123;
// console.log(module.exports);






















//send or export  sum,mul,PI,g  to scrpit.js there many ways:



// let obj={
//  sum:sum,
//  mul:mul,
//  g:g,
//  PI:PI

// };

// module.exports=obj;
//console.log(module.exports);




//OR



// module.exports={

// sum:sum,
// mul:mul,
// g:g,
// PI:PI

// };

// console.log(module.exports);



//OR









// module.exports.sum=(a,b)=> a+b;

// module.exports.mul=(a,b)=> a*b;

// module.exports.g=9.8;

// module.exports.PI=3.14;

//we direcly send or export to script.js file
    








//OR









// exports.sum=(a,b)=> a+b;

// exports.mul=(a,b)=> a*b;

// exports.g=9.8;

// exports.PI=3.14;


//we exporting function and variables it will work




//but 

//example:


// exports=9;  

//it will not work as export is treated as variable  not object






































































































//reqiure  v/s import:

export const sum=(a,b)=> a+b;
export const mul=(a,b)=> a*b;
export const g=9.8;
export const PI=3.14;




//we want all this use in script.js

//we will use  not "REQUIRE"  INSTEAD WE WILL USE "IMPORT"

//we use anyone one in each project never both.



//let import: but first we export all this info .

//put "export" keyword in front the varaible or data we want to export

//all this info will export individally ,NOT as ONE OBJECT