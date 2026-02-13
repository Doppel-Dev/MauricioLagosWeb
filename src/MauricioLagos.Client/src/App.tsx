import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  ChevronRight, 
  Download,
  Linkedin,
  Github,
  MessageCircle
} from 'lucide-react'

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardHover = {
  hover: { 
    y: -8, 
    borderColor: "rgba(255,224,0,0.5)",
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Types
interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  linkedIn: string;
  phone: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

interface Skill {
  category: string;
  items: string[];
}

interface PortfolioData {
  profile: Profile;
  experiences: Experience[];
  skills: Skill[];
}

const translations = {
  es: {
    nav: ['Sobre mí', 'Experiencia', 'Skills', 'Contacto'],
    heroTag: 'Ingeniero de Software',
    heroTitle: 'CREANDO EL',
    heroFuture: 'FUTURO.',
    heroSubtitle: 'Especialista en ecosistemas .NET & Blazor. Transformo ideas complejas en infraestructuras digitales de alto rendimiento.',
    btnContact: 'Contactar',
    btnResume: 'Currículum',
    skillsTitle: 'Competencias Técnicas',
    expTitle: 'Trayectoria Profesional',
    contactTitle: 'HABLEMOS.',
    contactSub: 'Impulsa tu próximo proyecto con soluciones de software a medida. Estoy disponible para nuevas oportunidades y colaboraciones estratégicas.',
    footerAllSystems: 'DISPONIBLE PARA COLABORACIONES',
    photoPlaceholder: 'Perfil Profesional',
  },
  en: {
    nav: ['About me', 'Experience', 'Skills', 'Contact'],
    heroTag: 'Software Engineer',
    heroTitle: 'BUILDING THE',
    heroFuture: 'FUTURE.',
    heroSubtitle: 'Specialist in .NET & Blazor ecosystems. I transform complex ideas into high-performance digital infrastructures.',
    btnContact: 'Contact Me',
    btnResume: 'Resume',
    skillsTitle: 'Technical Expertise',
    expTitle: 'Professional Experience',
    contactTitle: "LET'S TALK.",
    contactSub: 'Elevate your next project with custom software solutions. I am available for new opportunities and strategic collaborations.',
    footerAllSystems: 'AVAILABLE FOR COLLABORATION',
    photoPlaceholder: 'Professional Profile',
  }
};

export default function App() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const t = translations[lang];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/portfolio');
        setData(response.data);
      } catch (error) {
        setData({
          profile: {
            name: "Mauricio Lagos",
            title: lang === 'es' ? "Desarrollador de Software | Especialista en .NET & Blazor" : "Software Developer | .NET & Blazor Specialist",
            location: "Talcahuano, Chile",
            summary: lang === 'es' 
              ? "Más de 2 años de experiencia como Desarrollador de Software especializado en .NET y Blazor. En Koff & Guerrero lideré la creación de una plataforma unificada de componentes en Blazor, integrando librerías como Syncfusion y aplicando prácticas de CI/CD en Azure DevOps. Mi perfil combina experiencia técnica en backend y frontend con una fuerte orientación a la mejora continua y la experiencia de usuario."
              : "Over 2 years of experience as a Software Developer specializing in .NET and Blazor. At Koff & Guerrero, I led the creation of a unified Blazor component platform, integrating libraries like Syncfusion and applying CI/CD practices in Azure DevOps. My profile combines technical expertise in backend and frontend with a strong focus on continuous improvement and user experience.",
            email: "mauricioelb@hotmail.com",
            linkedIn: "linkedin.com/in/maudev2",
            phone: "+56940555937"
          },
          experiences: [
            { 
              company: "Koff & Guerrero Consultants", 
              role: lang === 'es' ? "Ingeniero Programador" : "Software Engineer", 
              period: lang === 'es' ? "May 2023 – Ene 2025" : "May 2023 – Jan 2025", 
              location: "Santiago, Chile",
              responsibilities: lang === 'es' ? [
                "Desarrollo de plataforma unificada en Blazor con Syncfusion y MudBlazor.",
                "Implementación de pipelines CI/CD en Azure DevOps.",
                "Optimización de rendimiento y estabilidad en aplicaciones .NET.",
                "Gestión y optimización de bases de datos SQL Server.",
                "Visualización de datos con Power BI."
              ] : [
                "Development of a unified Blazor platform with Syncfusion and MudBlazor.",
                "Implementation of CI/CD pipelines in Azure DevOps.",
                "Performance and stability optimization in .NET applications.",
                "SQL Server database management and optimization.",
                "Data visualization with Power BI."
              ]
            },
            { 
              company: "Serviphar", 
              role: lang === 'es' ? "Desarrollador .NET" : ".NET Developer", 
              period: lang === 'es' ? "Jul 2025 – Sep 2025" : "July 2025 – Sept 2025", 
              location: "Santiago, Chile",
              responsibilities: lang === 'es' ? [
                "Optimización de bases de datos para búsquedas complejas.",
                "Desarrollo de aplicaciones en C# con .NET Framework 4.6.",
                "Implementación de funcionalidades con JavaScript, AJAX y JQuery."
              ] : [
                "Database optimization for complex searches.",
                "Application development in C# with .NET Framework 4.6.",
                "Implementation of features with JavaScript, AJAX, and JQuery."
              ]
            }
          ],
          skills: [
            { category: lang === 'es' ? "Backend & ORM" : "Backend & ORM", items: ["C#", ".NET Core", ".NET Framework", "Entity Framework", "Dapper", "Python"] },
            { category: lang === 'es' ? "Desarrollo Frontend" : "Frontend Development", items: ["React", "Blazor", "TypeScript", "JavaScript", "Bootstrap"] },
            { category: lang === 'es' ? "IA & Automatización" : "AI & Automation", items: ["Integración con IA", "Claude Code", "Gemini"] },
            { category: lang === 'es' ? "Ingeniería de Datos" : "Data Engineering", items: ["SQL Server", "MySQL", "Procesos ETL", "Pandas", "Power BI"] },
            { category: lang === 'es' ? "DevOps & Nube" : "DevOps & Cloud", items: ["Azure DevOps", "Git", "GitHub"] },
            { category: lang === 'es' ? "Diseño & Gestión" : "Design & Management", items: ["Tailwind CSS", "Syncfusion", "Jira", "Trello"] }
          ]
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [lang]);

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-base">
        <div className="relative">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut" 
            }}
            className="w-24 h-24 flex items-center justify-center"
          >
            <svg viewBox="0 0 120 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,224,0,0.4)]">
              <path 
                d="M 15 45 C 15 85, 30 85, 38 35 L 50 85 L 62 35 C 70 85, 85 85, 85 45 L 85 80 H 105" 
                fill="none" 
                stroke="#ffe000" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 border-2 border-primary-400/20 border-t-primary-400 rounded-full"
          />
        </div>
      </div>
    );
  }

  const { profile, experiences, skills } = data;

  return (
    <div className="bg-dark-base text-gray-200 selection:bg-primary-400 selection:text-black font-sans break-words overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-dark-base border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              {/* High-End Majin ML Logo */}
              <motion.div 
                whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center cursor-pointer relative"
              >
                {/* Layered Glow for Depth */}
                <div className="absolute inset-0 bg-primary-400/20 blur-2xl rounded-full animate-pulse"></div>
                
                <svg viewBox="0 0 120 100" className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(255,224,0,0.5)]">
                  <defs>
                    <linearGradient id="majin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffe000" />
                      <stop offset="50%" stopColor="#ffb000" />
                      <stop offset="100%" stopColor="#806000" />
                    </linearGradient>
                    <filter id="inner-glow">
                      <feFlood floodColor="#ffffff" floodOpacity="0.5" result="color" />
                      <feComposite in="color" in2="SourceGraphic" operator="in" />
                      <feGaussianBlur stdDeviation="1" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* The Majin ML Mark */}
                  <path 
                    d="M 15 45 
                       C 15 85, 30 85, 38 35 
                       L 50 85 
                       L 62 35 
                       C 70 85, 85 85, 85 45 
                       L 85 80 
                       H 105" 
                    fill="none" 
                    stroke="url(#majin-grad)" 
                    strokeWidth="14" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    filter="url(#inner-glow)"
                  />
                  
                  {/* Highlight Stroke for Refinement */}
                  <path 
                    d="M 15 45 C 15 85, 30 85, 38 35 L 50 85 L 62 35 C 70 85, 85 85, 85 45" 
                    fill="none" 
                    stroke="#ffffff" 
                    strokeWidth="1.5" 
                    className="opacity-40"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic leading-none">Mauricio</span>
                <span className="text-xl md:text-2xl font-black tracking-tighter text-primary-400 uppercase italic leading-none">Lagos</span>
              </div>
            </motion.div>
            
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden lg:flex items-center space-x-10">
                {t.nav.map((item, i) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={`#${translations.es.nav[i].toLowerCase().replace(' ', '-')}`}
                    className="text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-primary-400 transition-all border-b-2 border-transparent hover:border-primary-400 pb-1"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all group"
              >
                <div className="text-lg leading-none filter group-hover:drop-shadow-[0_0_5px_rgba(255,224,0,0.5)]">
                   {lang === 'es' ? '🇨🇱' : '🇺🇸'}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400">
                  {lang === 'es' ? 'ESP' : 'ENG'}
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.main key={lang} initial="initial" animate="animate" exit={{ opacity: 0 }}>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-dark-base">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div variants={staggerContainer}>
                  <motion.div variants={fadeIn} className="inline-block px-4 py-1 bg-primary-400/10 border border-primary-400/20 text-primary-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6 rounded-sm">
                    {t.heroTag}
                  </motion.div>
                  <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.95] md:leading-[0.9]">
                    {t.heroTitle} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-600 whitespace-nowrap">{t.heroFuture}</span>
                  </motion.h1>
                  <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
                    {t.heroSubtitle}
                  </motion.p>
                  <motion.div variants={fadeIn} className="flex flex-wrap gap-4 md:gap-6">
                    <motion.a
                      whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                      whileTap={{ scale: 0.95 }}
                      href="#contacto"
                      className="px-8 md:px-10 py-4 bg-primary-400 text-black rounded-sm font-black uppercase tracking-widest transition-all text-xs md:text-sm"
                    >
                      {t.btnContact}
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05, borderColor: "#ffe000", color: "#ffe000" }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="px-8 md:px-10 py-4 border-2 border-white/10 text-white rounded-sm font-black uppercase tracking-widest transition-all flex items-center gap-3 text-xs md:text-sm"
                    >
                      <Download size={18} /> {t.btnResume}
                    </motion.a>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative hidden lg:block"
                >
                  <div className="relative w-full aspect-square max-w-[450px] ml-auto">
                    {/* Artistic Background Elements */}
                    <div className="absolute inset-0 bg-primary-400/10 blur-[100px] rounded-full animate-pulse"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-primary-400/30 rounded-tr-3xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-primary-400/30 rounded-bl-3xl"></div>
                    
                    {/* Main Image Container */}
                    <div className="relative h-full w-full bg-dark-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl group">
                      <img 
                        src="/assets/profile-extra.jpg" 
                        alt="Mauricio Lagos" 
                        className="w-full h-full object-cover object-center grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent opacity-60"></div>
                      
                      {/* Floating Name Badge */}
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white font-black text-xl tracking-tighter uppercase leading-tight">
                          {profile.name.split(' ')[0]} <span className="text-primary-400">{profile.name.split(' ')[1]}</span>
                        </p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">{t.heroTag}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="sobre-mí" 
            className="py-32 border-y border-white/5 bg-zinc-900/50"
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="inline-block px-4 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black tracking-[0.2em] uppercase rounded-sm"
                >
                  {lang === 'es' ? 'ADN PROFESIONAL' : 'PROFESSIONAL DNA'}
                </motion.div>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl md:text-4xl text-white leading-relaxed font-black tracking-tighter uppercase italic"
                >
                  {lang === 'es' ? 'PASIÓN POR LA' : 'PASSION FOR'} <span className="text-primary-400">{lang === 'es' ? 'EXCELENCIA TÉCNICA.' : 'TECHNICAL EXCELLENCE.'}</span>
                </motion.p>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium italic"
                >
                  "{profile.summary}"
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <section id="skills" className="py-32 bg-dark-base relative">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-20"
              >
                <div className="h-[2px] w-20 bg-primary-400"></div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase">{t.skillsTitle}</h2>
              </motion.div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={cardHover}
                    whileHover="hover"
                    className="bg-zinc-900 p-6 md:p-8 border border-white/5 relative group overflow-hidden"
                  >
                    <h3 className="text-primary-400 font-black tracking-widest uppercase mb-6 text-[10px] md:text-xs">{skill.category}</h3>
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                      {skill.items.map((item, j) => (
                        <span key={j} className="text-base md:text-lg font-bold text-white hover:text-primary-400 transition-colors cursor-default">
                          {item}{j < skill.items.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experiencia" className="py-32 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-24 text-center"
              >
                {t.expTitle}
              </motion.h2>
              <div className="space-y-24 md:space-y-32">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-12 gap-8 relative"
                  >
                    <div className="lg:col-span-4">
                      <span className="text-primary-400 font-black tracking-widest uppercase text-[10px]">{exp.period}</span>
                      <h3 className="text-2xl md:text-3xl font-black text-white mt-2 uppercase leading-tight">{exp.role}</h3>
                      <p className="text-gray-500 font-bold mt-1 uppercase tracking-tighter text-xs md:text-sm">{exp.company} // {exp.location}</p>
                    </div>
                    <div className="lg:col-span-8 bg-dark-base p-6 md:p-10 border-l-4 border-primary-400 shadow-xl">
                      <ul className="space-y-5">
                        {exp.responsibilities.map((res, j) => (
                          <motion.li 
                            key={j} 
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: j * 0.1 }}
                            className="flex gap-4 text-gray-300 text-base md:text-lg leading-relaxed"
                          >
                            <ChevronRight className="text-primary-400 shrink-0 mt-1" size={20} />
                            <span>{res}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacto" className="py-32 md:py-40 relative bg-primary-400 overflow-hidden">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto px-4 relative z-10 text-center"
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black uppercase mb-12 italic leading-none">
                {t.contactTitle}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-black/80 mb-16 max-w-2xl mx-auto">
                {t.contactSub}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-4 px-8 md:px-12 py-5 md:py-6 bg-black text-white font-black uppercase tracking-widest text-xs md:text-sm shadow-2xl"
                >
                  <Mail size={18} /> {profile.email}
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${profile.phone.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 px-8 md:px-12 py-5 md:py-6 border-4 border-black text-black font-black uppercase tracking-widest text-xs md:text-sm"
                >
                  <Phone size={18} /> {profile.phone}
                </motion.a>
              </div>
            </motion.div>
          </section>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-24 bg-dark-base border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 group cursor-pointer">
                  <svg viewBox="0 0 120 100" className="w-full h-full">
                    <path 
                      d="M 15 45 C 15 85, 30 85, 38 35 L 50 85 L 62 35 C 70 85, 85 85, 85 45 L 85 80 H 105" 
                      fill="none" 
                      stroke="#ffe000" 
                      strokeWidth="14" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </svg>
                </div>
                <div className="text-3xl font-black tracking-tighter text-white uppercase italic">
                  MAURICIO<span className="text-primary-400">LAGOS</span>
                </div>
              </div>
              <p className="text-gray-500 font-medium max-w-xs leading-relaxed">
                {lang === 'es' 
                  ? 'Ingeniero de Software dedicado a construir soluciones digitales de alto rendimiento con tecnología .NET y React.'
                  : 'Software Engineer dedicated to building high-performance digital solutions with .NET and React technology.'}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  {t.footerAllSystems}
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-white font-black uppercase tracking-widest text-xs">{lang === 'es' ? 'Navegación' : 'Navigation'}</h4>
              <div className="grid grid-cols-2 gap-4">
                {t.nav.map((item, i) => (
                  <a
                    key={item}
                    href={`#${translations.es.nav[i].toLowerCase().replace(' ', '-')}`}
                    className="text-gray-500 hover:text-primary-400 transition-colors font-bold text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Social & Tech */}
            <div className="space-y-6">
              <h4 className="text-white font-black uppercase tracking-widest text-xs">{lang === 'es' ? 'Conectemos' : 'Connect'}</h4>
              <div className="flex gap-4">
                <motion.a whileHover={{ y: -3, color: "#ffe000" }} href="https://www.linkedin.com/in/maudev2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
                  <Linkedin size={20} />
                </motion.a>
                <motion.a whileHover={{ y: -3, color: "#ffe000" }} href="https://github.com/Doppel-Dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
                  <Github size={20} />
                </motion.a>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">{lang === 'es' ? 'DESARROLLADO CON' : 'BUILT WITH'}</p>
                <div className="flex gap-4 text-gray-500">
                  <span className="text-xs font-bold hover:text-white transition-colors cursor-default">.NET 8</span>
                  <span className="text-xs font-bold hover:text-white transition-colors cursor-default">React</span>
                  <span className="text-xs font-bold hover:text-white transition-colors cursor-default">Tailwind</span>
                  <span className="text-xs font-bold hover:text-white transition-colors cursor-default">Framer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <div className="text-gray-600 font-bold text-[10px] uppercase tracking-[0.3em]">
               © {new Date().getFullYear()} // MAURICIO LAGOS // PORTFOLIO_V2.0
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              {lang === 'es' ? 'VOLVER ARRIBA' : 'BACK TO TOP'}
              <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center group-hover:border-primary-400 group-hover:bg-primary-400 group-hover:text-black transition-all">
                <ChevronRight size={14} className="-rotate-90" />
              </div>
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/maudev2/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400/50 shadow-2xl transition-all group"
          title="LinkedIn"
        >
          <Linkedin size={24} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/Doppel-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400/50 shadow-2xl transition-all group"
          title="GitHub"
        >
          <Github size={24} />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/${profile.phone.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400/50 shadow-2xl transition-all group"
          title="WhatsApp"
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </div>
  )
}