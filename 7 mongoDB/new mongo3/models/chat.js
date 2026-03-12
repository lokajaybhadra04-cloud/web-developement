
const mongoose=require("mongoose");
const ChatSchema=new mongoose.Schema({
    from: {
    type: String,
    // 'User' is the name of your User model
    required:true,
  },
  // Reference to the recipient(s). An array supports group messages.
  to: [
    {
      type: String,
    // 'User' is the name of your User model
      required:true,
    },
  ],
  // The actual message content
  message: {
    type: String,
    maxLength:50,
    
  },
  // Timestamp for when the message was created
  createdAt: {
    type: Date,
      required:true,
  }

});

const Chat = mongoose.model("Chat", ChatSchema);
module.exports=Chat;