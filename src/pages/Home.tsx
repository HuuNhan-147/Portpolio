import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Code2, Database, Server, ExternalLink, Phone, GraduationCap, Target, Terminal, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { blogPosts } from "../data/posts";
import { personalInfo, skills, projects, education, careerGoals, hackathons } from "../data/portfolio";
import cvFile from "../assets/-Cao-Huu-Nhan-TopCV.vn-291225.93331.pdf";

export default function Home() {
  const { t } = useTranslation();
  const featuredPosts = blogPosts.filter(post => post.featured);
  // recentPosts removed as it was unused and identical to slice logic if needed directly

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 animate-float" />
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-sky-100 dark:bg-sky-900/20 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3" />

        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 relative inline-block group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-sky-400 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-[8px] border-white dark:border-dark-800 shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-4 right-6 bg-green-500 w-8 h-8 rounded-full border-[6px] border-white dark:border-dark-800" title={t('hero.available')}></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-900 dark:text-white mb-8 tracking-tight leading-none">
                {personalInfo.name}
              </h1>
              
              <div className="mb-12 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
                 <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/80 to-primary-50/50 dark:from-dark-800/80 dark:to-dark-900/50 backdrop-blur-md border border-primary-200/50 dark:border-primary-500/20 shadow-xl">
                   <Code2 className="absolute -top-5 -left-5 h-10 w-10 text-primary-600 dark:text-primary-400 bg-white dark:bg-dark-800 p-2 rounded-xl shadow-lg transform -rotate-12" />
                   <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-indigo-600 dark:from-primary-300 dark:to-indigo-300 font-display font-bold italic leading-relaxed drop-shadow-sm">
                     "{personalInfo.slogan}"
                   </p>
                   <Terminal className="absolute -bottom-5 -right-5 h-10 w-10 text-primary-600 dark:text-primary-400 bg-white dark:bg-dark-800 p-2 rounded-xl shadow-lg transform rotate-12" />
                 </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/about" className="btn-primary flex items-center justify-center group">
                  {t('nav.about')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="#projects" className="btn-secondary">
                  {t('hero.myProjects')}
                </a>
                <a 
                  href={cvFile} 
                  download="Cao-Huu-Nhan-CV.pdf"
                  className="btn-secondary flex items-center justify-center group"
                >
                  {t('hero.downloadCV')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 rotate-90" />
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12 flex justify-center flex-wrap gap-4"
            >
              {[
                { icon: Github, href: personalInfo.github, label: t('common.github') },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: t('common.email') },
                { icon: Phone, href: `tel:${personalInfo.phone}`, label: t('common.phone') },
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center px-5 py-2.5 bg-white dark:bg-dark-800 rounded-full shadow-lg border border-dark-100 dark:border-dark-700 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105 transition-all duration-300"
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Tech Stack - Redesigned */}
      <section className="py-20 bg-dark-50 dark:bg-dark-900/30">
        <Container>
          <div className="text-center mb-12">
             <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">{t('skills.title')}</h2>
             <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-dark-100 dark:border-dark-700">
                <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                  <Terminal className="h-6 w-6 mr-2" />
                  <h3 className="font-bold">{t('skills.languages')}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(s => (
                    <span key={s} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded font-medium">{s}</span>
                  ))}
                </div>
             </div>

             <div className="p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-dark-100 dark:border-dark-700">
                <div className="flex items-center mb-4 text-green-600 dark:text-green-400">
                  <Server className="h-6 w-6 mr-2" />
                  <h3 className="font-bold">{t('skills.frameworks')}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map(s => (
                    <span key={s} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm rounded font-medium">{s}</span>
                  ))}
                </div>
             </div>

             <div className="p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-dark-100 dark:border-dark-700">
                <div className="flex items-center mb-4 text-orange-600 dark:text-orange-400">
                  <Database className="h-6 w-6 mr-2" />
                  <h3 className="font-bold">{t('skills.database')}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map(s => (
                    <span key={s} className="px-2 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-sm rounded font-medium">{s}</span>
                  ))}
                </div>
             </div>

             <div className="p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-dark-100 dark:border-dark-700">
                <div className="flex items-center mb-4 text-purple-600 dark:text-purple-400">
                  <Cpu className="h-6 w-6 mr-2" />
                  <h3 className="font-bold">{t('skills.web3Tools')}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...skills.web3, ...skills.tools].map(s => (
                    <span key={s} className="px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded font-medium">{s}</span>
                  ))}
                </div>
             </div>
          </div>
        </Container>
      </section>

      {/* About Section (Education & Goals) */}
      <section id="about" className="py-20 bg-white dark:bg-dark-950">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Education & Overview */}
              <div>
                <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-8 flex items-center">
                  <GraduationCap className="mr-3 h-8 w-8 text-primary-600" />
                  {t('portfolio.educationTitle')}
                </h2>
                
                <div className="bg-white dark:bg-dark-900 p-6 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{t('portfolio.education.school')}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">{t('portfolio.education.major')}</p>
                  <p className="text-dark-500 dark:text-dark-400 text-sm mb-2">{t('portfolio.education.degree')} • {education.duration}</p>
                  <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                    {t('common.gpa')}: {education.gpa}
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-900 p-6 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm mb-6">
                   <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4">{t('portfolio.activities.olympic.title')}</h3>
                   <ul className="space-y-3 text-dark-600 dark:text-dark-300">
                     <li className="flex items-start">
                       <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-primary-600 rounded-full shrink-0"></span>
                       {t('portfolio.activities.olympic.item1')}
                     </li>
                     <li className="flex items-start">
                       <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-primary-600 rounded-full shrink-0"></span>
                       {t('portfolio.activities.olympic.item2')}
                     </li>
                   </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 shadow-sm">
                   <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4 flex items-center">
                     <span className="text-2xl mr-2">🏆</span>
                     {t('portfolio.activities.hackathonTitle')}
                   </h3>
                   <ul className="space-y-4">
                     {hackathons.map((hackathon, index) => (
                       <li key={index} className="bg-white dark:bg-dark-900/50 p-4 rounded-xl border border-amber-100 dark:border-amber-800/50">
                         <div className="flex justify-between items-start mb-2">
                           <h4 className="font-bold text-dark-900 dark:text-white">{hackathon.name}</h4>
                           <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-full">{t(`portfolio.hackathons.${index}.achievement`)}</span>
                         </div>
                         <p className="text-sm text-dark-600 dark:text-dark-300">{t(`portfolio.hackathons.${index}.role`)}</p>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              {/* Career Goals */}
              <div>
                <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-8 flex items-center">
                  <Target className="mr-3 h-8 w-8 text-primary-600" />
                  {t('portfolio.careerGoalsTitle')}
                </h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-dark-200 dark:before:via-dark-700 before:to-transparent">
                  {careerGoals.map((goal, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-dark-900 bg-primary-50 dark:bg-dark-800 text-primary-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                        <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-dark-900 rounded-2xl border border-dark-100 dark:border-dark-800 shadow-sm transition-all hover:shadow-md">
                         <div className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-1">{goal.period}</div>
                         <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{t(`portfolio.careerGoals.${index}.title`)}</h3>
                         <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">{t(`portfolio.careerGoals.${index}.description`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-50 dark:bg-dark-900/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">{t('projects.personalProjects')}</h2>
            <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
              {t('projects.projectsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-dark-900 rounded-2xl overflow-hidden border border-dark-100 dark:border-dark-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors"></div>
                   {project.award && (
                     <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                       {project.id === 1 ? t('portfolio.projectAwards.ecom') : project.id === 2 ? t('portfolio.projectAwards.pione') : project.award}
                     </div>
                   )}
                   <div className="absolute top-4 right-4 bg-white dark:bg-dark-800 px-3 py-1 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400 shadow">
                     {project.id === 1 ? t('portfolio.projectDetails.ecom.role') : project.id === 2 ? t('portfolio.projectDetails.pione.role') : project.role}
                   </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-dark-400 dark:text-dark-500 mb-2">{project.duration}</div>
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">{project.id === 1 ? t('portfolio.projectDetails.ecom.title') : project.id === 2 ? t('portfolio.projectDetails.pione.title') : project.title}</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-6 line-clamp-3">{project.id === 1 ? t('portfolio.projectDetails.ecom.description') : project.id === 2 ? t('portfolio.projectDetails.pione.description') : project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-300 rounded text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.links.github_be && (
                      <a href={project.links.github_be} target="_blank" rel="noreferrer" className="flex items-center text-sm font-semibold text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400">
                        <Github className="h-4 w-4 mr-1.5" /> BE
                      </a>
                    )}
                    {project.links.github_fe && (
                      <a href={project.links.github_fe} target="_blank" rel="noreferrer" className="flex items-center text-sm font-semibold text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400">
                        <Github className="h-4 w-4 mr-1.5" /> FE
                      </a>
                    )}
                    {project.links.github && (
                       <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center text-sm font-semibold text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400">
                        <Github className="h-4 w-4 mr-1.5" /> Source
                      </a>
                    )}
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                        <ExternalLink className="h-4 w-4 mr-1.5" /> Demo
                      </a>
                    )}
                     {project.links.video && (
                        <a href={project.links.video} target="_blank" rel="noreferrer" className="flex items-center text-sm font-semibold text-red-600 dark:text-red-400 hover:underline">
                        <ExternalLink className="h-4 w-4 mr-1.5" /> Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">{t('blog.featuredPosts')}</h2>
              <p className="text-dark-500 dark:text-dark-400 max-w-xl">
                {t('blog.featuredSubtitle')}
              </p>
            </div>
            <Link to="/blog" className="hidden md:flex text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 items-center">
              {t('common.viewAll')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Featured Post (Big) */}
            {featuredPosts[0] && (
              <motion.div variants={item} className="md:col-span-2 lg:col-span-2">
                <BlogCard post={featuredPosts[0]} featured={true} />
              </motion.div>
            )}
            
            {/* Other Featured Posts */}
            {featuredPosts.slice(1, 3).map((post) => (
              <motion.div key={post.id} variants={item}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="btn-secondary w-full justify-center">
              {t('blog.allPosts')}
            </Link>
          </div>
        </Container>
      </section>

      {/* Newsletter / CTA */}
      <section id="contact" className="py-24">
        <Container>
          <div className="relative bg-dark-900 dark:bg-dark-900 rounded-3xl p-8 md:p-16 overflow-hidden text-center border border-dark-800 dark:border-dark-700">
             <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-primary-600 rounded-full blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/3" />
             <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[100px] opacity-30 -translate-x-1/3 translate-y-1/3" />
             
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('contact.ctaTitle')}</h2>
             <p className="text-dark-300 text-lg mb-10 max-w-2xl mx-auto">
               {t('contact.ctaSubtitle')}
             </p>
             
             <a href="mailto:contact@huunhan.dev" className="btn-primary inline-flex items-center text-lg">
               <Mail className="mr-2 h-5 w-5" />
               {t('contact.sendEmail')}
             </a>
          </div>
        </Container>
      </section>
    </>
  );
}