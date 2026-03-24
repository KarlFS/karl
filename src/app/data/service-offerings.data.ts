import { ServiceOffering } from '../models/service-offering.model';

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  { icon: '🏛',  titleKey: 'offerings.architecture.title', descriptionKey: 'offerings.architecture.desc' },
  { icon: '⚡', titleKey: 'offerings.fullstack.title', descriptionKey: 'offerings.fullstack.desc' },
  { icon: '◆', titleKey: 'offerings.angular.title',   descriptionKey: 'offerings.angular.desc' },
  { icon: '⚙',  titleKey: 'offerings.csharp.title',   descriptionKey: 'offerings.csharp.desc' },
  { icon: '☕', titleKey: 'offerings.java.title',      descriptionKey: 'offerings.java.desc' },
  { icon: '◻',  titleKey: 'offerings.mobile.title',   descriptionKey: 'offerings.mobile.desc' },
];
