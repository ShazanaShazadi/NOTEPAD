# 🌸 Pastel Notepad App

A sweet, minimal, and fully responsive React note-taking application styled with a soft pastel theme. Built with **React.js**, **React Router**, and **React Icons**, this app lets users easily create, edit, organize, search, and manage their daily thoughts with persistent local storage.

---

## ✨ Features

- 🎨 **Pastel Aesthetic:** Soft Green, Pink, Yellow, and Purple theme palette.
- 📱 **Fully Responsive:** Looks great across mobile, tablet, and desktop screens.
- 📝 **Full CRUD Functionality:** Create, Read, Update, and Delete notes seamlessly.
- 🔍 **Real-Time Search:** Instantly filter notes by title as you type.
- 🏷️ **Categorization & Color Tags:** Organize notes by category and custom theme colors.
- 💾 **Persistent Storage:** Saves all notes to the browser's `localStorage`.
- 🔀 **Multi-Page Navigation:** Built using React Router for smooth screen transitions.

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Routing:** React Router DOM (`v6`)
- **Icons:** React Icons (`react-icons/fa`)
- **Styling:** CSS Inline Styles & Google Fonts (*Pacifico*, *Fredoka*)
- **Storage:** Browser `localStorage` API

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/pastel-notepad.git](https://github.com/YOUR_USERNAME/pastel-notepad.git)


PROJECT STRUCTURE:
   src/
├── components/
│   ├── Navbar.js         # Navigation header with responsive menu links
│   ├── NoteCard.js       # Reusable note card component for grid view
│   └── NoteForm.js       # Reusable form component for create & edit actions
├── pages/
│   ├── Home.js           # Main landing dashboard with stats overview
│   ├── AllNotes.js       # Grid view of all saved notes with search bar
│   ├── CreateNote.js     # New note creation screen
│   ├── NoteDetails.js    # Single note view & delete screen
│   └── EditNote.js       # Note editing screen
├── utils/
│   └── storage.js        # Helper functions for localStorage CRUD operations
├── App.js                # Main router setup & layout container
└── index.js              # Application entry point
