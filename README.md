<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

 -->

// ✅ Full folder & file structure starter for Rachana Ranade Hackathon project using React + Vite + Tailwind

// Step 0: Create Project (you run this in terminal)
// npx create-vite@latest rachana-ranade-website --template react
// cd rachana-ranade-website
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p


📁 rachana-ranade-website/
├── public/
│   └── index.html
├── src/
│   ├── assets/                            # All images, logos, icons
│   │   ├── images/
│   │   ├── icons/
│   │   ├── videos/
│   │   └── logos/
│   ├── components/                        # Reusable UI Components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   ├── TestimonialSlider.jsx
│   │   ├── CalculatorCard.jsx
│   │   ├── BlogCard.jsx
│   │   └── Button.jsx
│   ├── constants/                         # Static data like courseList, testimonials
│   │   ├── courses.js
│   │   ├── testimonials.js
│   │   ├── calculators.js
│   │   └── blogs.js
│   ├── layouts/                           # Common layout wrappers
│   │   └── MainLayout.jsx
│   ├── pages/                             # Route-level views
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── Membership.jsx
│   │   ├── CourseDetail.jsx
│   │   ├── FinancialCalculators.jsx
│   │   ├── Blog.jsx
│   │   ├── About.jsx
│   │   └── Login.jsx
│   ├── routes/                            # Centralized routing
│   │   └── AppRoutes.jsx
│   ├── styles/                            # Tailwind or custom global CSS
│   │   └── index.css
│   ├── App.jsx                            # Main entry component
│   ├── main.jsx                           # ReactDOM root render
│   └── tailwind.config.js                 # Tailwind configuration
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
└── vite.config.js

<!-- 
// ✅ src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ✅ src/App.jsx
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}


// ✅ src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Membership from '../pages/Membership';
import FinancialCalculators from '../pages/FinancialCalculators';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/calculators" element={<FinancialCalculators />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
} -->
