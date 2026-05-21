 
 //connect db
 const mongoose = require("mongoose");
 
 main().then(()=> console.log("connection sucessful"))
       .catch(err => console.log(err) );
 
 async function  main(){
     await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo1');
 
 }
 
 
 






 
 //create schema
 
 const {Schema}=mongoose;
 



 
 //order schema
 const orderSchema = new Schema({
     item:String,
     price:Number,
   });
 


 const {model}=mongoose;

 
 const Order=model("Order",orderSchema);
 



// one to many customers and orders
// save the  orders(child ) inside  the customer(parent) table 

 //customerschema
 const customerSchema = new Schema({
     name:String,
     orders:[
        {
        type:Schema.Types.ObjectId,
        ref:"Order", },
          ]
   });









//middleware for moongoose:

// customerSchema.pre("findOneAndDelete",async()=>{

//   console.log("PRE MIDDLEWARE");

// });



customerSchema.post("findOneAndDelete",async(customer)=>{

//delete order realted to customers:
if(customer.orders.length){

let res = await Order.deleteMany({_id: {$in:customer.orders}   });
console.log(res);
}


});


 const customer=model("customer",customerSchema);











 //add order function
 
const addOrders=async()=>{



//     //method 1.  using constructor to add order:
// let order1= new Order({item:"Mango",price:70})

// console.log(order1);


// //add user to db using save function
// let result=await order1.save();

// console.log(result);







//method2.  using db function 


let result1=await Order.insertMany([
{item:"chicken", price: 150},
{item:"banana", price: 30},
{item:"watermelon", price: 30},
]);

//console.log(result1);

};


//addOrders();






//function to add customers:



const addcustomer=async()=>{
    let  customer1=new customer({name:"lokajay",
        
     });


     let order1 = await Order.findOne({item:"banana"});
     let order2 = await Order.findOne({item:"watermelon"});
     let order3 = await Order.findOne({item:"chicken"});
//console.log(order1,order2,order3);


     customer1.orders.push(order1);
        customer1.orders.push(order2);
             customer1.orders.push(order3);



             let result=await customer1.save();
           //console.log(result);


           

          
};

//addcustomer();







const findcustomer=async()=>{

 let result1=await customer.find().populate("orders"); 
         console.log(result1[0]);

};

//  findcustomer();











//cascading deletion in database

 
const addCustomers= async()=>{
  let newcust=new customer({
                          name:"jayanta bhadra",
});

//create new order:

let neworder=new Order({item:"pizza",price:200});

  newcust.orders.push(neworder);


  await neworder.save();
  let result=await newcust.save();
 // console.log(result);

}


// addCustomers();






//now if we want cascasding deletion:

const delcust=async()=>
{
 let data= await customer.findByIdAndDelete("6a0c9366aaba5fc3216c3dd2");

 console.log("deleted customer data is:",data);
}

delcust();