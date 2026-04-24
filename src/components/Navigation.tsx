import { NavLink } from 'react-router-dom';
import { ShoppingBag, User, Cake, MapPin, Sparkles, Sun, Moon } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useTheme } from '../lib/ThemeContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  
  const blurAmount = useTransform(scrollY, [0, 50], [0, 12]);

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    [
      theme === 'light' ? 'rgba(255, 255, 255, 0)' : 'rgba(17, 17, 17, 0)',
      theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(17, 17, 17, 0.8)'
    ]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 50],
    [
      theme === 'light' ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)',
      theme === 'light' ? 'rgba(121, 84, 101, 0.1)' : 'rgba(255, 255, 255, 0.1)'
    ]
  );

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: useTransform(blurAmount, v => `blur(${v}px)`),
        borderColor
      }}
      className="fixed top-0 w-full z-50 border-b transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 w-full">
        <NavLink to="/" className="text-2xl font-bold italic text-primary tracking-tight font-display">
          OvenBelle
        </NavLink>
        
        <div className="hidden md:flex space-x-8 items-center font-display text-text-muted">
          <NavLink 
            to="/menu" 
            className={({ isActive }) => cn(
              "hover:text-primary transition-all duration-300",
              isActive && "text-primary font-semibold"
            )}
          >
            Our Menu
          </NavLink>
          <NavLink 
            to="/" 
            className={({ isActive }) => cn(
              "hover:text-primary transition-all duration-300 border-b-2 border-transparent pb-1",
              isActive && "text-primary border-primary font-semibold"
            )}
          >
            Our Story
          </NavLink>
          <NavLink 
            to="/custom" 
            className={({ isActive }) => cn(
              "hover:text-primary transition-all duration-300",
              isActive && "text-primary font-semibold"
            )}
          >
            Custom Cakes
          </NavLink>
          <NavLink 
            to="/locations" 
            className={({ isActive }) => cn(
              "hover:text-primary transition-all duration-300",
              isActive && "text-primary font-semibold"
            )}
          >
            Our Locations
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-primary-container/20 text-primary hover:bg-primary-container hover:scale-110 transition-all duration-300"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {theme === 'dark' ? <Sun size={20} className="fill-current" /> : <Moon size={20} />}
            </motion.div>
            <AnimatePresence>
              {theme === 'dark' && (
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 text-tertiary"
                >
                  <Sparkles size={12} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
          <button className="text-text-muted hover:text-primary transition-all duration-300 active:scale-95">
            <ShoppingBag size={20} />
          </button>
          <button className="hidden md:flex bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-300 active:scale-95 shadow-lg shadow-primary/20">
            Order Now
          </button>
          <button className="flex md:hidden text-text-muted">
            <User size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface-container w-full py-12 mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-xl font-bold text-primary font-display mb-4 block">OvenBelle</span>
          <p className="text-sm text-text-muted">© 2026 OvenBelle. Handcrafted with love.</p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end text-sm text-text-muted">
          <a className="hover:text-primary underline-offset-4 hover:underline transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary underline-offset-4 hover:underline transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary underline-offset-4 hover:underline transition-colors" href="#">Shipping Info</a>
          <a className="hover:text-primary underline-offset-4 hover:underline transition-colors" href="#">Wholesale</a>
        </div>
      </div>
    </footer>
  );
}

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-surface/80 backdrop-blur-xl border-t border-primary/10 shadow-2xl z-50">
      <NavLink to="/menu" className={({ isActive }) => cn(
        "flex flex-col items-center justify-center px-4 py-1.5 rounded-2xl transition-all duration-200",
        isActive ? "bg-primary-container text-primary" : "text-text-muted"
      )}>
        {({ isActive }) => (
          <>
            <ShoppingBag size={24} className={isActive ? "fill-current" : ""} />
            <span className="text-[10px] font-bold mt-1 uppercase text-center">Bake Shop</span>
          </>
        )}
      </NavLink>

      <NavLink to="/custom" className={({ isActive }) => cn(
        "flex flex-col items-center justify-center px-4 py-1.5 rounded-2xl transition-all duration-200",
        isActive ? "bg-primary-container text-primary" : "text-text-muted"
      )}>
        {({ isActive }) => (
          <>
            <Cake size={24} className={isActive ? "fill-current" : ""} />
            <span className="text-[10px] font-bold mt-1 uppercase text-center">Custom</span>
          </>
        )}
      </NavLink>

      <NavLink to="/locations" className={({ isActive }) => cn(
        "flex flex-col items-center justify-center px-4 py-1.5 rounded-2xl transition-all duration-200",
        isActive ? "bg-primary-container text-primary" : "text-text-muted"
      )}>
        {({ isActive }) => (
          <>
            <MapPin size={24} className={isActive ? "fill-current" : ""} />
            <span className="text-[10px] font-bold mt-1 uppercase text-center">Stores</span>
          </>
        )}
      </NavLink>

      <NavLink to="/" className={({ isActive }) => cn(
        "flex flex-col items-center justify-center px-4 py-1.5 rounded-2xl transition-all duration-200",
        isActive ? "bg-primary-container text-primary" : "text-text-muted"
      )}>
        {({ isActive }) => (
          <>
            <User size={24} className={isActive ? "fill-current" : ""} />
            <span className="text-[10px] font-bold mt-1 uppercase text-center">Story</span>
          </>
        )}
      </NavLink>
    </nav>
  );
}
