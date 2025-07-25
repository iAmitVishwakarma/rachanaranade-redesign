import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import MembershipPage from "../pages/Membership";
import CoursesPage from "../pages/CoursesPage";

import Auth from "../pages/Auth";
import CourseDetailPage from "../detailPage/CourseDetailPage";
import BlogPage from "../pages/BlogPage";
import BlogDetailPage from "../detailPage/BlogDetailPage";
import FinancialCalculators from "../pages/FinancialCalculators";
import AboutPage from "../pages/AboutPage";
import DynamicCalculatorPage from "../detailPage/DynamicCalculatorPage";



const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />

            <Route
              path="/blog"
              element={
                <PageWrapper>
                  <BlogPage />
                </PageWrapper>
              }
            />
            <Route
              path="/blog/:slug"
              element={
                <PageWrapper>
                  <BlogDetailPage />
                </PageWrapper>
              }
            />
            <Route
              path="/courses"
              element={
                <PageWrapper>
                  <CoursesPage />
                </PageWrapper>
              }
            />

            <Route
              path="/courses/:slug"
              element={
                <PageWrapper>
                  <CourseDetailPage />
                </PageWrapper>
              }
            />
            <Route
              path="/membership"
              element={
                <PageWrapper>
                  <MembershipPage />
                </PageWrapper>
              }
            />
            <Route
              path="/login"
              element={
                <PageWrapper>
                  <Auth />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <AboutPage />
                </PageWrapper>
              }
            />
            <Route
              path="/Financial-Calculators"
              element={
                <PageWrapper>
                  <FinancialCalculators />
                </PageWrapper>
              }
            />
             <Route
              path="/Financial-Calculators/:slug"
              element={
                <PageWrapper>
                 <DynamicCalculatorPage />
                </PageWrapper>
              }
            />
            {/* <Route path="/blog" element={<PageWrapper><BlogSection /></PageWrapper>} /> */}
          </Routes>
        </AnimatePresence>
      </main>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
};

export default MainLayout;
