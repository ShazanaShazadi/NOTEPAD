// Import React and hooks for managing state and lifecycle
import React, { useState, useEffect } from "react";
// Import Link component for switching screens
import { Link } from "react-router-dom";
// Import getNotes helper from storage utility
import { getNotes } from "../utils/storage";
// Import icons from react-icons
import { FaPlus, FaStickyNote, FaHeart } from "react-icons/fa";

// Home screen component
export default function Home() {
  // Local state storing the current count of saved notes
  const [notesCount, setNotesCount] = useState(0);

  // useEffect runs once when screen mounts to read notes count from localStorage
  useEffect(() => {
    // Get array of notes and update count state
    setNotesCount(getNotes().length);
  }, []);

  // Inline styling object
  const styles = {
    // Card container styling
    container: {
      backgroundColor: "#ffffff", // White background
      padding: "35px", // Padding inside container
      borderRadius: "20px", // Rounded corners
      textAlign: "center", // Center text elements
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.02)", // Subtle shadow
    },
    // Heading title styling
    title: {
      color: "#333333", // Dark grey color
      marginBottom: "10px", // Margin space
      display: "flex", // Flex alignment for icon
      justifyContent: "center", // Center horizontally
      alignItems: "center", // Center vertically
      gap: "10px", // Distance between text and icon
    },
    // Subtitle paragraph
    text: {
      color: "#666666", // Medium grey font
      marginBottom: "25px", // Margin below
    },
    // Pastel statistics highlight card box
    statsCard: {
      backgroundColor: "#ffdac1", // Pastel Yellow background color
      padding: "20px 30px", // Internal card padding
      borderRadius: "16px", // Rounded corners
      display: "inline-block", // Shrink wrap content
      marginBottom: "30px", // Spacing below
    },
    // Number display style inside stats card
    statsNumber: {
      fontSize: "40px", // Big number font size
      margin: "10px 0 0 0", // Margin
      color: "#333333", // Dark number text
    },
    // Actions container for navigation buttons
    actions: {
      display: "flex", // Horizontal flex alignment
      justifyContent: "center", // Center buttons horizontally
      gap: "15px", // Distance between action buttons
    },
    // Primary button style (Pink pastel)
    btnPrimary: {
      backgroundColor: "#ffb7b2", // Pastel Pink
      color: "#ffffff", // White text
      padding: "12px 22px", // Button padding
      borderRadius: "12px", // Rounded shape
      textDecoration: "none", // Remove underline
      fontWeight: "bold", // Bold text
      display: "flex", // Align icon and text
      alignItems: "center", // Vertical centering
      gap: "8px", // Icon spacing
    },
    // Secondary button style (Purple pastel)
    btnSecondary: {
      backgroundColor: "#c7ceea", // Pastel Purple
      color: "#333333", // Dark text color
      padding: "12px 22px", // Button padding
      borderRadius: "12px", // Rounded shape
      textDecoration: "none", // Remove underline
      fontWeight: "bold", // Bold font
      display: "flex", // Align icon and text
      alignItems: "center", // Vertical centering
      gap: "8px", // Icon spacing
    },
  };

  // Render Home Dashboard UI
  return (
    <div style={styles.container}>
      {/* Title heading with Heart Icon */}
      <h1 style={styles.title}>
        Welcome to Your Soft Space <FaHeart color="#ffb7b2" />
      </h1>
      
      {/* Description text */}
      <p style={styles.text}>
        A sweet notepad to organize your daily thoughts and ideas.
      </p>

      {/* Pastel Yellow Stats Box */}
      {/* <div style={styles.statsCard}>
        <h3 style={{ margin: 0, color: "#555555" }}>Total Saved Notes</h3>
        <h2 style={styles.statsNumber}>{notesCount}</h2>
      </div> */}

      {/* Screen Action buttons */}
      <div style={styles.actions}>
        <Link to="/create" style={styles.btnPrimary}>
          <FaPlus /> Create New Note
        </Link>
        <Link to="/notes" style={styles.btnSecondary}>
          <FaStickyNote /> View All Notes
        </Link>
      </div>
    </div>
  );
}