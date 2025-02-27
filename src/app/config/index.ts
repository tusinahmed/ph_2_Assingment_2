import dotenv from 'dotenv';
import path from 'path';



dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    databaseurl: process.env.DATABASE_URL,
    port : process.env.PORT,
    
};

