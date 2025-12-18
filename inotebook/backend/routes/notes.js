const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1: Get all the notes using: GET "/api/auth/fetchallnotes".Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});


// Route 2: Get all the notes using: POST "/api/auth/addnote".Login Required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid name").isLength({ min: 3 }),

    body("description", "Desription must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
      const note = new Note({ title, description, tag, user: req.user.id });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
// Route 3: Update an existing note using: PUT "/api/notes/updatenote".Login Required
router.put(
  "/updatenote/:id",
  fetchuser,
  async (req, res) => {
   const {title, description, tag} = req.body
   // Create a new Note object
   try{
   let newNote = {}
   if(title){ newNote.title = title}
   if(description){ newNote.description = description}
   if(tag){ newNote.tag = tag}

   // Find the note to be updated and update it
   let note = await Note.findById(req.params.id)
   if(!note){
   return res.status(404).send("Not Found")
  }
  if(note.user.toString() !== req.user.id)
  {
    return res.status(401).send("Not Allowed")
  }
 note = await Note.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true})
 /** new:true => return object after update rather than before update */
 res.json({note})
}
catch(error){
 console.error(error.message);
 res.status(500).send("Internal Server Error");
}
  } 
);

// Route 4: Delete an existing note using: DELETE "/api/notes/deletenote".Login Required
router.delete(
  "/deletenote/:id",
  fetchuser,
  async (req, res) => {
 try{

   // Find the note to be deleted and delete it
   console.log(req.params.id)
   let note = await Note.findById(req.params.id)
   if(!note){
   return res.status(404).send("Not Found")
  }
  console.log(note)
  //Allow deletion only if user owns this Note 
  if(note.user.toString() !== req.user.id)
  {
    return res.status(401).send("Not Allowed")
  }
 note = await Note.findByIdAndDelete(req.params.id)
 /** new:true => return object after update rather than before update */
 res.json({Success:"Note has been deleted",note})
 }catch(error){
  console.error(error.message);
  res.status(500).send("Internal Server Error");
 }  
} 
);

module.exports = router;
