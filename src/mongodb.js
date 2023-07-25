const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/LoginSignupTutorial', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("mongodb connected");
})
.catch(err => {
  console.log("not connected", err);
});





const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",LogInSchema)


module.exports=collection