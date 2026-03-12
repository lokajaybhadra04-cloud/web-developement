const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');

main()
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });

async function main() {
 
  await mongoose.connect("mongodb://loka:sa@127.0.0.1:27017/amazon?authSource=admin");


}


//schema of books
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 1000,  //title max length 1000
  },
  author:
    {
        type: String,
        required: true,
    },
    price: {    
        type: Number,
        min: [1,"price is too low"] //price minimum 1 of book price of book less than 1

    
    },
    discount: {
        type: Number,
        default: 0,  //discount by defualt zero
    },
  
    genre: {
        type: String,   
        enum: ['fiction', 'non-fiction', 'comics', 'science', 'history', 'fantasy'], //genre must be one of these values
        //default: 'fiction',  //default genre is fiction
    },

});

//create collections we need  model
const Book = mongoose.model('Book', bookSchema);
//create a new book
async function createBook(title, author, price) {   
    const book = new Book({ title, author, price });
    await book.save();
    console.log('✅ Book created:', book);
    }
// // Example usage    
//  createBook('The Great Gatsby', 'F. Scott Fitzgerald', 10.99)
//      .catch(err => {     
//             console.error('❌ Error creating book:', err);
//         });
// // new book create
// createBook('primative war', 'Ethan Pettus', 20.99)
//      .catch(err => {     
//             console.error('❌ Error creating book:', err);
//         });




// //insert many books
async function createMultipleBooks(books) { 
    try {
        const result = await Book.insertMany(books);
        console.log('✅ Books created:', result);
    } catch (err) {
        console.error('❌ Error creating multiple books:', err);
    }
}   

// Example usage for multiple books
const books = Array.from({ length: 10 }, () => ({
    title: faker.lorem.sentence(),  
    author: faker.person.fullName(),
    price: faker.commerce.price(0, 3, 2),
    discount: faker.number.int({ min: 0, max: 50}),
    genre: faker.helpers.arrayElement(['fiction', 'non-fiction','comics', 'science', 'history', 'fantasy'])
})
);
    


// createMultipleBooks(books)
//     .catch(err => {
//         console.error('❌ Error creating multiple books:', err);
//     }); 







//find book by id and update price REDUCED BY 500

async function findByIdAndUpdateBook(id, newPrice) {
  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { price  : newPrice },
  
      {runValidators: true} // ensure that the update respects the schema validation
    );

    if (!book) {        
        console.log('❌ Book not found');
        return;
        }
    console.log('✅ Book updated:', book);
  } catch (err) {

     
    //for custom error messages

    console.error('❌ Error updating books:', err.errors.price.properties.message);
  }     
}
// Example usage
findByIdAndUpdateBook('687d167018553a09197ccf33',0)
  .catch(err => {    
    console.error('❌ Error updating book:', err);
  });    
