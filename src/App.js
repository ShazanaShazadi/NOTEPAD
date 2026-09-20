// Import React library
import React from "react";
// Import React Router components for multi-screen navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import shared Navbar header component
import Navbar from "./components/Navbar";
// Import 5 Screen pages
import Home from "./pages/Home";
import AllNotes from "./pages/AllNotes";
import CreateNote from "./pages/CreateNote";
import NoteDetails from "./pages/NoteDetails";
import EditNote from "./pages/EditNote";

// Main Root Application Component
export default function App() {
  // Styles object with responsive width and fluid padding settings
  const styles = {
    // Application background styling with pastel pink tint
    app: {
      backgroundColor: "#e6cfcf", // Soft pastel pink background for whole web page
      minHeight: "100vh", // Full screen viewport height
      padding: "clamp(10px, 3vw, 25px)", // Dynamic dynamic padding: shrinks on mobile, expands on desktop
      boxSizing: "border-box", // Include padding in box calculations
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Clean UI font family
    },
    // Center main content layout box that scales fluidly across viewports
    mainContent: {
      maxWidth: "900px", // Maximum width constraint for desktop layout
      width: "100%", // Ensures element takes full width available on smaller screens
      margin: "0 auto", // Horizontally center app on screen
    },
  };

  // Render main app router structure
  return (
    <Router>
      {/* Outer wrapper div with pastel background style */}
      <div style={styles.app}>
        {/* Centered container div */}
        <div style={styles.mainContent}>
          {/* Render shared top navigation bar */}
          <Navbar />
          
          {/* Define Route configuration mapping URLs to Screen pages */}
          <Routes>
            {/* Screen 1: Home Dashboard Route */}
            <Route path="/" element={<Home />} />
            {/* Screen 2: All Notes List Route */}
            <Route path="/notes" element={<AllNotes />} />
            {/* Screen 3: Create Note Form Route */}
            <Route path="/create" element={<CreateNote />} />
            {/* Screen 4: Single Note View & Delete Route */}
            <Route path="/note/:id" element={<NoteDetails />} />
            {/* Screen 5: Edit Note Form Route */}
            <Route path="/edit/:id" element={<EditNote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}