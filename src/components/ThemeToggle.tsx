import { Moon, Sun } from "lucide-react";
import { useTheme } from "./useTheme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-dark-500 hover:text-primary-600 hover:bg-dark-100 dark:text-dark-400 dark:hover:text-primary-400 dark:hover:bg-dark-800 transition-colors relative"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : 90
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center p-2"
      >
        <Moon className="h-5 w-5" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : -90
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
         {/* Use a placeholder div to maintain size if needed, but absolute positioning handles better */}
         <Sun className="h-5 w-5" />
      </motion.div>
      {/* Invisible spacer to maintain button size */}
      <div className="w-5 h-5 opacity-0 pointer-events-none"></div>
    </button>
  );
}
