import { ICollection } from "monk";
import db from './db';

const visits: ICollection = db.get('visits')
visits.createIndex({ "slug": 1 }, { unique: true })

export { visits };