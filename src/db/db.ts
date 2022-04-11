import { IMonkManager } from "monk";
import * as monk from 'monk';
import * as dotenv from 'dotenv';

dotenv.config();

const db: IMonkManager = monk.default(process.env.MONGO_URI ?? '');
export default db;