import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


const resources = {
    fr: {
        translation: {
            home: 'Accueil',
            about: 'A propos',
            logout: 'Se déconnecter',
            login: 'Se connecter',
            signup: `S'inscrire`
        }
    },
    en: {
        translation: {
            home: 'Home',
            about: 'About',
            logout: 'Log-out',
            login: 'Login',
            signup: 'Sign-up'
        }
    },
    es: {
        translation: {
            home: 'Inicio',
            about: 'Informacion',
            logout: 'Desconectarse',
            login: 'Conectar',
            signup: 'Inscribirse'
        }
    }
};



i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        lng: 'en',
        fallbackLng: 'en',
        resources,
        
        // can have multiple namespace if i want to divide huge translation 
        //and do smaller pieces 
        interpolation: {
            escapeValue: false,
        },
        // react: {
        //     wait: true,
        // },
        // resources: {
        //     en: {
        //         translation: {
        //         home: 'Home',
        //         about: 'About',
        //         logout: 'Log-out',
        //         login: 'Login',
        //         signup: 'Sign-up'
        //     }},
        //     fr: {
        //         translation: {
        //             home: 'Accueil',
        //             about: 'A propos',
        //             logout: 'Se déconnecter',
        //             login: 'Se connecter',
        //             signup: `S'inscrire`
        //     }},
        //     es : {
        //         translation: {
        //             home: 'Inicio',
        //             about: 'Informacion',
        //             logout: 'Desconectarse',
        //             login: 'Conectar',
        //             signup: 'Inscribirse'
        //     }}
        // }
    });

export default i18n;