import { ContactModel } from "../models/ContactModel.js";



//add contact
const addContact = async (req,res) => {
    console.log(req.body);
    try {
      const { name, email, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      const newContact = await ContactModel.create({
        name,
        email,
        message,
      });

      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: newContact,
      });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
}


//getAll Contact
const getAllContact = async (req,res)=>{
    try {

      const data = await ContactModel.find();

      res.status(200).json(
        {
          success:true,
          data : data,
          count: data.length  
        }

      )

    } catch (error) {
       res.status(500).json(
        {
          success:false,
          msg: "Server Error"
        }
      )
    }
}

export {
    addContact,
    getAllContact
}