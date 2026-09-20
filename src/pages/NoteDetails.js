// Import React
import React from "react";
// Import hooks for accessing URL params, programmatically navigating, and rendering links
import { useParams, useNavigate, Link } from "react-router-dom";
// Import storage helpers
import { getNotes, deleteNoteById } from "../utils/storage";
// Import Edit and Trash icons from react-icons
import { FaEdit, FaTrash } from "react-icons/fa";

// Component for viewing single note details
export default function NoteDetails() {
  // Extract note ID from the route parameter `/note/:id`
  const { id } = useParams();
  // Initialize navigation function
  const navigate = useNavigate();
  
  // Get notes list from localStorage and find matching note by ID
  const notes = getNotes();
  const note = notes.find((n) => n.id === id);

  // If note doesn't exist, show simple fallback message
  if (!note) return <div style={{ padding: "30px" }}>Note not found!</div>;

  // Handler function to delete note and navigate back to list screen
  const handleDelete = () => {
    // Call delete storage helper
    deleteNoteById(id);
    // Redirect to All Notes screen
    navigate("/notes");
  };

  // Inline styles object
  const styles = {
    // Single note card container styled using note's pastel color
    card: {
      backgroundColor: note.color || "#ffb7b2", // Applied custom note color
      padding: "30px", // Padding inside box
      borderRadius: "20px", // Soft rounded corners
      boxShadow: "0 4px 15px rgba(0,0,0,0.03)", // Shadow
    },
    // Category pill badge tag style
    badge: {
      fontSize: "12px", // Font size
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
      padding: "4px 10px", // Inner padding
      borderRadius: "8px", // Rounded corners
      fontWeight: "bold", // Bold text
    },
    // Heading title
    title: { color: "#333333", margin: "15px 0 5px 0" },
    // Created date small text style
    date: { color: "#666666", fontSize: "12px" },
    // Main note body content paragraph
    content: {
      color: "#444444", // Text color
      fontSize: "16px", // Paragraph font size
      lineHeight: "1.6", // Line height spacing for readability
      marginTop: "20px", // Top margin
      whiteSpace: "pre-wrap", // Preserve line breaks typed in content
    },
    // Buttons action container row
    actions: { display: "flex", gap: "10px", marginTop: "30px" },
    // Edit action button (Pastel Green)
    btnEdit: {
      backgroundColor: "#b5ead7", // Pastel Green
      padding: "10px 18px", // Button padding
      borderRadius: "10px", // Rounded corners
      textDecoration: "none", // Remove underline
      color: "#333333", // Dark font color
      fontWeight: "bold", // Bold text
      display: "flex", // Align icon and text
      alignItems: "center", // Vertically center icon
      gap: "6px", // Spacing between icon and label
    },
    // Delete action button (Pastel Red/Pink)
    btnDelete: {
      backgroundColor: "#ffb7b2", // Pastel Pink/Red
      padding: "10px 18px", // Button padding
      borderRadius: "10px", // Rounded corners
      border: "none", // Remove default border
      cursor: "pointer", // Pointer cursor hover
      color: "#333333", // Dark text color
      fontWeight: "bold", // Bold text
      display: "flex", // Align icon and text
      alignItems: "center", // Vertically center icon
      gap: "6px", // Spacing between icon and label
    },
  };

  // Render Note details view
  return (
    <div style={styles.card}>
      {/* Category badge */}
      <span style={styles.badge}>{note.category}</span>
      {/* Note Title */}
      <h1 style={styles.title}>{note.title}</h1>
      {/* Date */}
      <small style={styles.date}>Created on: {note.date}</small>
      {/* Content paragraph */}
      <p style={styles.content}>{note.content}</p>

      {/* Action buttons section */}
      <div style={styles.actions}>
        {/* Link to Edit screen with Edit Icon */}
        <Link to={`/edit/${note.id}`} style={styles.btnEdit}>
          <FaEdit /> Edit Note
        </Link>
        {/* Delete Button with Trash Icon */}
        <button onClick={handleDelete} style={styles.btnDelete}>
          <FaTrash /> Delete Note
        </button>
      </div>
    </div>
  );
}