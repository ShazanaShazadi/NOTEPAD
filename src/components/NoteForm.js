// Import React and useState hook for local form inputs management
import React, { useState } from "react";
// Import Save icon from react-icons
import { FaStickyNote } from "react-icons/fa";

// Shared Form component used for both Creating and Editing notes
export default function NoteForm({ initialData, onSubmit, buttonText }) {
  // useState hooks to manage form input fields initialized with initialData (if editing) or defaults
  const [title, setTitle] = useState(initialData ? initialData.title : "");
  const [content, setContent] = useState(initialData ? initialData.content : "");
  const [category, setCategory] = useState(initialData ? initialData.category : "Personal");
  const [color, setColor] = useState(initialData ? initialData.color : "#b5ead7");

  // Pastel Palette options array: Green, Pink, Yellow, Purple
  const pastelColors = [
    { name: "Pastel Green", hex: "#acd8be" },
    { name: "Pastel Pink", hex: "#ffb7b2" },
    { name: "Pastel Yellow", hex: "#ecacee" },
    { name: "Pastel Purple", hex: "#eef88f" },
  ];

  // Component inline styles
  const styles = {
    // Form stack layout
    form: {
      display: "flex", // Flexbox container
      flexDirection: "column", // Vertical stack layout
      gap: "14px", // Distance between input fields
    },
    // Form field label styles
    label: {
      fontWeight: "bold", // Bold label text
      color: "#5a5a5a", // Grey color
      fontSize: "14px", // Font size
    },
    // Text input and select dropdown field styles
    input: {
      padding: "12px", // Inner padding
      border: "2px solid #f1f1f1", // Light border
      borderRadius: "10px", // Rounded input corners
      fontSize: "14px", // Text size
      outline: "none", // Remove default focus outline glow
    },
    // Textarea multiline input box styles
    textarea: {
      padding: "12px", // Inner padding
      border: "2px solid #f1f1f1", // Light border
      borderRadius: "10px", // Rounded corners
      fontSize: "14px", // Text size
      outline: "none", // Remove outline glow
      fontFamily: "inherit", // Inherit app font family
    },
    // Container row for pastel color circle buttons
    colorContainer: {
      display: "flex", // Align buttons horizontally
      gap: "12px", // Spacing between color circle buttons
    },
    // Dynamic function returning style object for individual color selector button
    colorBtn: (hexColor) => ({
      width: "36px", // Circle width
      height: "36px", // Circle height
      borderRadius: "50%", // Perfectly circular shape
      // Show bold purple border if currently selected color, otherwise no border
      border: color === hexColor ? "3px solid #6c5ce7" : "none",
      backgroundColor: hexColor, // Apply pastel color to button background
      cursor: "pointer", // Pointer cursor on hover
    }),
    // Submit action button styling
    submitBtn: {
      backgroundColor: "#c7ceea", // Pastel Purple submit button
      border: "none", // Remove border
      padding: "12px", // Inner padding
      borderRadius: "10px", // Rounded corners
      cursor: "pointer", // Cursor indicator
      fontWeight: "bold", // Bold font
      fontSize: "16px", // Button text size
      color: "#4a4a4a", // Dark grey text color
      marginTop: "10px", // Spacing from top elements
      display: "flex", // Flex layout to align icon and text
      justifyContent: "center", // Center content horizontally
      alignItems: "center", // Center content vertically
      gap: "8px", // Distance between icon and button text
    },
  };

  // Form submission handler function
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser page refresh on form submit
    
    // Simple form validation check
    if (!title.trim() || !content.trim()) {
      return alert("Please fill in all required fields!");
    }

    // Pass structured note object to parent handler function
    onSubmit({
      id: initialData ? initialData.id : Date.now().toString(), // Keep existing ID or create new timestamp ID
      title, // Note title value
      content, // Note body text value
      category, // Category dropdown value
      color, // Chosen pastel color hex value
      date: new Date().toLocaleDateString(), // Today's date string
    });
  };

  // Form JSX template
  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      {/* Title input field */}
      <label style={styles.label}>Note Title</label>
      <input
        style={styles.input}
        type="text"
        placeholder="Enter note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Category selection dropdown */}
      <label style={styles.label}>Category</label>
      <select
        style={styles.input}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Personal">Personal 🌷</option>
        <option value="Work">Work ☕</option>
        <option value="Ideas">Ideas 💡</option>
      </select>

      {/* Pastel color picker selector */}
      <label style={styles.label}>Choose Pastel Color Theme</label>
      <div style={styles.colorContainer}>
        {pastelColors.map((c) => (
          <button
            type="button" // Set explicit button type so it doesn't trigger form submit
            key={c.hex} // Unique key for list items
            title={c.name} // Hover tooltip showing color name
            style={styles.colorBtn(c.hex)} // Apply dynamic style
            onClick={() => setColor(c.hex)} // Set selected color state on click
          />
        ))}
      </div>

      {/* Content textarea field */}
      <label style={styles.label}>Content</label>
      <textarea
        style={styles.textarea}
        rows="5"
        placeholder="Type your note content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Form submit button */}
      <button type="submit" style={styles.submitBtn}>
        <FaStickyNote /> {buttonText}
      </button>
    </form>
  );
}