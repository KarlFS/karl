import { Language } from './language.model';

export interface Project {
  period: string;
  role: string;
  name: string;
  company: string;
  tech: string[];
  description: Record<Language, string>;
}
