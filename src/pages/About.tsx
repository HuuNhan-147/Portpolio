import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import Container from "../components/Container";
import { Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import sv5tImage from "../assets/sv5t.jpg";
import svtbImage from "../assets/svtb.jpg";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-dark-950">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Image & Title */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-dark-100 dark:border-dark-800">
                <img 
                  src={personalInfo.aboutImage} 
                  alt={personalInfo.name} 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                    {personalInfo.name}
                  </h2>
                  <div className="inline-block px-4 py-1.5 bg-primary-600 text-white font-bold rounded-lg shadow-lg">
                    {t('about.role')}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-primary-100 dark:bg-primary-900/20 rounded-3xl -rotate-6"></div>
              <div className="absolute -z-20 -bottom-10 -right-10 w-full h-full bg-dark-100 dark:bg-dark-800/50 rounded-3xl rotate-6"></div>
            </motion.div>
          </div>

          {/* Right Column: Detailed Bio */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-900 dark:text-white mb-8 border-b-4 border-primary-600 inline-block pb-2">
                {t('about.introTitle')}
              </h1>
              
              <div className="space-y-6 text-lg text-dark-600 dark:text-dark-300 leading-relaxed font-light">
                {(t('about.detailedBio', { returnObjects: true }) as string[]).map((paragraph: string, index: number) => (
                  <p key={index} className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary-600 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Honors Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-display font-bold text-dark-900 dark:text-white mb-8 flex items-center">
                <Award className="mr-3 h-8 w-8 text-amber-600" />
                {t('about.honorsTitle')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Sinh viên 5 tốt */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 rounded-2xl overflow-hidden border-2 border-amber-200 dark:border-amber-800 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={sv5tImage} 
                      alt="Sinh viên 5 tốt" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl">🏅</span>
                      <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300">
                        {t('about.honors.sv5t.title')}
                      </h3>
                    </div>
                    <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                      {t('about.honors.sv5t.description')}
                    </p>
                  </div>
                </motion.div>

                {/* Sinh viên tiêu biểu */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl overflow-hidden border-2 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={svtbImage} 
                      alt="Sinh viên tiêu biểu" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl">⭐</span>
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300">
                        {t('about.honors.svtb.title')}
                      </h3>
                    </div>
                    <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                      {t('about.honors.svtb.description')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
