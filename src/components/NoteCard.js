// Import React library
import React from "react";
// Import Link component for routing to details screen
import { Link } from "react-router-dom";
// Import Eye icon from react-icons for view button
import { FaEye } from "react-icons/fa";

// Component representing individual note card in grid layout
export default function NoteCard({ note }) {
  // Styles object for NoteCard component
  const styles = {
    // Main card container styles
    card: {
      // Dynamic background color from note data (falls back to pastel pink if empty)
      backgroundColor: note.color || "#ffb7b2",
      padding: "20px", // Inner padding
      borderRadius: "16px", // Rounded corners
      display: "flex", // Flexbox layout
      flexDirection: "column", // Stack items vertically
      justifyContent: "space-between", // Push header content to top and footer to bottom
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.03)", // Subtle card drop shadow
      height: "170px", // Fixed height for consistent grid card size
    },
    // Category tag badge styles
    badge: {
      fontSize: "11px", // Small text size
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
      padding: "4px 8px", // Padding around category text
      borderRadius: "8px", // Soft badge corners
      width: "fit-content", // Fit content width exactly
      fontWeight: "600", // Semi-bold text
      color: "#444444", // Dark grey text color
    },
    // Note Title styling
    title: {
      margin: "10px 0 5px 0", // Top and bottom spacing
      color: "#333333", // Dark heading text color
      fontSize: "18px", // Title size
    },
    // Note snippet description text
    content: {
      margin: "0", // Clear margins
      color: "#555555", // Medium grey body text
      fontSize: "14px", // Readable body font size
    },
    // Footer row container inside card
    footer: {
      display: "flex", // Horizontal flexbox layout
      justifyContent: "space-between", // Push date to left and button to right
      alignItems: "center", // Center align vertically
      marginTop: "15px", // Top margin separation
    },
    // Small date text styling
    date: {
      color: "#666666", // Grey date color
      fontSize: "12px", // Small font size
    },
    // View details button styling
    btn: {
      textDecoration: "none", // Remove underline from link
      color: "#333333", // Dark grey text color
      fontWeight: "bold", // Bold font
      fontSize: "14px", // Size
      display: "flex", // Flex box for icon alignment
      alignItems: "center", // Center icon vertically
      gap: "4px", // Space between icon and text
    },
  };

  // JSX rendering note card structure
  return (
    <div style={styles.card}>
      {/* Top section containing category, title, and content preview */}
      <div>
        <span style={styles.badge}>{note.category}</span>
        <h3 style={styles.title}>{note.title}</h3>
        {/* Displays first 45 characters of content followed by ellipsis */}
        <p style={styles.content}>{note.content.substring(0, 45)}...</p>
      </div>
      
      {/* Footer section containing creation date and View Details link */}
      <div style={styles.footer}>
        <small style={styles.date}>{note.date}</small>
        <Link to={`/note/${note.id}`} style={styles.btn}>
          <FaEye /> View
        </Link>
      </div>
    </div>
  );
}