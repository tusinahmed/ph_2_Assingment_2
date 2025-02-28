import mongoose, { Schema } from "mongoose";
import { Order } from "./order.interface";


const OrderScheme = new Schema<Order>(
  {
    email: { type: String, required: true },
    car: { type: String, required: true, ref: "Car" }, // Reference to the Car model
    quantity: { type: Number, required: true,  },
    totalPrice: { type: Number, required: true,  },
  },
  { timestamps: true }
);


const OrderModel = mongoose.model('order', OrderScheme);

export default OrderModel;