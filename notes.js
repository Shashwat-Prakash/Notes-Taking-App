const fs = require("fs");

// Adding a new Note to notes.json file
const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNote(notes);
    console.log("Notes added succesfully!");
  } else console.log("Notes title already exist!");
};

//Load all notes available in notes.json
const loadNotes = function() {
  try {
    const dataFetch = fs.readFileSync("notes.json");
    const dataFetchToString = dataFetch.toString();
    return JSON.parse(dataFetchToString);
  } catch (ex) {
    return [];
  }
};

//Save new notes to notes.json file
const saveNote = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//Remove a note from notes.json file
const removeNote = function(title) {
  const notes = loadNotes();
  const keepNotes = notes.filter(function(note) {
    return note.title !== title;
  });

  if (notes.length > keepNotes.length) {
    saveNote(keepNotes);
    console.log("Note " + title + " removed succesfully!");
  } else console.log("Note not found!");
};

// List all notes available in notes.json file
const listNotes = () => {
  const dataFetch = loadNotes();
  console.log("Your Notes Title");
  dataFetch.forEach(note => {
    return console.log(note.title);
  });
};

//Read a note from notes.json file
const readNote = title => {
  const dataFetch = loadNotes();
  //   const dataToRead = dataFetch.filter(note => {
  //     if (note.title === title) {
  //       return console.log(note.body);
  //     }
  //   });
  const dataToRead = dataFetch.find(note => {
    return note.title === title;
  });

  if (dataToRead) {
    console.log("Title: " + dataToRead.title);
    console.log("Body: " + dataToRead.body);
  } else {
    console.log("Title not found!");
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
