import mongoose from "mongoose";
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PreservingPakistanHeritage")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);