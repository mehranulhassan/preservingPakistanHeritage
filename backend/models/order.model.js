import mongoose from "mongoose";

const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PreservingPakistanHeritage")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);