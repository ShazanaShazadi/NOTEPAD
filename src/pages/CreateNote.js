// Import React library
import React from "react";
// Import useNavigate hook from react-router-dom to change screen programmatically
import { useNavigate } from "react-router-dom";
// Import addNote helper function from storage utility
import { addNote } from "../utils/storage";
// Import reusable NoteForm component
import NoteForm from "../components/NoteForm";

// Create Note screen component
export default function CreateNote() {
  // Initialize navigate function for redirecting after save
  const navigate = useNavigate();

  // Page container styles
  const styles = {
    container: {
      backgroundColor: "#ffffff", // White container background
      padding: "30px", // Padding inside box
      borderRadius: "20px", // Soft rounded corners
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.02)", // Drop shadow
    },
    heading: { color: "#333333", marginTop: 0 }, // Title styling
  };

  // Handler function passed into NoteForm
  const handleCreate = (newNote) => {
    // Save new note to browser localStorage
    addNote(newNote);
    // Redirect user to All Notes screen automatically after saving
    navigate("/notes");
  };

  // Render Create Note screen layout
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a New Note ✍️</h2>
      {/* Render NoteForm component passing submit handler and button text */}
      <NoteForm onSubmit={handleCreate} buttonText="Save Note" />
    </div>
  );
}