import { resources } from '../locales/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'home';
    resources: typeof resources['vi'];
  }
}