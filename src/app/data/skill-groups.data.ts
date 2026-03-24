import { SkillGroup } from '../models/skill-group.model';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    labelKey: 'skills.languages',
    skills: ['C#', 'Java', 'TypeScript', 'JavaScript', 'Python', 'C / C++', 'Objective-C', 'Swift', 'ActionScript'],
  },
  {
    labelKey: 'skills.web',
    skills: ['Angular', 'HTML5', 'CSS3 / SCSS', 'Bootstrap', 'GSAP', 'Node.js', 'jQuery'],
  },
  {
    labelKey: 'skills.dotnet',
    skills: ['ASP.NET Core', 'EF Core', 'WPF', 'Windows Forms', 'WCF', 'LINQ', '.NET Core', 'NHibernate'],
  },
  {
    labelKey: 'skills.mobile',
    skills: ['iOS / UIKit', 'CoreData', 'MapKit', 'CoreLocation', 'Unity3D', 'DirectX', 'OpenGL', 'Augmented Reality'],
  },
  {
    labelKey: 'skills.databases',
    skills: ['MSSQL', 'MySQL', 'MongoDB'],
  },
  {
    labelKey: 'skills.tools',
    skills: ['Scrum', 'Kanban', 'TDD', 'CI/CD', 'Git', 'SVN', 'TFS', 'REST', 'SOAP', 'UML', 'DDD Domain Driven Design', 'Arc42', 'Software-Architektur'],
  },
  {
    labelKey: 'skills.ai',
    skills: ['Prompt Engineering', 'Claude Code', 'AI Feature Integration', 'LLM APIs', 'Claude API', 'ChatGPT / OpenAI API', 'Agentic Workflows'],
  },
];
