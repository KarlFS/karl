import { Injectable, signal } from '@angular/core';
import { Language } from '../../models/language.model';

type TranslationMap = Record<string, string>;
type Translations = Record<Language, TranslationMap>;

const TRANSLATIONS: Translations = {
  de: {
    'nav.about':    'Über mich',
    'nav.offerings': 'Leistungen',
    'nav.skills':   'Technologien',
    'nav.projects': 'Projekte',
    'nav.contact':  'Kontakt',

    'hero.greeting': 'Hallo, ich bin',
    'hero.title':    'Softwareentwickler & Unternehmer',
    'hero.subtitle': 'Fullstack-Entwicklung mit Angular, C# und Java · Berlin',
    'hero.cta':      'Kontakt aufnehmen',

    'about.title':             'Über mich',
    'about.text1':             'Diplom-Informatiker mit über 20 Jahren Erfahrung in der professionellen Softwareentwicklung. Mein Schwerpunkt liegt auf der Fullstack-Entwicklung moderner Webanwendungen mit Angular, C# (.NET) und Java.',
    'about.text2':             'Als Unternehmer und Scrum Master kombiniere ich technische Exzellenz mit agiler Projektführung. Zweisprachig in Deutsch und Sorbisch aufgewachsen, bringe ich eine einzigartige kulturelle Perspektive in meine Arbeit.',
    'about.label.born':        'Jahrgang',
    'about.label.location':    'Wohnort',
    'about.label.education':   'Ausbildung',
    'about.label.languages':   'Sprachen',
    'about.languages':         'Deutsch (Muttersprache), Sorbisch (Muttersprache), Englisch',

    'offerings.title':               'Meine Leistungen',
    'offerings.subtitle':            'Was ich für Sie entwickeln kann',
    'offerings.fullstack.title':     'Fullstack-Entwicklung',
    'offerings.fullstack.desc':      'Ganzheitliche Anwendungsentwicklung vom Konzept bis zum Deployment — modern, skalierbar und wartungsfreundlich.',
    'offerings.angular.title':       'Angular Frontend',
    'offerings.angular.desc':        'Reaktive, komponentenbasierte Web-UIs mit Angular und TypeScript.',
    'offerings.csharp.title':        'C# / .NET Backend',
    'offerings.csharp.desc':         'Robuste APIs und Services mit ASP.NET Core, Entity Framework Core und Clean Architecture.',
    'offerings.java.title':          'Java Backend',
    'offerings.java.desc':           'Skalierbare Serveranwendungen mit Java EE, JAX-RS, JPA und modernen Build-Tools.',
    'offerings.mobile.title':        'Mobile Development',
    'offerings.mobile.desc':         'Native iOS-Apps (Objective-C / Swift) und Cross-Platform-Lösungen mit Unity3D.',
    'offerings.scrum.title':         'Scrum & Agile',
    'offerings.scrum.desc':          'Einführung und Begleitung agiler Prozesse als erfahrener Scrum Master.',

    'skills.title':     'Technologien & Skills',
    'skills.languages': 'Programmiersprachen',
    'skills.web':       'Web',
    'skills.dotnet':    '.NET Technologien',
    'skills.mobile':    'Mobile & 3D',
    'skills.databases': 'Datenbanken',
    'skills.tools':     'Methoden & Tools',

    'projects.title':    'Projekterfahrung',
    'projects.subtitle': 'Ausgewählte Projekte aus über 20 Jahren',

    'contact.title':            'Kontakt',
    'contact.subtitle':         'Ich freue mich über Ihre Nachricht',
    'contact.label.email':      'E-Mail',
    'contact.label.phone':      'Telefon',
    'contact.label.location':   'Standort',
    'contact.availability':     'Verfügbar für Projekte und Aufträge',

    'footer.rights':    'Alle Rechte vorbehalten.',
    'footer.impressum': 'Impressum',

    'impressum.back':      'Zurück',
    'impressum.legalNote': 'Diese Seite enthält Pflichtangaben gemäß § 5 TMG.',
  },

  en: {
    'nav.about':     'About',
    'nav.offerings': 'Services',
    'nav.skills':    'Skills',
    'nav.projects':  'Projects',
    'nav.contact':   'Contact',

    'hero.greeting': "Hello, I'm",
    'hero.title':    'Software Developer & Entrepreneur',
    'hero.subtitle': 'Fullstack Development with Angular, C# and Java · Berlin',
    'hero.cta':      'Get in touch',

    'about.title':           'About me',
    'about.text1':           'Diploma computer scientist with over 20 years of professional software development experience. My focus is on fullstack development of modern web applications using Angular, C# (.NET) and Java.',
    'about.text2':           'As an entrepreneur and Scrum Master, I combine technical excellence with agile project leadership. Growing up bilingual in German and Sorbian, I bring a unique cultural perspective to my work.',
    'about.label.born':      'Born',
    'about.label.location':  'Location',
    'about.label.education': 'Education',
    'about.label.languages': 'Languages',
    'about.languages':       'German (native), Sorbian (native), English',

    'offerings.title':               'My Services',
    'offerings.subtitle':            'What I can develop for you',
    'offerings.fullstack.title':     'Fullstack Development',
    'offerings.fullstack.desc':      'End-to-end application development from concept to deployment — modern, scalable and maintainable.',
    'offerings.angular.title':       'Angular Frontend',
    'offerings.angular.desc':        'Reactive, component-based web UIs with Angular and TypeScript.',
    'offerings.csharp.title':        'C# / .NET Backend',
    'offerings.csharp.desc':         'Robust APIs and services with ASP.NET Core, Entity Framework Core and Clean Architecture.',
    'offerings.java.title':          'Java Backend',
    'offerings.java.desc':           'Scalable server applications with Java EE, JAX-RS, JPA and modern build tools.',
    'offerings.mobile.title':        'Mobile Development',
    'offerings.mobile.desc':         'Native iOS apps (Objective-C / Swift) and cross-platform solutions with Unity3D.',
    'offerings.scrum.title':         'Scrum & Agile',
    'offerings.scrum.desc':          'Introduction and facilitation of agile processes as an experienced Scrum Master.',

    'skills.title':     'Technologies & Skills',
    'skills.languages': 'Programming Languages',
    'skills.web':       'Web',
    'skills.dotnet':    '.NET Technologies',
    'skills.mobile':    'Mobile & 3D',
    'skills.databases': 'Databases',
    'skills.tools':     'Methods & Tools',

    'projects.title':    'Project Experience',
    'projects.subtitle': 'Selected projects from over 20 years',

    'contact.title':          'Contact',
    'contact.subtitle':       'I look forward to hearing from you',
    'contact.label.email':    'Email',
    'contact.label.phone':    'Phone',
    'contact.label.location': 'Location',
    'contact.availability':   'Available for projects and assignments',

    'footer.rights':    'All rights reserved.',
    'footer.impressum': 'Legal Notice',

    'impressum.back':      'Back',
    'impressum.legalNote': 'This page contains mandatory information pursuant to § 5 TMG (German Telemedia Act).',
  },

  hsb: {
    'nav.about':     'Wo mni',
    'nav.offerings': 'Słužby',
    'nav.skills':    'Technologije',
    'nav.projects':  'Projekty',
    'nav.contact':   'Kontakt',

    'hero.greeting': 'Witajće, sym',
    'hero.title':    'Softwaredeweloper & Předewzaćel',
    'hero.subtitle': 'Fullstack-wuwiwanje z Angular, C# a Java · Berlin',
    'hero.cta':      'Kontaktować',

    'about.title':           'Wo mni',
    'about.text1':           'Diplom-informatičar z wjace hač 20 lětami nazhonjenja w profesionalnym softwarowym wuwiwanju. Mój ćežišćo leži na fullstack-wuwiwanju modernych webowych nałoženjow z Angular, C# (.NET) a Java.',
    'about.text2':           'Jako předewzaćel a Scrum Master zwjazuju techniske skwělstwo z agilnym projektowym nawjedowanjom. Jako dwurěčny Serb přinosujem jónkrótnu kulturnu perspektiwu do swojeho dźěła.',
    'about.label.born':      'Lětnik',
    'about.label.location':  'Bydlišćo',
    'about.label.education': 'Wukształtowanje',
    'about.label.languages': 'Rěče',
    'about.languages':       'Němčina (maćeršćina), Serbšćina (maćeršćina), Jendźelšćina',

    'offerings.title':               'Moje Słužby',
    'offerings.subtitle':            'Štož móžu za Was wuwić',
    'offerings.fullstack.title':     'Fullstack-wuwiwanje',
    'offerings.fullstack.desc':      'Cyłkowny wuwoj nałoženjow wot koncepta hač k nasadźenju — modern, skalujomny a hladajomny.',
    'offerings.angular.title':       'Angular Frontend',
    'offerings.angular.desc':        'Reaktiwne, komponentowe webowe UI z Angular a TypeScript.',
    'offerings.csharp.title':        'C# / .NET Backend',
    'offerings.csharp.desc':         'Stabilne APIs a serwisy z ASP.NET Core, Entity Framework Core a Clean Architecture.',
    'offerings.java.title':          'Java Backend',
    'offerings.java.desc':           'Skalujomne serwerowe nałoženja z Java EE, JAX-RS, JPA a modernymi nastrójami.',
    'offerings.mobile.title':        'Mobilne wuwiwanje',
    'offerings.mobile.desc':         'Natiwne iOS-nałoženja (Objective-C / Swift) a crossplatformowe rozrisanja z Unity3D.',
    'offerings.scrum.title':         'Scrum & Agile',
    'offerings.scrum.desc':          'Zawjedźenje a přewodźenje agilnych procesow jako nazhonjeny Scrum Master.',

    'skills.title':     'Technologije & Zhontonosće',
    'skills.languages': 'Programowanske rěče',
    'skills.web':       'Web',
    'skills.dotnet':    '.NET Technologije',
    'skills.mobile':    'Mobilne & 3D',
    'skills.databases': 'Datowe banki',
    'skills.tools':     'Metody & Nastroje',

    'projects.title':    'Projektowe nazhonjenje',
    'projects.subtitle': 'Wubrané projekty z wjace hač 20 lět',

    'contact.title':          'Kontakt',
    'contact.subtitle':       'Wjeselim so na wašu powěsć',
    'contact.label.email':    'E-Mail',
    'contact.label.phone':    'Telefon',
    'contact.label.location': 'Městno',
    'contact.availability':   'Přistupny za projekty a nadawki',

    'footer.rights':    'Wšě prawa wobchowane.',
    'footer.impressum': 'Impresum',

    'impressum.back':      'Wróćo',
    'impressum.legalNote': 'Tuta strona wobsahuje winowatostne podaća po § 5 TMG.',
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly _lang = signal<Language>('de');

  readonly currentLang = this._lang.asReadonly();

  setLanguage(lang: Language): void {
    this._lang.set(lang);
  }

  translate(key: string): string {
    return TRANSLATIONS[this._lang()][key] ?? key;
  }
}
