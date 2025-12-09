import { JobListing, FAQItem } from './types';

export const MOCK_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Friseurmeister (m/w/d) als Salonleitung',
    employer: 'Exklusiv Salon Müller',
    location: 'München, Innenstadt',
    type: 'Vollzeit',
    salary: 'ab 3.800€ + Provision',
    postedDate: '2023-10-24',
    description: 'Wir suchen eine erfahrene Führungspersönlichkeit für unseren Flagship-Store.',
    tags: ['Meistertitel', 'Führungserfahrung', 'Coloration']
  },
  {
    id: '2',
    title: 'Top-Stylist / Colorist (m/w/d)',
    employer: 'Hair & Art Studio',
    location: 'Berlin, Kreuzberg',
    type: 'Vollzeit',
    salary: 'Übertariflich + Umsatzbeteiligung',
    postedDate: '2023-10-22',
    description: 'Du lebst für Balayage und kreative Schnitte? Komm in unser kreatives Team.',
    tags: ['Balayage', 'Trendcuts', 'English speaking']
  },
  {
    id: '3',
    title: 'Auszubildender im Friseurhandwerk (m/w/d)',
    employer: 'Barbershop Classic',
    location: 'Hamburg, St. Pauli',
    type: 'Ausbildung',
    salary: 'Tarifliche Ausbildungsvergütung',
    postedDate: '2023-10-20',
    description: 'Lerne das Handwerk von der Pike auf in einem der coolsten Barbershops der Stadt.',
    tags: ['Ausbildung', 'Herrenfach', 'Bartpflege']
  },
  {
    id: '4',
    title: 'Mobiler Brautstylist (m/w/d)',
    employer: 'Wedding Dreams Agency',
    location: 'Köln / NRW',
    type: 'Freelance',
    salary: 'Honorarbasis',
    postedDate: '2023-10-18',
    description: 'Unterstütze unser Team in der Hochsaison für Brautfrisuren und Make-up.',
    tags: ['Hochstecken', 'Make-up', 'Wochenende']
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
