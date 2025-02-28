import mongoose from "mongoose";
import { Order } from "./order.interface";
import OrderModel from "./order.model";
import { car_Model } from "../car/car.model";

const OrderDB = async (order: Order) => {
  try {
    // Extract car ID and order quantity
    const { car: carId, quantity: orderQuantity } = order;

    console.log("Car ID:", carId);

    // Fetch the car details
    const car = await car_Model.CarModel.findById(carId);
    if (!car) {
      return { message: "Car not found", status: false };
    }

    console.log("Current Car Stock:", car.quantity);

    // Check if stock is sufficient
    if (car.quantity < orderQuantity) {
      return { message: "Insufficient stock", status: false };
    }

    // Calculate new quantity
    const newQuantity = car.quantity - orderQuantity;

    // Calculate new total price
    const NewTotal = orderQuantity * car.price;

    // Update the car's inventory
    const updatedCar = await car_Model.CarModel.findByIdAndUpdate(
      carId,
      {
        quantity: newQuantity,
        inStock: newQuantity > 0, // Set inStock to false if quantity is 0
      },
      { new: true }
    );

    console.log("Updated Car:", updatedCar);

    // Create the order with updated totalPrice
    const orderResult = await OrderModel.create({
      ...order,
      totalPrice: NewTotal, // Updated total price
    });

    // Return success response
    return {
      message: "Order created successfully",
      status: true,
      data: orderResult,
    };
  } catch (err) {
    console.error("Error processing order:", err);
    return { message: "Internal server error", status: false };
  }
};


const RevenueDB = async () => {
  try {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);
    console.log("result revenue is", result);
    return result;
  } catch (err) {
    console.log(err);
    throw err; 
  }
};

export const service = {
  OrderDB,
  RevenueDB,
};
    

