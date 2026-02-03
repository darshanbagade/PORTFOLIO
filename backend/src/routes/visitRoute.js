import {Router} from "express";
import { countVisit,getCount } from "../controllers/countVisit.js";

const visitRouter = Router();

visitRouter.post('/visit',countVisit);
visitRouter.get('/visit-count',getCount);

export {
    visitRouter
}