# Rachana Ranade - Website Redesign (Hackathon Edition)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Zustand](https://img.shields.io/badge/Zustand-B47427?style=for-the-badge&logo=zustand&logoColor=white)

A modern, fully responsive, and animated redesign of the CA Rachana Ranade website, built for a hackathon. This project transforms a static educational platform into a dynamic and engaging user experience, focusing on clean UI, smooth animations, and a component-based architecture.

## ✨ Key Features

- **Modern & Responsive Design:** The UI is crafted to be pixel-perfect and fully responsive across all devices, from mobile phones to large desktops.
- **Engaging Animations:** Subtle and meaningful animations using **Framer Motion** provide a fluid and interactive user experience.
- **Component-Based Architecture:** Built with reusable React components for scalability and easy maintenance.
- **State Management with Zustand:** Minimal and efficient state management for courses, testimonials, and other shared data.
- **Functional Authentication:** A complete login/signup flow with persistent state using **Local Storage**.
- **Dynamic Content:** Pages like Course Details and Blog posts are dynamically rendered based on data from a central store.
- **Interactive Components:** Includes a video popup modal, animated timelines, and testimonial sliders.
- **Clean Codebase:** Follows modern React best practices with a clear and organized file structure.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/iamitvishwakarma/rachanaranade-redesign.git](https://github.com/iamitvishwakarma/rachanaranade-redesign.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd rachanaranade-redesign
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📁 File Structure

The project follows a clean and organized structure to separate concerns and improve maintainability.

```
src/
├── assets/             # Images, logos, and other static assets
├── components/         # Reusable components used across the app
│   ├── home/           # Components specific to the Homepage
│   ├── course/         # Components for the Course Detail page
│   └── calculator/     # Components for the Calculator pages
├── data/               # Centralized data stores (JS files)
├── detailPage/         # Page components for detailed views (e.g., Blog, Course)
├── layouts/            # Main layout wrappers (e.g., Navbar, Footer)
├── pages/              # Top-level page components
├── stores/             # Zustand state management stores
├── App.jsx             # Main application component with routing setup
└── main.jsx            # Entry point of the React application

```

## 🛠️ Technologies Used

- **Frontend:** React.js, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP (for counters)
- **State Management:** Zustand
- **Routing:** React Router DOM
- **Icons:** Lucide React

---
