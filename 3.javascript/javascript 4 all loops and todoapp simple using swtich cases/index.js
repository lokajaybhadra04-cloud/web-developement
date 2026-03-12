// for  loops:


// for(let i=1; i<=5;i++)

//     {
//         console.log(i);
//     }


    // "i" defined in the for loop is in the scope of the for loop only .
    //if we defined the "i" outside the for loop without defining it give us error.


//nested loops:


// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//      console.log(j);

//      }

//     }



    // for(let i=1;i<=3;i++){
    //     console.log("outer loop is:",i);
    //     for(let j=1;j<=3;j++){
    //      console.log("inner loop",j);
    
    //      }
    
    //     }






    //while loops:

//   let i=1;
//   while(i<=5)
//   {

// console.log(i);
// i++;

//   }











    //game favorite movie:

    // let movie=prompt("enter the favorite movie");
    // let favorite_movie="unchained"; 

    // while(true)
    // {
    //     if(movie!=favorite_movie)
    //       {
    //         movie=prompt("enter the correct favorite movie");
    //        }

    //     else
    //      { 
    //         console.log("you enter the correct movie");
    //         break;
    //     }
    // }
  

















    //loops in arrays:

//  let array=["a","b","c","d","e"];
//  for( let i=0;i<array.length;i++){
    
//     console.log(i,array[i]);

//  }


 //array.length is used as if new element add to the array it will visble in the array when  it is again
 //printed ...

//  array.push("t");



//  console.log("\nprinted array after 1 elemnt is insert in array:")
//  for( let i=0;i<array.length;i++){
    
//     console.log(i,array[i]);

//  }



//  console.log("\nprinted array in reverse after 1 elemnt is insert in array:")

// for( let i=array.length-1;i>=0;i--){
    
//         console.log(i,array[i]);
    
//      }
    













 //loops in the nested arrays 



// let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

// console.log(heroes);





// for(let i=0;i<heroes.length;i++){
//     console.log(`list ${i}`);
    
//     for(let j=0;j<heroes[i].length;j++){
    
//         console.log(`${j}.${ heroes[i][j] }`);
//     }
// }



// let students=[["lokajay",98],["jayanta",96],["sabita",99]];

// for(let i=0;i<students.length;i++)
// {
//    console.log(`student nos:${i+1}`);

//    for(let j=1;j<students[i].length;j++)
//    {
//     console.log(`\nstudent name:${students[i][j-1]}\n student marks:${students[i][j]}`);
//    }

// }











// for-of Loops:
// collection --> Array / string

/*

for(element of collection)
{
    //do something
}
    */


// let fruits=["a","y","e","t"]; //here collection is array

// for(a of fruits)
// {

// console.log(a);

// }



// for(i of "i love coding" )  //here colection is string
// {
 
//     console.log(i);

// }













//nested for-of Loop:

// let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];

// // for(i of heroes){
// //     console.log("********");
// //     for(c of i){

// //         console.log(c);

// //     }


// // }








// todo APP:

// let list=[]; //initally emepty arrays

// console.log("\n1. show all todo list");
// console.log("\n2. to add a todo");
// console.log("\n3. to delete a task");
// console.log("\n4. to exit the todo list");

// let i = true;

// while (i) {
//   let c = prompt("Enter a number (1-3) or 'exit' to quit:");

//   switch (c) 
//   {
//     case '1':
//       console.log(list);
//       break;
//     case '2':
    
//     let task = prompt("enter the your task you want to add");
//       list.push(task)
//       console.log(list);
//       break;
//     case '3':
//         let task1=list.pop();
//       console.log(`\nthe task deleted is :${task1}`);
//       console.log(list);
//       break;
//     case 'exit':
//       i = false;
//       console.log("Exiting the todo list...");
//       break;
//     default:
//       console.log("Invalid choice. Try again.");
//   }
// }


























//Practice questions:

// let arr=['1','2','3','4','5','6','2','3'];
// let num=prompt("enter the num ");


// console.log(`the array is before removal ${arr}`);

// for(let i=0 ;i<arr.length;i++)
//     {
//         if(arr[i]==num)
//         {
//            arr.splice(i,1);
//         }

//     }

//     console.log(`the array is after removal ${arr}`);








// let num1=parseInt(prompt("enter the number"));

// let count=0;

// while(num1>0)
// {
//   num1=Math.floor(num1 / 10);
//   count++;



// }

// console.log(count);










// let num=parseInt(prompt("enter the number"));
// let sum=0;
// let r=0;

// while(num>0)
//  {
    

//     r=num%10;
   
//     num=Math.floor(num/10);
   
//    sum=sum+r;

   
//  }

//    console.log(sum);








// let  num=parseInt(prompt("enter the number"));
// let fact=1;
// while(num>=1)
// {

//    fact=fact*(num--)


// }
// console.log(fact);







let num=[110,2,-4,115,6,-7,9];
let largest=[];

for(i of num)
{
  if(i>0)
  {
    largest.push(i);
  }

}

console.log(largest);

let large=0;

for(let j=0;j<largest.length-1;j++)
{
    if(large<largest[j])
    {
        large=largest[j];
    }

    

}

console.log(large);


