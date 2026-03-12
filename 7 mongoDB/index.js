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
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/student");
  } catch (err) {
    console.error(err);
  }
}

//schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});


//create collections we need  model
const Student = mongoose.model('Student', studentSchema);   

//create a new student
async function createStudent(name, age, email) {
  const student = new Student({ name, age, email });
  await student.save();
  console.log('✅ Student created:',student);
}

//    //another example
// createStudent('Jane Smith', 22, 'jvfjbv@vejvbjv')
//     .catch(err => {
//         console.error('❌ Error creating student:', err);
//     }); 


// // Example usage
// createStudent('John Doe', 20, 'kfewf@kvdfvkfd') 
//     .catch(err => {
//         console.error('❌ Error creating student:', err);
//     });
    
 

    //insert many students
async function createMultipleStudents(students) {
  try {
    const result = await Student.insertMany(students);
    console.log('✅ Students created:', result);
  } catch (err) {
    console.error('❌ Error creating multiple students:', err);
  }
}   

// // Example usage for multiple students
function generateFakeStudents(count) {
  const students = [];

  for (let i = 0; i < count; i++) {
    students.push({
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18, max: 30 }),
      email: faker.internet.email()
    });
  }

  return students;
}

const Students = generateFakeStudents(5); // change number as needed
createMultipleStudents(Students);



//find all students using 
//  function

function findAllStudents() {
  Student.find()
    .then(students => {
      console.log('✅ All students:', students);
    })
    .catch(err => {
      console.error('❌ Error finding students:', err);
    });
}

// Example usage
findAllStudents();  


// // find  all student age  greater than 20 print only name field

// async function findStudentsOlderThan20() {
//   try {
//     const students = await Student.find({ age: { $gt: 20 } }, 'name age');
//     console.log('✅ Students older than 20:', students);
//   } catch (err) {
//     console.error('❌ Error finding students older than 20:', err);
//   }
// }

// // Example usage
// // findStudentsOlderThan20();


// find student by id
async function findStudentById(id) {
  try {
    const student = await Student.findById(id, 'name age ');
    if  (student) {
      console.log('✅ Student found:', student);
    }
    else {
      console.log('❌ Student not found with id:', id);
    }
  } catch (err) {
    console.error('❌ Error finding student by id:', err);
  }
}       

// Example usage
// findStudentById('687cdf5e2ccc4956206760f5'); // replace with a valid ID

  
// updateOne student by id
async function updateStudentById(id, updateData) {
  try {
    const result = await Student.updateOne({ _id:id }, { $set: updateData });
    //console.log('✅ Update result:', result);
    // Check if any document was modified

    if (result.modifiedCount > 0) {
      console.log('✅ Student updated successfully:', result);
    } else {
      console.log('❌ No student found with id:', id);
    }
  } catch (err) {
    console.error('❌ Error updating student:', err);
  }
}

//example usage
// updateStudentById('687cdf5e2ccc4956206760f5', { age: 26, email: 'loajaybhadra' })
//   .catch(err => {
//     console.error('❌ Error updating student:', err);
//   });


  //update many students
async function updateMultipleStudents(filter, updateData) {
  try {
    const result = await Student.updateMany(filter, { $set: updateData });
    if (result.modifiedCount > 0) {     
      console.log('✅ Multiple students updated successfully:', result);
    }
    else {
      console.log('❌ No students found matching the filter:', filter);
    } 
  } catch (err) {
    console.error('❌ Error updating multiple students:', err);
  }     
}       
// Example usage
//updateMultipleStudents({ age: { $gt: 20 } }, { age: 30, email: 'jhevjvjbrji@jfbreb' })
 // .catch(err => {
//    console.error('❌ Error updating multiple students:', err);
  //});

  











  //in updateone and update many updated  stduent are not shown


  // findone and update  method show the update the student
async function findOneAndUpdateStudent(filter, updateData) {
  try {
    const student = await Student.findOneAndUpdate(filter, { $set: updateData }, { new: true });    
    if (student) {
      console.log('✅ Student found and updated:', student);
    } else {
      console.log('❌ No student found matching the filter:', filter);
    }   

  } catch (err) {
    console.error('❌ Error finding and updating student:', err);   
  }
}     

// // Example usage
// findOneAndUpdateStudent({ name: 'John Smith' }, { age: 25, email: 'fvrivio@dvf', name: 'John Smith1 ' })
//   .catch(err => {
//     console.error('❌ Error updating student:', err);
//   }   
// );















//deleteone
async function deleteStudentById(id) {
  try {
    const result = await Student.deleteOne({ _id: id });
    if (result.deletedCount > 0) {        
      console.log('✅ Student deleted successfully:', result);
    }
    else {
      console.log('❌ No student found with id:', id);
    }
  } catch (err) {
    console.error('❌ Error deleting student:', err);
  }   
}

// Example usage
  // deleteStudentById('687cdf5e2ccc4956206760f4') // replace with a valid ID
  //   .catch(err => {
  //     console.error('❌ Error deleting student:', err);
  //   });  



    //delete many students
async function deleteMultipleStudents(filter) {
  try {
    const result = await Student.deleteMany(filter);
    if (result.deletedCount > 0) {
      console.log('✅ Multiple students deleted successfully:', result);
    } else {    
      console.log('❌ No students found matching the filter:', filter);
    }   
  }
  catch (err) {
    console.error('❌ Error deleting multiple students:', err);
  }
} 
// Example usage  
//deleteMultipleStudents({ age: { $lt: 20 } }) 




//both deleteone and deletemany silmirly for update element it do not show the deleted student
// so we use findOneAndDelete  or   findbyid and delete   method to show the deleted student also.

async function findOneAndDeleteStudent(filter) {
  try {
    const student = await Student.findOneAndDelete(filter);
    if (student) {
      console.log('✅ Student found and deleted:', student);
    } else {
      console.log('❌ No student found matching the filter:', filter);
    }
  } catch (err) {
    console.error('❌ Error finding and deleting student:', err);
  }
} 

// example usage
// findOneAndDeleteStudent({ name:'Viola Barton' })
//   .catch(err => {      
//     console.error('❌ Error deleting student:', err);
//   });  







// findby id and delete
async function findByIdAndDeleteStudent(id) {
  try {
    const student = await Student.findByIdAndDelete(id);
    if (student) {
      console.log('✅ Student found and deleted:', student);
    } else {
      console.log('❌ No student found with id:', id);
    }
  } catch (err) {
    console.error('❌ Error finding and deleting student by id:', err);
  }
}   


// example usage

// findByIdAndDeleteStudent('687d02bf217115ce7635a5d6')
//   .catch(err => {      
//     console.error('❌ Error deleting student:', err);
//   });  










