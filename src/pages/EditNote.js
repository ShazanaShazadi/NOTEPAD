// Import React library
import React from "react";
// Import hooks from react-router-dom
import { useParams, useNavigate } from "react-router-dom";
// Import storage helper functions
import { getNotes, updateNoteById } from "../utils/storage";
// Import reusable NoteForm component
import NoteForm from "../components/NoteForm";

// Edit Note screen component
export default function EditNote() {
  // Get note ID from route parameter `/edit/:id`
  const { id } = useParams();
  // Navigation function hook
  const navigate = useNavigate();
  
  // Read current notes array and find existing note by ID
  const notes = getNotes();
  const existingNote = notes.find((n) => n.id === id);

  // If note doesn't exist, show fallback message
  if (!existingNote) return <div style={{ padding: "30px" }}>Note not found!</div>;

  // Component style object
  const styles = {
    container: {
      backgroundColor: "#ffffff", // White container background
      padding: "30px", // Inner padding
      borderRadius: "20px", // Rounded corners
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.02)", // Drop shadow
    },
    heading: { color: "#333333", marginTop: 0 },
  };

  // Handler function triggered when updating note
  const handleUpdate = (updatedData) => {
    // Save updated note data into browser localStorage
    updateNoteById(updatedData);
    // Redirect user back to single note details screen after updating
    navigate(`/note/${id}`);
  };

  // Render Edit screen UI
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Edit Note ✏️</h2>
      {/* Render shared NoteForm prefilled with existingNote data */}
      <NoteForm
        initialData={existingNote}
        onSubmit={handleUpdate}
        buttonText="Update Note"
      />
    </div>
  );
}