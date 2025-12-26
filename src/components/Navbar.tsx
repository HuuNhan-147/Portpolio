import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Chứng chỉ", path: "/certificates" },
    { name: "Về tôi", path: "/about" },
    { name: "Liên hệ", path: "/contact" }
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 dark:bg-dark-950/80 backdrop-blur-md shadow-sm border-b border-white/20 dark:border-dark-800/50" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary-600 p-2 rounded-xl group-hover:bg-primary-700 transition-colors">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-dark-900">
              HuuNhan<span className="text-primary-600">.dev</span>
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400",
                  location.pathname === item.path ? "text-primary-600 dark:text-primary-400" : "text-dark-600 dark:text-dark-300"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/blog"
              className="px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-600/40 hover:-translate-y-0.5"
            >
              Đọc Blog
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-dark-600 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-dark-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/blog"
                  className="block w-full px-5 py-3 text-center bg-primary-600 text-white rounded-xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Đọc Blog
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}