import { JobListing, FAQItem } from './types';

export const MOCK_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Friseurin (m/w/d)',
    employer: 'Faber und Schneider GbR Love your hair',
    location: 'Manching',
    type: 'Vollzeit',
    description: 'Friseurin (m/w/d)',
    tags: ['Friseur/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '2',
    title: 'Friseurin / Friseur (m/w/d)',
    employer: 'Lisa Benstöm',
    location: 'Dresden',
    type: 'Vollzeit',
    description: 'Friseurin / Friseur (m/w/d)',
    tags: ['Friseur/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '3',
    title: 'Friseur/in (m/w/d)',
    employer: 'Manuela Wiederkehr',
    location: 'Dogern',
    type: 'Vollzeit',
    description: 'Friseur/in (m/w/d)',
    tags: ['Friseur/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '4',
    title: 'Friseur (m/w/d)',
    employer: 'Frau Jette Hellweg Friseurmeisterin',
    location: 'Stavenhagen, Reuterstadt',
    type: 'Vollzeit',
    description: 'Friseur (m/w/d)',
    tags: ['Friseur/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '5',
    title: 'Friseur/in',
    employer: 'Jana Schramm',
    location: 'Kropp bei Schleswig',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-04'
  },
  {
    id: '6',
    title: 'Friseur/in',
    employer: 'Petra Stolz-Mauracher',
    location: 'Innsbruck',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '7',
    title: 'Friseur/in',
    employer: 'dm drogerie markt GmbH',
    location: 'Zell am See',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '8',
    title: 'Friseur/in',
    employer: 'dm drogerie markt GmbH',
    location: 'Wien,Liesing',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '9',
    title: 'Friseur/in',
    employer: 'KLIPP Frisör GmbH',
    location: 'Liezen',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '10',
    title: 'Friseur/in',
    employer: 'Aichner Pepi Modecoiffeur',
    location: 'Lienz',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '11',
    title: 'Friseur/in (m/w/d)',
    employer: 'Rosenthal Ulrike',
    location: 'Hammelburg',
    type: 'Vollzeit',
    description: 'Friseur/in (m/w/d)',
    tags: ['Friseur/in'],
    postedDate: '2026-03-03'
  },
  {
    id: '12',
    title: 'Friseur/in',
    employer: 'Erika\'s Haarstudio Erika Probst',
    location: 'Gallspach',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-02'
  },
  {
    id: '13',
    title: 'Friseur/in',
    employer: 'Friseurstudio Coolhair',
    location: 'Graz,14.Bez.:Eggenberg',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-02'
  },
  {
    id: '14',
    title: 'Friseur/in',
    employer: 'Friseur im Auhof',
    location: 'Linz',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-02'
  },
  {
    id: '15',
    title: 'Friseur/in',
    employer: 'Renner Jacqueline',
    location: 'Purkersdorf',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-02'
  },
  {
    id: '16',
    title: 'Friseur/in',
    employer: 'Claudia\'s Style & Beauty',
    location: 'Gleisdorf',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-02'
  },
  {
    id: '17',
    title: 'Friseur/in',
    employer: 'Friseur Sea Style',
    location: 'Wien,Brigittenau',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-02'
  },
  {
    id: '18',
    title: 'Friseur/in (m/w/d)',
    employer: 'Andrea Hronek',
    location: 'Prien am Chiemsee',
    type: 'Vollzeit',
    description: 'Friseur/in (m/w/d)',
    tags: ['Friseur/in'],
    postedDate: '2026-03-02'
  },
  {
    id: '19',
    title: 'Friseur/in',
    employer: 'KLIPP Frisör Seiersberg',
    location: 'Seiersberg',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-01'
  },
  {
    id: '20',
    title: 'Friseur/in',
    employer: 'KLIPP Frisör GmbH',
    location: 'Ansfelden',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-01'
  },
  {
    id: '21',
    title: 'Friseur/in',
    employer: 'Haarwork OG',
    location: 'Meggenhofen',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-03-01'
  },
  {
    id: '22',
    title: 'Friseur/in',
    employer: 'HAARTREFF Inh. Künstl Evelyn',
    location: 'Wien,Donaustadt',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-02-27'
  },
  {
    id: '23',
    title: 'Friseur/in',
    employer: 'Klipp Frisör Murpark',
    location: 'Graz,07.Bez.:Liebenau',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-02-27'
  },
  {
    id: '24',
    title: 'Friseur/in',
    employer: 'HAVVA HAIRARTIST',
    location: 'Wien,Donaustadt',
    type: 'Vollzeit',
    description: 'Friseur/in',
    tags: ['Friseur/in'],
    postedDate: '2026-02-27'
  },
  {
    id: '25',
    title: 'Friseur (m/w/d)',
    employer: 'Salon Benessere Panagiota Komninou',
    location: 'Ulm, Donau',
    type: 'Vollzeit',
    description: 'Friseur (m/w/d)',
    tags: ['Friseur/in'],
    postedDate: '2026-02-27'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Was kostet die Schaltung einer Stellenanzeige?",
    answer: "Für Arbeitgeber bieten wir verschiedene Pakete an, beginnend bei einer kostenlosen Basis-Anzeige bis hin zu Premium-Platzierungen mit Social-Media-Boost."
  },
  {
    question: "Wie aktuell sind die Stellenangebote?",
    answer: "Unsere Angebote werden täglich aktualisiert. Anzeigen, die älter als 30 Tage sind, werden automatisch archiviert oder müssen erneuert werden."
  },
  {
    question: "Bietet die Plattform Unterstützung bei der Bewerbung?",
    answer: "Ja, unser integrierter KI-Karriere-Coach hilft Bewerbern dabei, ihre Unterlagen zu optimieren und gibt Tipps für das Vorstellungsgespräch."
  }
];

export const INDUSTRY_TEXT = `
  Das Friseurhandwerk ist einer der kreativsten und vielseitigsten Berufe in Deutschland. 
  Mit über 80.000 Salons und rund 240.000 Beschäftigten bildet es eine tragende Säule des deutschen Handwerks. 
  Die Branche wandelt sich stetig: Nachhaltigkeit, digitale Terminbuchungssysteme und spezialisierte Barbershops 
  oder Color-Studios prägen das moderne Bild.
  
  Für Arbeitnehmer bedeutet dies vielfältige Spezialisierungsmöglichkeiten – vom klassischen Allrounder 
  bis zum Experten für Extensions, Calligraphy Cut oder organische Haarpflege. 
  Gleichzeitig steigen die Anforderungen an Beratungskompetenz und Servicequalität.
`;

export const CAREER_TEXT = `
  Die Karriereleiter im Friseurhandwerk ist durchlässig und bietet zahlreiche Aufstiegschancen. 
  Nach der 3-jährigen dualen Ausbildung steht der Weg zum Gesellen offen. 
  Wer mehr Verantwortung übernehmen möchte, kann den Meistertitel erwerben, der nicht nur zur Ausbildung von Lehrlingen berechtigt, 
  sondern auch den Weg in die Selbstständigkeit ebnet.
  
  Alternativ bieten sich Weiterbildungen zum Salonleiter, Fachtrainer für Industriepartner (z.B. L'Oréal, Wella) 
  oder Maskenbildner an. Auch ein Studium im Bereich Handwerksmanagement ist mit Meisterbrief möglich.
`;
