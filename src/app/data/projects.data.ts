import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    period: 'seit 01/2016',
    role: 'Architekt & Entwickler',
    name: 'Sorbisch Online Lernen',
    company: 'TU Dresden',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap', 'jQuery'],
    description: {
      de: 'Entwicklung einer Cross-Plattform-Webapplikation zum Erlernen der sorbischen Sprache auf Niveau A1–B1. Konzept, UX-Design, Anbindung eines bestehenden Backends sowie Entwicklung der responsiven mobilen Applikation nach sprachwissenschaftlichen Kriterien.',
      en: 'Development of a cross-platform web application for learning the Sorbian language at levels A1–B1. Concept, UX design, backend integration and responsive mobile application development based on linguistic criteria.',
      hsb: 'Wuwiwanje crossplatformoweje weboweje aplikacije za wuknjenje serbskeje rěče na niwowu A1–B1. Koncepcija, UX-design, přiwjazanje backenda a wuwiwanje responsiwneje mobilneje aplikacije po rěčeznawskich kriterijach.',
    },
  },
  {
    period: 'seit 06/2012',
    role: 'Geschäftsführer & Softwareentwickler',
    name: 'LST Scholze Technik',
    company: 'LST Scholze Technik',
    tech: ['Angular', 'C#', '.NET', 'Java'],
    description: {
      de: 'Gründung und Führung des eigenen IT-Unternehmens mit Schwerpunkt auf Softwareentwicklung und Online-Handel.',
      en: 'Founding and management of own IT company focused on software development and e-commerce.',
      hsb: 'Załoženje a nawjedowanje wlastneho IT-předewzaća ze ćežišćom na softwarowym wuwiwanju a online-wikowanju.',
    },
  },
  {
    period: '10/2012 – 04/2015',
    role: 'Softwareentwickler & Scrum Master',
    name: 'TacticTable',
    company: 'Sports Vision & Facts UG',
    tech: ['Unity3D', 'C#', '.NET', 'WPF', 'Mono'],
    description: {
      de: 'Entwicklung eines Systems zur Erstellung hochwertiger Sport-Animationen und VR-Darstellungen für den TV-Bereich. Einführung von Scrum im Unternehmen und Leitung des Rekonstruktionsteams (12 Personen). Frontend in Unity3D, Applikationslogik und Backend in C#/.NET.',
      en: 'Development of a system for creating high-quality sports animations and VR presentations for TV broadcasting. Introduction of Scrum and leadership of the reconstruction team (12 people). Frontend in Unity3D, application logic and backend in C#/.NET.',
      hsb: 'Wuwiwanje systema za tworjenje wysokohódnych sportowych animacijow a VR-předstajenjow za telewiziju. Zawjedźenje Scrum a nawjedowanje rekonstrukciskeho teama (12 wosobow). Frontend w Unity3D, aplikaciska logika a backend w C#/.NET.',
    },
  },
  {
    period: '02/2014 – 04/2014',
    role: 'Mobile Developer',
    name: 'Das magische Portal',
    company: 'Life Action Games GmbH',
    tech: ['Objective-C', 'UIKit', 'MapKit', 'CoreData', 'CoreLocation', 'Unity3D'],
    description: {
      de: 'Entwicklung einer location-based iPad-App als Kombination aus kartenbasierter Navigation und ortsbezogenen Casual Games mit Augmented Reality.',
      en: 'Development of a location-based iPad app combining map-based navigation with location-based casual games and augmented reality.',
      hsb: 'Wuwiwanje location-based iPad-aplikacije z kombinaciju kartowej nawigaciju, lokacijowymi casual-grami a augmented reality.',
    },
  },
  {
    period: '07/2011 – 04/2012',
    role: 'Mobile Developer',
    name: 'PerfectShape · myTopBody · Smiley',
    company: 'apps3S',
    tech: ['Objective-C', 'UIKit', 'CoreLocation', 'MapKit', 'CoreData'],
    description: {
      de: 'Entwurf und Entwicklung von Fitness-Apps für iPhone und iPad sowie einer location-based Restaurantbewertungs-App für iOS. Vollständiger App-Store-Workflow von Einrichtung bis Veröffentlichung.',
      en: 'Design and development of fitness apps for iPhone and iPad, and a location-based restaurant review app for iOS. Complete App Store workflow from setup to publication.',
      hsb: 'Naćisk a wuwiwanje fitness-aplikacijow za iPhone a iPad a location-based restaurantoweje hodnoćacej aplikacije za iOS. Dospołny App Store workflow wot nastajenja hač k wozjewjenju.',
    },
  },
  {
    period: '11/2009 – 03/2011',
    role: 'Softwareentwickler & Gründer',
    name: 'Gameserver & Tablet-Client',
    company: 'Life Action Games GmbH',
    tech: ['C#', '.NET', 'Java EE', 'JAX-RS', 'JPA', 'MySQL', 'Windows Forms'],
    description: {
      de: 'Entwicklung eines Game-Servers für ein Mobile Game in C# und Java EE. Datenmodellierung, RESTful-Webservices und Datenbankzugriff über Hibernate-ORM. Windows Forms Tablet-Frontend.',
      en: 'Development of a game server for a mobile game in C# and Java EE. Data modeling, RESTful web services and database access via Hibernate ORM. Windows Forms tablet frontend.',
      hsb: 'Wuwiwanje gameservera za mobilnu hru w C# a Java EE. Datowe modelowanje, RESTful webowe słužby a datobankowy přistup přez Hibernate ORM. Windows Forms tablet frontend.',
    },
  },
  {
    period: '04/2005 – 09/2009',
    role: 'Softwareentwickler',
    name: 'Fußball-Tracking-Visualisierung',
    company: 'unlimited GmbH',
    tech: ['Flex', 'ActionScript 3', 'Java', 'Hibernate', 'MySQL', 'managed C++'],
    description: {
      de: 'Entwicklung einer 2D-Visualisierung von Fußball-Trackingdaten mit gleichzeitiger Videowiedergabe, Heatmaps und Taktikvisualisierung. Schulung von Mitarbeitern sowie Leitung der Live-Medienproduktion.',
      en: 'Development of a 2D visualization of football tracking data with simultaneous video playback, heatmaps and tactical visualization. Staff training and leadership of live media production.',
      hsb: 'Wuwiwanje 2D-wizualizacije koparskich tracking-datow z runočasowej wideoreprodukciju, heatmaps a taktiskej wizualizaciju. Wukubłanje sobudźěłaćerjow a nawjedowanje žiweje medijoweje produkcije.',
    },
  },
];
