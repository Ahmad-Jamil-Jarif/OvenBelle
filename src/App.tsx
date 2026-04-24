/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer, MobileNav } from "./components/Navigation";
import HomeView from "./components/HomeView";
import ShopView from "./components/ShopView";
import CustomOrderView from "./components/CustomOrderView";
import LocationsView from "./components/LocationsView";
import { AnimatePresence, motion } from "motion/react";
import { ThemeProvider } from "./lib/ThemeContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageWrapper = ({ children, pageKey }: { children: React.ReactNode, pageKey: string }) => (
  <motion.div
    key={pageKey}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="flex flex-col flex-1"
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-main transition-colors duration-500 selection:bg-primary-container selection:text-primary">
      <Navbar />
      <ScrollToTop />
      
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route index element={<PageWrapper pageKey="home"><HomeView /></PageWrapper>} />
            <Route path="menu" element={<PageWrapper pageKey="menu"><ShopView /></PageWrapper>} />
            <Route path="custom" element={<PageWrapper pageKey="custom"><CustomOrderView /></PageWrapper>} />
            <Route path="locations" element={<PageWrapper pageKey="locations"><LocationsView /></PageWrapper>} />
            <Route path="*" element={<PageWrapper pageKey="fallback"><HomeView /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <div className="h-20 md:hidden" /> {/* Spacer for mobile nav */}
      <MobileNav />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

