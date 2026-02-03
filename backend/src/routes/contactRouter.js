import Router from "express"
import { addContact,getAllContact } from "../controllers/contactController.js";
const contactRouter = Router();

contactRouter.post('/contact', addContact );
contactRouter.get('/list-contact',getAllContact)

export {
    contactRouter
}
