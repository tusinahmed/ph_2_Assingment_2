import mongoose from "mongoose";
import app from "./app"
import config from "./app/config";





async function server() {
    const port = 3000;
    try {

        await mongoose.connect(config.databaseurl as string);
        console.log('database connect ')
    
        app.listen(port, () => {
            console.log(`server is running ${port}`)
        })
        
        
    }
    catch (err) {
        console.log(err)
        
    }
    
}

server();