import { Response, Request } from "express"
import  { service } from "./order.service";


const OrderCreate = async (req: Request, res: Response) => {
    try {
        const orderis = req.body;
        const resultorder = await service.OrderDB(orderis);

        res.send({
            message: "order create done",
            data: resultorder
        })
        
    }
    catch (err) {
        console.log(err)
    }

}


 const RevenueController = async (req: Request, res: Response) => {
  try {
    // const orderis = req.body;
      const resultorder = await service.RevenueDB();
      

    res.send({
      message: "revenwi is",
      data: resultorder,
    });
  } catch (err) {
    console.log(err);
  }
};



export const OrderControllerIs = {
  OrderCreate,
  RevenueController,
}; 