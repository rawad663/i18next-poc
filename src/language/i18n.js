import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import * as moment from 'moment';
import 'moment/locale/ar';
import EN from "./locales/en";
import AR from "./locales/ar";

i18n
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next
    .use(initReactI18next)
    // initialize with options
    .init({
        fallbackLng: "en",
        debug: process.env.NODE_ENV !== "production",

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        ns: ["words", "validation", "sentences"],
        defaultNS: "words",

        resources: {
            en: {
                words: EN.words,
                sentences: EN.sentences,
                validation: EN.validation,
            },
            ar: {
                words: AR.words,
                sentences: AR.sentences,
                validation: AR.validation,
            },
        },
    });

moment.locale(i18n.language);

export default i18n;
