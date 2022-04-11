import { ICollection } from "monk";
import db from './db';

const urls: ICollection = db.get('urls')
urls.createIndex({ "slug": 1 }, { unique: true })

export { urls };