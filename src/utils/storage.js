// Storage key used to identify our notes inside the browser's localStorage
const STORAGE_KEY = "pastel_notepad_notes";

// Retrieves all notes from localStorage, parses JSON, or returns an empty array if none exist
export const getNotes = () => {
  // Read stringified data from browser localStorage using our key
  const data = localStorage.getItem(STORAGE_KEY);
  // If data exists convert JSON string back into JS array, otherwise return empty array
  return data ? JSON.parse(data) : [];
};

// Saves the updated notes array back into browser localStorage as a string
export const saveNotes = (notes) => {
  // Convert JS array into JSON string and save to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

// Adds a single new note to the beginning of the notes array and saves it
export const addNote = (newNote) => {
  // Get current notes array
  const notes = getNotes();
  // Prepend new note to array and save to localStorage
  saveNotes([newNote, ...notes]);
};

// Deletes a note by filtering out the matching ID and saving the remaining array
export const deleteNoteById = (id) => {
  // Get current notes array
  const notes = getNotes();
  // Filter out the note that matches the provided ID
  saveNotes(notes.filter((note) => note.id !== id));
};

// Updates an existing note by matching its ID and replacing its content
export const updateNoteById = (updatedNote) => {
  // Get current notes array
  const notes = getNotes();
  // Map through notes and replace matching ID note with updated version
  saveNotes(
    notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
  );
};