import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors, Search, Briefcase, User, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { MOCK_JOBS, INDUSTRY_TEXT, CAREER_TEXT, FAQS } from './constants';
import { JobCard } from './components/JobCard';
import { AICareerCoach } from './components/AICareerCoach';
import { InfoSection } from './components/InfoSection';
import { UserRole } from './types';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AutorSeite from './pages/AutorSeite';

// --- Sub-components for pages ---

const HomePage = () => (
  <>
    {/* Hero Section */}
    <section className="relative bg-gray-900 text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/id/1027/1920/1080" 
          alt="Friseursalon Hintergrund" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
          #1 Jobbörse für das Friseurhandwerk
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Verbinde dein Talent <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-gold-400">mit Stil & Zukunft</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Finden Sie die besten Talente für Ihren Salon oder entdecken Sie Ihren Traumjob. 
          Einfach, spezialisiert und persönlich.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/jobs" className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2">
            <Search className="h-5 w-5" />
            Jobs finden
          </Link>
          <Link to="/employers" className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
            <Briefcase className="h-5 w-5" />
            Stelle inserieren
          </Link>
        </div>
      </div>
    </section>

    {/* Featured Jobs Teaser */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Aktuelle Top-Jobs</h2>
          <p className="text-gray-600">Entdecken Sie die neuesten Möglichkeiten in Ihrer Nähe.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_JOBS.slice(0, 4).map(job => <JobCard key={job.id} job={job} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/jobs" className="inline-flex items-center font-bold text-rose-600 hover:text-rose-700 border-b-2 border-rose-600 pb-1">
            Alle Angebote ansehen →
          </Link>
        </div>
      </div>
    </section>

    {/* Industry Info Teaser */}
    <InfoSection 
      title="Das Friseurhandwerk: Mehr als nur Haare schneiden" 
      subtitle="Branchen-Einblicke"
      content={INDUSTRY_TEXT}
      imageSrc="https://picsum.photos/id/64/800/600"
      imageAlt="Moderne Friseurin bei der Arbeit"
    />

    {/* AI Teaser */}
    <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-gold-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Dein KI-Karriere-Coach
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Unsicher bei der Bewerbung? Oder brauchen Sie Hilfe beim Formulieren einer Stellenanzeige?
              Unser intelligenter Assistent, powered by Google Gemini, steht Ihnen rund um die Uhr zur Verfügung.
            </p>
            <Link to="/talent" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-medium transition-colors">
              Jetzt ausprobieren
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <AICareerCoach initialRole={UserRole.VISITOR} />
          </div>
        </div>
      </div>
    </section>
  </>
);

const JobsPage = () => {
  const [filter, setFilter] = useState('');
  
  const filteredJobs = MOCK_JOBS.filter(job => 
    job.title.toLowerCase().includes(filter.toLowerCase()) || 
    job.location.toLowerCase().includes(filter.toLowerCase()) ||
    job.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
      <div className="bg-rose-50 rounded-2xl p-8 mb-12 text-center">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Jobsuche</h1>
        <div className="max-w-2xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Suchen Sie nach Titel, Stadt oder Stichwort..." 
            className="w-full pl-12 pr-4 py-4 rounded-xl border-none shadow-lg focus:ring-2 focus:ring-rose-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            Keine Jobs gefunden, die Ihrer Suche entsprechen.
          </div>
        )}
      </div>
    </div>
  );
};

const EmployersPage = () => (
  <div className="pt-24 pb-20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-rose-600 font-bold uppercase text-sm tracking-wider">Für Arbeitgeber</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">
          Finden Sie Persönlichkeiten, die Ihren Salon bereichern.
        </h1>
        <p className="text-xl text-gray-600">
          In einer Branche, die von Persönlichkeit lebt, helfen wir Ihnen, Mitarbeiter zu finden, die fachlich und menschlich passen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { title: "Gezielte Reichweite", desc: "Wir sprechen exklusiv Friseure und Beauty-Experten an. Kein Streuverlust." },
          { title: "Attraktives Profil", desc: "Präsentieren Sie Ihren Salon mit Bildern, Team-Infos und Benefits." },
          { title: "Einfache Verwaltung", desc: "Intuitives Dashboard für alle Ihre Anzeigen und Bewerbungen." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-rose-200 transition-colors">
            <div className="h-12 w-12 bg-rose-50 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
         <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
               <h2 className="text-3xl font-serif font-bold mb-4">Stellenanzeigen-Generator</h2>
               <p className="text-gray-300 mb-6">
                 Keine Zeit für lange Texte? Lassen Sie unsere KI den perfekten Anzeigentext für Ihren Salon schreiben.
               </p>
               <AICareerCoach initialRole={UserRole.EMPLOYER} />
            </div>
            <div className="md:w-1/2">
               <img src="https://picsum.photos/id/250/600/600" alt="Salon Team" className="rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500" />
            </div>
         </div>
      </div>
    </div>
  </div>
);

const TalentPage = () => (
  <div className="pt-24 pb-20">
     <InfoSection 
      title="Karriere & Weiterbildung" 
      subtitle="Für Talente"
      content={CAREER_TEXT}
      imageSrc="https://picsum.photos/id/338/800/600"
      imageAlt="Stylist bei der Arbeit"
      reversed
    />
    
    <div className="container mx-auto px-4 mt-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Häufige Fragen (FAQ)</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">Dein Karriere-Begleiter</h2>
          <AICareerCoach initialRole={UserRole.TALENT} />
        </div>
      </div>
    </div>
  </div>
);

const ImpressumPage = () => (
  <div className="pt-24 pb-20 container mx-auto px-4 max-w-3xl">
    <h1 className="text-3xl font-serif font-bold mb-8">Impressum</h1>
    <div className="prose prose-gray">
      <p>Angaben gemäß § 5 TMG</p>
      <h3>Betreiber der Website</h3>
      <p>
        Friseur Stellenangebote GmbH<br />
        Musterstraße 123<br />
        10115 Berlin<br />
        Deutschland
      </p>
      
      <h3>Kontakt</h3>
      <p>
        Telefon: +49 (0) 30 12345678<br />
        E-Mail: kontakt@friseur-stellenangebote.de
      </p>
      
      <h3>Vertretungsberechtigte Geschäftsführer</h3>
      <p>Max Mustermann, Erika Musterfrau</p>
      
      <h3>Registereintrag</h3>
      <p>
        Eintragung im Handelsregister.<br />
        Registergericht: Amtsgericht Berlin-Charlottenburg<br />
        Registernummer: HRB 123456
      </p>

      <h3>Umsatzsteuer-ID</h3>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
        DE 123 456 789
      </p>

      <h3 className="mt-8">Haftungsausschluss</h3>
      <p className="text-sm text-gray-500">
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>
    </div>
  </div>
);

// --- Layout Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-rose-600 font-semibold' : 'text-gray-600 hover:text-gray-900';

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gray-900 text-white p-2 rounded-lg group-hover:bg-rose-600 transition-colors">
            <Scissors className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none text-gray-900">Friseur</span>
            <span className="text-xs tracking-widest uppercase text-gray-500">Stellenangebote</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={isActive('/')}>Startseite</Link>
          <Link to="/jobs" className={isActive('/jobs')}>Jobs finden</Link>
          <Link to="/talent" className={isActive('/talent')}>Für Bewerber</Link>
          <Link to="/employers" className={isActive('/employers')}>Für Arbeitgeber</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
           <Link to="/employers" className="px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium">
             Inserieren
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full px-4 py-6 flex flex-col gap-4 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800">Startseite</Link>
          <Link to="/jobs" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800">Jobs finden</Link>
          <Link to="/talent" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800">Für Bewerber</Link>
          <Link to="/employers" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800">Für Arbeitgeber</Link>
          <Link to="/employers" onClick={() => setIsOpen(false)} className="block py-3 text-center bg-rose-600 text-white rounded-lg font-bold mt-2">
            Jetzt inserieren
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Scissors className="h-6 w-6 text-white" />
            <span className="font-serif font-bold text-xl text-white">Friseur Stellenangebote</span>
          </div>
          <p className="max-w-md mb-6 leading-relaxed">
            Die erste Adresse für Karriere im Friseurhandwerk. 
            Wir verbinden Tradition mit moderner Recruiting-Technologie. 
            Für Salons, die wachsen wollen und Talente, die ihren Weg suchen.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Für Bewerber</h4>
          <ul className="space-y-4">
            <li><Link to="/jobs" className="hover:text-white transition-colors">Jobs suchen</Link></li>
            <li><Link to="/talent" className="hover:text-white transition-colors">Karriere-Tipps</Link></li>
            <li><Link to="/talent" className="hover:text-white transition-colors">Gehaltsvergleich</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Rechtliches</h4>
          <ul className="space-y-4">
            <li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-16 pt-8 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Friseur Stellenangebote GmbH. Alle Rechte vorbehalten.</p>
        <p>Made with ❤️ for Hair Artists.</p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/talent" element={<TalentPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
                    {/* // HR-UPDATER: v1.0 */}
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/autor/thomas-sander" element={<AutorSeite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}