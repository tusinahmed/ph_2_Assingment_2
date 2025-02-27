import mongoose from "mongoose";
import { Car } from "./car.interface";
import { car_Model } from "./car.model";


// careate car add option
const CarDB = async (car: Car) => {
    try {
        const result = await car_Model.CarModel.create(car);
        return result;
        
    }
    catch (err) {
        console.log(err)
        
    }
}

//GetAllCarData


const CarGetAll = async (searchTerm?: string, searchValue?: string) => {
  try {
    let filter: any = {};

    if (searchTerm && searchValue) {
      filter[searchTerm] = { $regex: searchValue, $options: 'i' }; // Case-insensitive search
    }

    const result = await car_Model.CarModel.find(filter);
    return result;
  } catch (err) {
    console.log(err);
    throw err; // Re-throw the error to be handled by the controller
  }
};

//GET cAR DATA BASE ON ID 

const CarIdWiseCar = async (carId: string) => {
  try {
    const result = await car_Model.CarModel.findById(carId);
    return result;
  } catch (err) {
    console.log(err);
    throw err; // Re-throw the error to be handled by the controller
  }
};



//UPDATE

//GetAllCarData



//GET cAR DATA BASE ON ID 
const CarIdWiseCarUpdate = async (carId: string, updateData: Partial<Car>) => {
  try {
    const result = await car_Model.CarModel.findByIdAndUpdate(
      carId,
      { ...updateData, updatedAt: new Date() }, // Update updatedAt
      { new: true, runValidators: true }
    );

    if (!result) {
      throw new Error("Car not found");
    }

    return result;
  } catch (err) {
    console.log(err);
    throw err; // Re-throw the error to be handled by the controller
  }
};


//cardelete 





export const ServiceDB = {
  CarDB,
  CarGetAll,
  CarIdWiseCar,
  CarIdWiseCarUpdate,
 
}; 