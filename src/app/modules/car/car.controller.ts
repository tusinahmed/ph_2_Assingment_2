import { ServiceDB } from "./car.service";

import { Request, Response } from "express";



const CarCreate = async (req: Request, res: Response) => {
    try {
        const carresult = req.body;
        const result = await ServiceDB.CarDB(carresult);
        res.send({
          message: "Car created successfully",
            success: true,
          data: result
        });
      


    }

    catch (err) {
        console.log(err)
    }

    
}

//GetAllCarDATA 
const CarGetAll = async (req: Request, res: Response) => {
  try {
    const { searchTerm, searchValue } = req.query;

    const result = await ServiceDB.CarGetAll(
      searchTerm as string,
      searchValue as string
    );

    res.send({
      message: "Car retrieved successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Failed to retrieve cars",
      success: false,
      error: err,
    });
  }
};


//GetCaridwise


const CarGETidWise = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params; // ✅ Use 'carId' to match the route
    console.log("carId:", carId);

      const result = await ServiceDB.CarIdWiseCar(carId);
      console.log("result", result)

    res.send({
      message: "Car retrieved successfully",
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Failed to retrieve car",
      success: false,
      error: err,
    });
  }
};


//updatecar

const CarUpdateIDWise = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params; // ✅ Use 'carId' to match the route
    const updateData = req.body; // Get the update data from the request body

    const result = await ServiceDB.CarIdWiseCarUpdate(carId, updateData); // Pass both carId and updateData
    console.log("result", result);

    res.send({
      message: "Car updated successfully", // Corrected message
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Failed to update car",
      success: false,
      error: err,
    });
  }
};



export const CarController = {
  CarCreate,
  CarGetAll,
  CarGETidWise,
  CarUpdateIDWise,

};