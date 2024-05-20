import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {dkeeper} from '../../../declarations/dkeeper'
import { TNote } from "../types";

function App() {
  const [notes, setNotes] = useState<Array<TNote>>([]);

  function addNote(newNote: TNote) {
    setNotes(prevNotes => {
      dkeeper.createNote(newNote.title, newNote.content || '');
      return [newNote, ...prevNotes];
    });
  }

  function deleteNote(id: number) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
    dkeeper.deleteNote(id as unknown as bigint);
  }

  useEffect(()=>{
    (async()=>{
      const fetchedNotes = await dkeeper.getNotes();
      setNotes(fetchedNotes)
    })()
  },[])

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
