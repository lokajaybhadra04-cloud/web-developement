// // console.log("hello world");
// // console.log("hello world!");
// // let a=5;
// // let b=10;
// // console.log("sum is:",a+b);


// let a=10;
// let b=5;

// let output="Sum is "+(a+b)+" in total";



// // template literals

// let output1=`sum is ${a+b} in total `;    //back ticks used to add embedded expressions in a string is called template literals
// console.log(output);
// console.log(output1);
// console.log(`sum is ${a+b} in total `);






// // In "=="  operator  compares value ,NOT type
// let n=5;
// let str="5";
// console.log(typeof n);
// console.log(typeof str);
// console.log(n == str);  //n is number nd str is string 5 and '5'  return true 
//                        //"==" ingore the type this convert to number and compare the values



// // In  "==="     operator  compares value AND ALSO type     strict comparsion   

// console.log(n === str);     //n is number nd str is string 5 and '5'  return flase
//                                 //"===" compare type  and also values both    



// //example

// // let age=prompt("enter the age of your");

// if(age<18)
// {
//  console.log("under 18 cannot vote");


// }
// else if (age>=18 && age<=110)
// {console.log("horray! can vote");
// }
// else
// {

// // alert("person is not alive");
// console.error("sorry");
// console.warn("try again")
// }




// // practice questions


// // let num=prompt("enter the number");

// // if (num%10==0)
//     // alert("Good");
// // else
// //      alert("bad");






// let name2 = prompt("enter the name");
// let age2 = prompt("enter the age");

// output2=`${name2} is ${age2} years old`;
// alert(output2);









// let quarter=prompt("enter the quarter");

// switch(parseInt(quarter))
// {

// case 1 : alert("Januray ,Februray, March");
//          break;
        
// case 2 : alert("April ,May,june");
//          break;
         
// case 3 : alert("July , August,September");
//          break;


// case 4 : alert("October ,November,December");
//          break ;        

// default : alert("NOT A QUARTER!");

// }












// let str = prompt("enter the string ");

// if((str[0]=='a'||str[0]=='A') && str.length>=5) 
//    alert("Golden string")
// else
//     alert("NOT Golden string");







// let num1=parseInt(prompt("enter frist number"));
// let num2=parseInt(prompt("enter second number"));
// let num3=parseInt(prompt("enter third number"));


// if(num1>=num2 && num1>=num3)
// {
//     alert(`largest number is ${num1}`);
// }
// else if(num2>=num3)
// {
//     alert(`largest number is ${num2}`);
// }
// else
// {
//     alert(`largest number is ${num3}`);
// }    






let num1=(prompt("enter frist number"));
let num2=(prompt("enter second number"));


if(num1[num1.length-1]== num2[num2.length-1])
   {
    alert("they have same last digit");
   }
else
{alert("they donot  have same last digit");}
