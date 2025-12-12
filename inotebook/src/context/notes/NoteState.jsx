import NoteContext from "./noteContext";
import { useContext, useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "691d8750a94588d097700dc0",
      user: "6915b04826a5c49f0d7879d2",
      title: "New Note",
      description: "Please access the playlist",
      tag: "Youtube",
      __v: 0,
    },
    {
      _id: "6921a6822f819714251f2e38",
      user: "6915b04826a5c49f0d7879d2",
      title: "New Note",
      description: "Please access the playlist",
      tag: "Youtube",
      __v: 0,
    },
    {
      _id: "6921a6932f819714251f2e3c",
      user: "6915b04826a5c49f0d7879d2",
      title: "New Note 3",
      description: "Please access the playlist",
      tag: "Youtube",
      __v: 0,
    },
    {
      _id: "6921a6820f819712251f2e38s",
      user: "6915b04826a5c49f0d7879d2",
      title: "New Note",
      description: "Please access the playlist",
      tag: "Youtube",
      __v: 0,
    },
    {
      _id: "6921a6935f819714251f2e3cf",
      user: "6915b04826a5c49f0d7879d2",
      title: "New Note 3",
      description: "Please access the playlist",
      tag: "Youtube",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  // Add a Note
  const addNote = ({title, description, tag}) => {
    // ToDO: API Call
  console.log("Adding a new note")
   const note = {
      _id: "6921a6935f819714251f2e3cf",
      user: "6915b04826a5c49f0d7879d2",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = () => {};
  // Edit a Note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
