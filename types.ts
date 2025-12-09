export interface JobListing {
  id: string;
  title: string;
  employer: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung' | 'Freelance';
  salary: string;
  postedDate: string;
  description: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export enum UserRole {
  TALENT = 'talent',
  EMPLOYER = 'employer',
  VISITOR = 'visitor'
}

export interface FAQItem {
  question: string;
  answer: string;
}