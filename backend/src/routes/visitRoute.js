import {Router} from "express";
import { countVisit } from "../controllers/countVisit.js";

const visitRouter = Router();

visitRouter.post('/visit',countVisit);

export {
    visitRouter
}