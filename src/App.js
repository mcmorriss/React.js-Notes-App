import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "1/29/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "2/2/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "2/29/2022"
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "12/25/2022"
    },
  ]);

  const addNote = (text) => {
      const date = new Date();
      const newNote = {
          id: nanoid(),
          text: text,
          date: date.toLocaleTimeString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  };

  const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
  };

  return (
      <div className="container">
          <NotesList 
            notes={notes} 
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
      </div>
  );
};

export default App;