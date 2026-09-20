// Import React and standard hooks
import React, { useState, useEffect } from "react";
// Import getNotes storage utility
import { getNotes } from "../utils/storage";
// Import reusable NoteCard component
import NoteCard from "../components/NoteCard";
// Import Search icon from react-icons
import { FaSearch } from "react-icons/fa";

// All Notes Screen Component
export default function AllNotes() {
  // Local state storing array of notes retrieved from localStorage
  const [notes, setNotes] = useState([]);
  // Local state storing current text typed into search input box
  const [search, setSearch] = useState("");

  // useEffect hook loads saved notes from localStorage when component mounts
  useEffect(() => {
    setNotes(getNotes());
  }, []);

  // Filter notes array in real-time matching notes titles against search string
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  // Component style definitions
  const styles = {
    // Outer white page container box
    container: {
      backgroundColor: "#ffffff", // White background
      padding: "30px", // Inner padding
      borderRadius: "20px", // Rounded corners
      boxShadow: "0 4px 15px rgba(0,0,0,0.02)", // Light shadow
    },
    // Heading styling
    heading: { color: "#333333", marginTop: 0 },
    // Container for search input and icon
    searchWrapper: {
      display: "flex", // Align icon and input
      alignItems: "center", // Center vertically
      border: "2px solid #eee", // Border outline
      borderRadius: "12px", // Corner radius
      padding: "0 12px", // Side padding
      marginBottom: "20px", // Margin below search bar
    },
    // Search input element styles
    searchInput: {
      width: "100%", // Take full remaining width
      padding: "12px", // Input padding
      border: "none", // Remove inner default border
      fontSize: "14px", // Text size
      outline: "none", // Remove focus outline
    },
    // Grid layout for note cards
    grid: {
      display: "grid", // CSS grid layout
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", // Responsive columns
      gap: "20px", // Space between grid items
    },
    // Empty state text styling
    empty: { textAlign: "center", color: "#888888", marginTop: "20px" },
  };

  // Render All Notes Screen UI
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>All Notes 📝</h2>
      
      {/* Search Input Box with Icon */}
      <div style={styles.searchWrapper}>
        <FaSearch color="#aaa" />
        <input
          type="text"
          style={styles.searchInput}
          placeholder="Search notes by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Render grid of notes or empty message */}
      {filteredNotes.length === 0 ? (
        <p style={styles.empty}>No notes found!</p>
      ) : (
        <div style={styles.grid}>
          {/* Map through filtered notes array and render a NoteCard for each note */}
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
}