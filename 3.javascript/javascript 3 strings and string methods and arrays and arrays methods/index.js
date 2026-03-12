//string methods
// stringName.method()

// Example:
// str.length()



// 1. str.trim()-->trim the whitespace ONLY both ends of string & new one


// let msg="  hel lo "

// console.log(msg.trim());
// console.log(msg);
























// string are Immutable in javascript

// No changes can be made to strings
// whenever we do try to make as change,a new string is create dand old one remains same.


// let password=prompt("set your password");
// let newpass= password.trim(); //any change the 'password' not reflect in the orignal password 
                                  //but new password will created 'newpass'
// console.log(newpass);
// console.log(password);






// other string methods:



// let str="RanDom String";

// str1=str.toUpperCase(); //Here ALso orignal string not change it create new string 
// str2=str.toLowerCase(); //Here ALso orignal string not change it create new string 
// console.log(str1);
// console.log(str2);




















// String methods with Arguments:
// Argument is a some value that we pass to the method
// format--> stringName.method(arg)



// example:   str.indexOf("characters")  -->returns the first index of occurrence of some value in string 
//            Or gives - if not found.



// let str="i love Coding";

// let num1=str.indexOf("ov");
// console.log(num1);











// METHODS Chaining:-->


// using one method after another.Order of execution will be   (left to right)

//  for example :-->    str.toUpperCase().trim()    frist touppercase() then trim()


// let str="     I lovE COding ";

// let str2=str.toUpperCase().trim();
// console.log(str); //orignal string donot changed as In js string immutable
// console.log(str2); //resulkt string changed












// 'slice' methods in string  --> return a part of the original string as a new string
//str.slice(x) -->  x to end
//str.slice(x,y) --> x to end-1 (last index never included)
//str.slice(-x) --> str.slice(length-num) (it is negative indexing)




// let str="*i love coding very *much *";

// console.log(str.slice(5));  //"e coding very much *" 
// console.log(str.slice(1,4));  //"i l"
// console.log(str.length);
// console.log(str.slice(-5)); // -5(length-5)   -4(length-4)   -3(length-3)   -2(length-2)   -1(length-1)      0(legth-0)
// console.log(str.slice((str.length)-5)); // same as above








// Replace and Repeat methods in strings:






// replace --> seraches a value in the string & returns a new string with the value replaced.
// str.replace("old value","new value");

// let str="i love coding";
// console.log(str.replace("love","do"));
// console.log(str); //orignal string remains unchanged but return new string

// //replace single character
// console.log(str.replace("l","d"));





// //repeat -->return a string with the number of copies of  string

// let str1="Mango";

//  console.log(str1.repeat(3)); //MangoMangoMango






 




 //pratice questions

 //separte the "college" part from the string ="Apna college" and replaceall occurences 'l' with 't' in it.

//  let str="ApnaCollege";
//  let str1=str.slice(4);
// console.log(str1); 

//replacall methods

//console.log(str1.replaceAll("l","t"));



//or
// //replace method use twice
// console.log(str1.replace("l","t"));
// str2=str1.replace("l","t");
// console.log(str2.replace("l","t"));



// //or method chaining

// console.log(str1.replace("l","t").replace("l","t"));






















































//Array-->linear colection of similar things:





// let student1="lokajay";
// let student2="jayta";
// let student3="sabita";
// let student4="jayanta";

// let students=["lokajay","jayta","sabita","jayanta"];

// console.log(students);
// console.log(students[1]);
// console.log(students[5]); //arry outbound so undefined
// console.log(students.length);//array length
// console.log(typeof students); //array is object in javascript






//create Arrays


// let marks=[34,56,78];

// let names=["jam","ram","sam"];

// let info =["jam",24,6.3]; //mixed array

// //empty array

// let newarr=[];




// console.log(marks);
// console.log(names);
// console.log(info);

// console.log(newarr);//empty array
// console.log(newarr.length);







// access array 

// let students=["lokajay","jayta","sabita","jayanta"];

// console.log(students[0]);


//tricky point
// ******** if we want access charceter of stuidents[0]="lokajay" only access the "l" then 
//we can write:  *****

// console.log(students[0][0]);



//also length of string "lokajay"

// console.log(students[0].length);













//array is mutable
// let students=["lokajay","jayta","sabita","jayanta"];

// students[2]="sawgata" //array element
// students[1][0]="s";  //array is mutable but jayta is string in a array string is immutable 
//                         //students[1][0] is J cannot be changed

// console.log(students); //orignal array is changing so mutable



// //also if we storeelement in  array in some index = 8

// students[8]="gum"
// console.log(students); //array length will increase automically rest index with emptyX4

// console.log(students.length);
// console.log(students[5]);// index=5 nothing is there so, will be undefined



//array methods:

//push(x): add to end 
//pop:  delete  from end and returns the pop element 
//unshift(x): add to start
//shift: delete from start & return the remove element



// let cars=["audi","bmw","maruti","xuv","thar"];
// console.log(cars);



// cars.push("toyota");
// console.log(cars);


// console.log(cars.pop());
// console.log(cars);




// cars.unshift("mercedes");
// console.log(cars);



// console.log(cars.shift());
// console.log(cars);




//examples by followers in facebook


// let followers=["ram","sam","jam","dam"];
// console.log("before block my followers",followers);


// let blocked_followers=followers.shift();

// console.log("my followers after blocked",followers);
// console.log("blocked followers:",blocked_followers);




















//practice
// let months=["january","july","march","august"];
// console.log(months);

// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");

// console.log(months);






//array  methoids:

// array indexOf()  and includes()

//array.indexOf(value) --> Returns index of something or return -1

//array.includes(value)  --> Search for a value return true or flase


// let color=["red","yellow","blue"];

// console.log(color.indexOf("yellow"));
// console.log(color.indexOf("Yellow")); //-1 as y and Y are different

// console.log(color.includes("yellow"));
// console.log(color.includes("Yellow"));




//array methods :
//  array1.concat(array2)  -->merge arrays at the end and return merage array (Original array with not changed)
//  array.reverse()        -->reverese the original array


// let main_color=["r","g","b"];
// let color=["o","y","v"];

// console.log(main_color.concat(color));
// console.log(main_color.reverse());

// console.log(main_color); //orignal array changed
// console.log(color);



/*

Array methods:

slice: copies a portion of an array (just like string) original array doesnot change
array.slice()  -->  donot slice at all.just print the array
array.slice(x) -->  x to end
array.slice(x,y) -->  x to end-1 (last index never included)
array.slice(-x)  -->  str.slice(length-num) (it is negative indexing)
*/


//  let colors=["red","yellow","blue","orange","pink","white"];
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2,5));
// console.log(colors);
// console.log(colors.slice(-2));
// console.log(colors.slice(-4,-1)); // -4 -3 -2   -1(never included)









/*

array methods:

array.splice() --->  returns   removes/replaces/add    elements in place.
array.splice(start index , deletecount(nos of element need to count) ,item0,item1....)
orignal array will changed
*/

// let colors=["red","yellow","blue","orange","pink","white"];

// console.log(colors.splice()); // starting from index 0 , delete zero element and  so return zero element
//                                  //so,originsl is not effectied as no start ,no deletecount,no item0...item's....

// console.log(colors);//just print original array normally

// console.log(colors.splice(1)); //strating  index is 1 and delete 0 element returns elemnet from index 1 to rest
//                                 // original array is changed remains only element in index=0

// console.log(colors);  //only print index=0 elemnt in orignal array remains 
//                           // original array is:["red"]

// console.log(colors.splice(1,3));//starting index =1 remove  3 elements but oringnal array "color" remians only
//                                 // one elements  at index=0 
//                                // original array is:["red"]
//                                //returns the splice element --> output: []

// console.log(colors);           //just print output original array is:  ["red"]

// //add element by splice if deletecount set =0

// console.log(colors.splice(0,0,"sliver","black")) //add from index=0
//                                                   // deletecount=0 (means we only add items)
//                                                   //items......
//                                                  //it will return nothing it add only not deleted
 

// console.log(colors);  //both color are added from index=0




// // question :if we want added two color in between   silver and black ['sliver', 'black', 'red']  then:

// colors.splice(1,0,"yellowgreen","magenta");
// console.log(colors); 


// /*question :if we want REPLACE               in array=['sliver','yellowgreen','mangeta', 'black', 'red']
// yellowgreen to aquactic
// */

// colors.splice(1,1,"aquatic");
// console.log(colors); 









//array.sort() --> sort the array

//  sorting array of number: number are converted into string then it is sort based in the string














/* prtactice:

start:  ["january","july","march","august"]

final: ["july","june","march","august"]

 in single steps usong the splice method:

*/


// let months= ["january","july","march","august"];
// months.splice(0,2,"july","june")
// console.log(months);



/* prtactice:

return y=the index of the "javascript" from the given array,if it was reversed.
["c","c++","html","javascript","python","java","c#","sql"]

*/


// let prolang=["c","c++","html","javascript","python","java","c#","sql"];
// console.log(prolang);
// prolang.reverse();
// console.log(prolang);
// console.log(prolang.indexOf("javascript"));










 /*array References  ----> address in memory   */
  //== true if value is same ,but type may be differernt
  //=== true only value and type both are same else flase
  


//  console.log("name"=="name");
//  console.log("name"==="name");
//  //all flase
//  console.log([1]==[1]);
//  //console.log([1]===[1]);
//  console.log([]==[]);
//  //console.log([] === []);

// why it is like that: due to array referensces see video "javascrpit 3 array references ""


// let arr=['a','b'];
// let newarr=arr; // arr address refrences(array name) point starting element ,it is assign to variable newarr 

// console.log(arr==newarr);

// console.log(arr===newarr);

// // as newarr and arr pointing same array 1st element
// // change in any array will reflect on other array


// newarr.push("c");

// console.log(newarr);//add c in "newarr" reflect on "arr"
// console.log(arr);


// newarr.pop();

// console.log(newarr);//remove element in "newarr" reflect on "arr"
// console.log(arr);




// //if create and  initilized array with newarr
// //it will be new array with new memory address

// newarr=["e","f","g"];




// arr.push("z");

// console.log(newarr);//add z in "arr" will not  reflect on "newarr"
// /*both array "arr" in intilized in addres1  
//               "newarr" intilized now with address2 
//                both addresses is different */
// console.log(arr);

// console.log(arr==newarr);

// console.log(arr===newarr);
// this will be flase












//constant ARRAYS and varaible:


// constant variable: 


// const g=9.8;

//g=10; will give error as const varaible cannot be change later after decarlation


//constant array

// const array=[1,2,3,4];

// array.push(7); // in array this will not give error and execute correctly.
// console.log(array);
// we easliy push and pop element in the array out of array


//but cannot initlized that same  array again completely 
// this will give error.

// array=[1,0,3,5,7];//error

/*if array is declare constant 
array is element are not constant

it means ---->  the arrayname    "array" is itself is constant 
                once declared it will not be again redeclared /intitlzed    
                
                
                arrayname store the memory address/references it will not changed whenn declared constant*/

 
               
// newarr=["e","f","g"];

// array=newarr; //As array is declare constant we cannot assigned array  to  other array( which is declare constant.)
            // it through error
            
            

















 //nested arrays:array inside array or multi-diminsional array



//  let nums = [[2,4],[3,6],[4,8]];
//  console.log(nums);
                
// //  let nums1 = [[2,4],[3,6],[4,8,7]];
//  console.log(nums1);


//  console.log(nums.length);
//  console.log(nums1.length);

//  console.log(nums[0].length);
//  console.log(nums1[1].length);



//for array nums1
 //rows= nos array's inside array =3   --> [2,4],[3,6],[4,8,7]

 //colmuns= max nos element inside the array's inside array =3   --> [2,4]    {2} 
 //                                                                  [3,6]    {2}
 //                                                                  [4,8,7]  {3}*

      


 //access the element in the nested array is:

//  let nums1 = [[2,4],[3,6],[4,8,7]];
                
// console.log(nums1[0][1]);












//practice
//game tic-tac-toe game


// let game=[['X','null','O'],['null','X','null'],['O','null','X']];

// console.log(game);
// console.log(game[0]);
// console.log(game[1]);
// console.log(game[2]);













// Assigments

// let array=[7,9,0,-2];
// n=2

// console.log(array.slice(0,(n+1)));
// console.log(array.slice(-(n+1)));







// let str="i love coding";
// let i=0;
// let count=0;
// let len=str.length;
// while(len>0)
// {
//   if(str[i]==" ")
//   {
//     count++;
    
//   }
//   i++;
  

//   len--;
// }

// console.log("nos of blanks",count);







// let char=prompt("enter the character");
// let char1=char;

// if(char1!=char.toUpperCase())
// {
//   console.log("charcter is lower case");

// }
// else
// {
  
//     console.log("charcter not lower case");
  
  
  
// }








// let str1=" i good at coding ";

//   console.log(str1.trim());











let arr=[1,2,3,4];
let num=prompt("enter the number ");


if(arr.includes(parseInt(num)))
{
 console.log("number is the array");

}
else
{

  console.log("number is  not the array")

}










