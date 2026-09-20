// // Import React library
// import React from "react";
// // Import Link component from react-router-dom for screen navigation
// import { Link } from "react-router-dom";
// // Import icons from react-icons/fa (FontAwesome library)
// import { FaStickyNote, FaHome, FaPlus } from "react-icons/fa";

// // Export default Navbar functional component
// export default function Navbar() {
//   // Inline styles object containing all CSS properties for Navbar elements
//   const styles = {
//     // Styling for main top navigation bar container
//     navbar: {
//       display: "flex", // Uses flexbox layout
//       justifyContent: "space-between", // Pushes logo to left and links to right
//       alignItems: "center", // Vertically aligns content in middle
//       backgroundColor: "#ffffff", // Pure white background for card feel
//       padding: "15px 25px", // Top/bottom and left/right inner spacing
//       borderRadius: "20px", // Rounded corners
//       boxShadow: "0 4px 15px rgba(0, 0, 0, 0.04)", // Soft subtle shadow
//       marginBottom: "25px", // Outer space below navbar
//     },
//     // Styling for title logo text
//    logo: {
//     margin: 0, // Clears default margin on heading elements
//     color: "#e75cc4", // Vibrant pastel purple/pink text color
//     fontSize: "32px", // Large size to make the logo prominent and big
//     fontWeight: "700", // Bold weight to emphasize the text structure
//     fontFamily: "'Pacifico', 'Fredoka', cursive, sans-serif", // Wavy cursive font with rounded fallback
//     letterSpacing: "1.5px", // Spacing between letters to exaggerate the wavy flow
//     textShadow: "2px 2px 0px #ffdac1", // Subtle soft pastel yellow drop shadow for extra depth
//     display: "flex", // Uses flexbox layout to align the icon with text horizontally
//     alignItems: "center", // Vertically aligns icon to match text baseline
//     gap: "12px", // Distance between icon and text label
//   },
//     // Container for right side link buttons
//     navLinks: {
//       display: "flex", // Flexbox layout for link buttons
//       gap: "15px", // Spacing between navigation links
//       alignItems: "center", // Vertical centering
//     },
//     // Standard text link styling
//     link: {
//       textDecoration: "none", // Removes underline from anchor tags
//       color: "#5a5a5a", // Soft grey font color
//       fontWeight: "600", // Semi-bold text weight
//       display: "flex", // Aligns icon and text horizontally
//       alignItems: "center", // Vertically centers icon with text
//       gap: "6px", // Spacing between icon and text
//     },
//     // Primary "New Note" call-to-action button styling
//     btnAdd: {
//       backgroundColor: "#ffb7b2", // Soft Pastel Pink background
//       color: "#ffffff", // White text color for readability
//       padding: "8px 16px", // Button padding
//       borderRadius: "12px", // Rounded pill shape
//       textDecoration: "none", // Removes underline
//       fontWeight: "bold", // Bold text
//       display: "flex", // Flexbox alignment for icon + text
//       alignItems: "center", // Centers icon vertically
//       gap: "6px", // Space between icon and label text
//     },
//   };

//   // Render navigation bar markup
//   return (
//     <nav style={styles.navbar}>
//       {/* Brand logo with sticky note icon */}
//       <h2 style={styles.logo}>
//         <FaStickyNote color="#ffb7b2" /> NOTEPAD
//       </h2>
      
//       {/* Navigation links */}
//       <div style={styles.navLinks}>
//         {/* Link to Home screen with Home icon */}
//         <Link to="/" style={styles.link}>
//           <FaHome /> Home
//         </Link>
        
//         {/* Link to All Notes screen with StickyNote icon */}
//         <Link to="/notes" style={styles.link}>
//           <FaStickyNote /> All Notes
//         </Link>
        
//         {/* Button link to Create Note screen with Plus icon */}
//         <Link to="/create" style={styles.btnAdd}>
//           <FaPlus />
//         </Link>
//       </div>
//     </nav>
//   );
// }

// Import React library
import React from "react";
// Import Link component from react-router-dom for screen navigation
import { Link } from "react-router-dom";
// Import icons from react-icons/fa (FontAwesome library)
import { FaStickyNote, FaHome, FaPlus } from "react-icons/fa";

// Export default Navbar functional component
export default function Navbar() {
  // Inline styles object containing responsive CSS properties for Navbar elements
  const styles = {
    // Styling for main top navigation bar container
    navbar: {
      display: "flex", // Uses flexbox layout
      flexWrap: "wrap", // Allows links to wrap underneath logo gracefully on narrow mobile screens
      justifyContent: "space-between", // Pushes logo to left and links to right
      alignItems: "center", // Vertically aligns content in middle
      backgroundColor: "#f1dfee", // Pure white background for card feel
      padding: "15px 20px", // Inner spacing around top nav
      borderRadius: "20px", // Rounded corners
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.04)", // Soft subtle shadow
      marginBottom: "25px", // Outer space below navbar
      gap: "15px", // Spacing when items wrap on smaller screens
    },
    // Styling for title logo text with stylish wavy font settings
   logo: {
    margin: 0, // Clears default margin on heading elements
    color: "#e75cc4", // Vibrant pastel purple/pink text color
    fontSize: "32px", // Large size to make the logo prominent and big
    fontWeight: "700", // Bold weight to emphasize the text structure
    fontFamily: "'Pacifico', 'Fredoka', cursive, sans-serif", // Wavy cursive font with rounded fallback
    letterSpacing: "1.5px", // Spacing between letters to exaggerate the wavy flow
    textShadow: "2px 2px 0px #f9ffc1", // Subtle soft pastel yellow drop shadow for extra depth
    display: "flex", // Uses flexbox layout to align the icon with text horizontally
    alignItems: "center", // Vertically aligns icon to match text baseline
    gap: "12px", // Distance between icon and text label
  },
    // Container for right side link buttons
    navLinks: {
      display: "flex", // Flexbox layout for link buttons
      flexWrap: "wrap", // Wraps links if screen space is very small
      gap: "28px", // Spacing between navigation links
      alignItems: "center", // Vertical centering
    },
    // Standard text link styling
    link: {
      textDecoration: "none", // Removes underline from anchor tags
      color: "#5a5a5a", // Soft grey font color
      fontWeight: "600", // Semi-bold text weight
      fontSize: "14px", // Standard body link font size
      display: "flex", // Aligns icon and text horizontally
      alignItems: "center", // Vertically centers icon with text
      gap: "6px", // Spacing between icon and text
    },
    // Primary "New Note" call-to-action button styling
    btnAdd: {
      backgroundColor: "#ffb7b2", // Soft Pastel Pink background
      color: "#ffffff", // White text color for readability
      padding: "8px 14px", // Button padding
      borderRadius: "12px", // Rounded pill shape
      textDecoration: "none", // Removes underline
      fontWeight: "bold", // Bold text
      fontSize: "14px", // Text size
      display: "flex", // Flexbox alignment for icon + text
      alignItems: "center", // Centers icon vertically
      gap: "6px", // Space between icon and label text
    },
  };

  // Render navigation bar markup
  return (
    <nav style={styles.navbar}>
      {/* Brand logo with sticky note icon */}
      <h2 style={styles.logo}>
        <FaStickyNote color="#ffb7b2" /> NOTEPAD
      </h2>
      
      {/* Navigation links */}
      <div style={styles.navLinks}>
        {/* Link to Home screen with Home icon */}
        <Link to="/" style={styles.link}>
          <FaHome /> Home
        </Link>
        
        {/* Link to All Notes screen with StickyNote icon */}
        <Link to="/notes" style={styles.link}>
          <FaStickyNote /> All Notes
        </Link>
        
        {/* Button link to Create Note screen with Plus icon */}
        <Link to="/create" style={styles.btnAdd}>
          <FaPlus /> 
        </Link>
      </div>
    </nav>
  );
}