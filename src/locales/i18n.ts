import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import viHome from "./vi/home.json";
import viChatRoom from "./vi/chatroom.json";

export const resources = {
    vi: {
        home: viHome,
        chatroom: viChatRoom
    }
} as const;

i18n.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    fallbackLng: "vi",
    ns: ["home", "chatroom"],
    defaultNS: "home",
    interpolation: {
        escapeValue: false
    }
})

export default i18n;