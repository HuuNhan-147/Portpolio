import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors group"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-dark-600 dark:text-dark-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
      <div className="flex items-center space-x-1">
        <motion.span
          className={clsx(
            "text-xs font-medium transition-colors",
            currentLang === 'vi' 
              ? "text-primary-600 dark:text-primary-400" 
              : "text-dark-400 dark:text-dark-500"
          )}
          animate={{ scale: currentLang === 'vi' ? 1.1 : 1 }}
        >
          VN
        </motion.span>
        <span className="text-dark-400 dark:text-dark-500 text-xs">/</span>
        <motion.span
          className={clsx(
            "text-xs font-medium transition-colors",
            currentLang === 'en' 
              ? "text-primary-600 dark:text-primary-400" 
              : "text-dark-400 dark:text-dark-500"
          )}
          animate={{ scale: currentLang === 'en' ? 1.1 : 1 }}
        >
          EN
        </motion.span>
      </div>
    </button>
  );
}
