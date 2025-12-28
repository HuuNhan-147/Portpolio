import Container from "../components/Container";
import { Mail, Phone, MapPin, Github, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "caohuunhanhoabinh2003@gmail.com",
      link: "mailto:caohuunhanhoabinh2003@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: "0377 913 722",
      link: "tel:0377913722",
      color: "green"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "HuuNhan-147",
      link: "https://github.com/HuuNhan-147",
      color: "gray"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: personalInfo.name,
      link: "https://www.facebook.com/huu.nhan.1829405",
      color: "blue"
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: "25 Hàn Thuyên, Phường Thủ Đức, TP.Thủ Đức, TP.HCM",
      link: "https://maps.google.com/?q=25+Hàn+Thuyên,+Phường+Thủ+Đức,+TP.Thủ+Đức,+TP.HCM",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      green: "bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      gray: "bg-gray-50 dark:bg-gray-900/10 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800",
      red: "bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 pt-20 transition-colors">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10" />
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl shadow-lg shadow-primary-500/30"
            >
              <Send className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              {t('contact.title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-white dark:bg-dark-900 rounded-2xl p-6 border border-slate-200 dark:border-dark-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-purple-50/50 dark:from-primary-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 rounded-xl border ${getColorClasses(item.color)} transition-transform group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                        {item.label}
                        {item.link.startsWith("http") && (
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary-500/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-primary-100 mb-8">
                {t('contact.subtitle')}
              </p>
              <a
                href="mailto:caohuunhanhoabinh2003@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                <Mail className="w-5 h-5" />
                {t('contact.send')}
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
