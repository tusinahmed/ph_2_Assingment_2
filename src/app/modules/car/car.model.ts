import mongoose, { Schema } from "mongoose";



const CarSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true, min: 1886 },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CarModel = mongoose.model('Car', CarSchema);

export const car_Model = {
  CarModel
}