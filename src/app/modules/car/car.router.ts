import { Router } from "express";
import { CarController } from "./car.controller";



const router = Router();

router.post('/car-add', CarController.CarCreate);
router.get('/', CarController.CarGetAll);
router.get("/:carId", CarController.CarGETidWise);
router.put("/:carId", CarController.CarUpdateIDWise); 
router.delete("/:carId", CarController.CarUpdateIDelet);




export default router;