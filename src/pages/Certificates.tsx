import Container from "../components/Container";
import { certificates } from "../data/certificates";
import { Calendar, Award, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Certificates() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 pt-20 transition-colors">
      
      {/* Hero Section */}
      <section className="bg-dark-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/20 backdrop-blur-3xl" />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('certificates.title')} & <span className="text-primary-400">{t('certificates.subtitle')}</span>
            </h1>
            <p className="text-xl text-slate-300">
              {t('certificates.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {certificates.map((cert) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-900 rounded-2xl shadow-sm border border-slate-200 dark:border-dark-800 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-56 w-full bg-slate-100 dark:bg-dark-800 border-b border-slate-200 dark:border-dark-800 group-hover:opacity-90 transition-opacity">
                   <img 
                      src={cert.asset} 
                      alt={cert.title} 
                      className="w-full h-full object-cover object-top"
                   />
                </div>

                <div className="p-8 flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                      <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    {cert.organization === "Cisco" && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                            Cisco Certified
                        </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
                    {cert.organization}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                     <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <ShieldCheck className="w-4 h-4 mr-2" />
                      <span className="truncate max-w-[200px]">ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-dark-800/50 border-t border-slate-100 dark:border-dark-800">
                  <a 
                    href={cert.asset} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-2 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                  >
                    {t('certificates.viewCertificate')}
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
