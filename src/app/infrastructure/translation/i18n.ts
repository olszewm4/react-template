import * as i18n from "i18next";
import * as i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import * as I18NextXhrBackend from 'i18next-xhr-backend';
import { reactI18nextModule } from "react-i18next";

// translations are already at
// '../public/locales/{lang}/*.json'
// which is the default for the xhr backend to load from

i18n
  .use(i18nextBrowserLanguageDetector)
  .use(I18NextXhrBackend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    fallbackLng: "pl", // use pl if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    ns: [],
    defaultNS: 'common',
    react: {
      wait: true
    },
    load: 'languageOnly'
  });

export default i18n;