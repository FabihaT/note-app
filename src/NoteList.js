// NoteList.js
import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, searchQuery }) {
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.body.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return notes.length > 0 ? (
    <ul>
      {filteredNotes.map((note, index) => (
        <NoteItem note={note} index={index} key={`node-item-${index}`} />
      ))}
    </ul>
  ) : (
    <p id="no-note-yet">No Notes</p>
  );
}

export default NoteList;
