import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import enJSON from './locales/en.json';
import esJSON from './locales/es.json';
import caJSON from './locales/ca.json';
import eusJSON from "./locales/eus.json"

const lang = (navigator.language || navigator.languages[0]).split('-')[0];

i18n.use(initReactI18next).init({
    resources: {
        en: {...enJSON},
        es: {...esJSON},
        ca: {...caJSON},
        eus: {...eusJSON},
    },
    lng: lang,
    fallbackLng: "es"
});
export default i18n;