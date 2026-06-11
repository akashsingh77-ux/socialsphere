# SocialSphere 🌐

SocialSphere is a dynamic, responsive social media feed dashboard that allows users to create custom posts, manage tags, dynamically track engagement, and delete updates in real-time. This project highlights efficient client-side state management without relying on heavy external third-party libraries.

## 🚀 Live Demo
🔗 **[Live Deployment Link]

(https://socialsphere-cyan.vercel.app/#)**

---

## 🛠️ Tech Stack & Technologies Used

* **Frontend Framework:** React.js (Vite workflow)
* **State Management:** React Context API (`useContext`) + Custom Reducers (`useReducer`)
* **Styling & UI Components:** Bootstrap 5 (for responsive utilities and layouts)
* **Icons:** React Icons (`md` material design pack)
* **Build Tool & Dev Server:** Vite

---

## ⚙️ Architecture & Logic Highlights

* **Global State Management:** Instead of prop-drilling, the application uses a unified `PostListProvider` utilizing the `useReducer` hook to handle actions like `ADD_POST`, `DELETE_POST`, and `ADD_REACTION` via single dispatch actions.
* **Performance Optimization:** Component styling utilizes conditional tracking variables (`isMumbai`) to dynamically render accents, profile avatars, location badges, and custom themed hashtag layouts instantly on the client side.
* **Uncontrolled Forms with Refs:** The `CreatePost` component reads values using React `useRef` directly on submission, preventing unnecessary component re-renders during active typing loops.

---

## 💻 Local Setup & Installation

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/akashsingh77-ux/socialsphere.git](https://github.com/akashsingh77-ux/socialsphere.git)
   cd socialsphere
