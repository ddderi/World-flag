import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


const resources = {
    en: {
        translation: {
            homenavbar: 'Home',
            aboutnavbar: 'About',
            logoutnavbar: 'Log-out',
            loginnavbar: 'Login',
            signupnavbar: 'Sign-up',
            headerhome: 'The flag quizz',
            errorspanstart: "You didnt start a game, please press start game !",
            scoreleft: "Score : ",
            scoremiddle:  "Last score : ",
            messageFooter: {
                1: 'Start the game now !',
                2: 'Good answer, keep going !',
                3: 'Bad answer, it was {{result}}, try again !'
            },
            unconnected: {
                1: 'Welcome, click ',
                2: 'here',
                3: ' for logging-in'
            },
            login: {
                heading: 'Login',
                message: {
                    1: "You are now connected"
                },
                username: 'Username',
                password: 'Password',
                account: `You don't have an account ? Click `,
                here: 'here',
                button: 'Log-in'
            },
            signup: {
                heading: 'Registration',
                message: {
                    1: 'You account have been  successfully created !'
                },
                username: 'Username',
                password: 'Password',
                passwordcon: 'Password confirmation',
                account: `You already have an account ? Click `,
                here: 'here',
                button: 'Register'
            },
            account: {
                message: {
                    1: 'Your password successfully updated',
                    2: 'Problem with your idendification'
                },
                currentpassword: 'Current password',
                newpassword: 'New password',
                button: 'Change your password',
                errormessage: 'You need to be connected for accessing your account details'
            },
            game: {
                button: 'start game'
            },
            records: {
                header: 'Ladder top 5'
            }

        }
    },
    fr: {
        translation: {
            homenavbar: 'Accueil',
            aboutnavbar: 'A propos',
            logoutnavbar: 'Se déconnecter',
            loginnavbar: 'Se connecter',
            signupnavbar: `S'inscrire`,
            headerhome: 'Le quizz des drapeaux',
            errorspanstart: `Vous n'avez pas commencer une partie, appuyez sur "commencer" !`,
            scoreleft: "Point(s) : ",
            scoremiddle:  "Dernier score : ",
            messageFooter: {
                1: 'Commencez le jeu maintenant !',
                2: 'Bonne reponse, continuez ainsi !',
                3: `Mauvaise reponse, c'etait {{result}}, essayez encore !`
            },
            unconnected: {
                1: 'Bienvenue, cliquez-',
                2: 'ici',
                3: ' pour vous connecter'
            },
            login: {
                heading: 'Se connecter',
                message: {
                    1: 'Vous etes maintenant connecte !'
                },
                username: 'Pseudonyme',
                password: 'Mot de passe',
                account: `Vous n'avez pas de compte ? Cliquez-`,
                here: 'ici',
                button: 'Se connecter'
            },
            signup: {
                heading: `S'enregistrer`,
                message: {
                    1: 'Felicitations, votre compte a ete cree !'
                },
                username: 'Pseudonyme',
                password: 'Mot de passe',
                passwordcon: 'Confirmation du mot de passe',
                account: `Vous avez deja un compte ? Cliquez-`,
                here: 'ici',
                button: 'Enregistrer'
            },
            account: {
                message: {
                    1: 'Votre mot de passe a ete mis a jour',
                    2: 'Probleme avec vos identifiants'
                },
                currentpassword: 'Mot de passe actuel',
                newpassword: 'Nouveau mot de passe',
                button: '   Mettre a jour    ',
                errormessage: 'Vous devez etre connecter pour acceder a vos details'
            },
            game: {
                button: 'commencer'
            },
            records: {
                header: 'Classement top 5'
            }

        }
    },
    es: {
        translation: {
            homenavbar: 'Inicio',
            aboutnavbar: 'Informacion',
            logoutnavbar: 'Desconectarse',
            loginnavbar: 'Conectar',
            signupnavbar: 'Inscribirse',
            headerhome: 'El concurso de las banderas',
            errorspanstart: `No habeis comenzado el juego, pulse "empezar" !`,
            scoreleft: "Punto(s) : ",
            scoremiddle:  "Ultima punctuacion : ",
            messageFooter: {
                1: 'Comience el juego ahora',
                2: 'Buena respuesta, continue asi',
                3: `Respuesta incorrecta, era {{result}}, intente otra vez !`
            },
            unconnected: {
                1: 'Bienvenido, haga clic aqui ',
                2: ' aqui ',
                3: ' para conectarse'
            },
            login: {
                heading: 'Conectarse',
                message: {
                    1: 'Estas conectado !'
                },
                username: 'Seudonimo',
                password: 'contrasena',
                account: `No tienes una cuenta ? Clic `,
                here: 'aqui',
                button: 'Conectarse'
            },
            signup: {
                heading: `Inscribirse`,
                message: {
                    1: 'Felicitaciones, tu cuenta ha sido creada !'
                },
                username: 'Seudonimo',
                password: 'contrasena',
                passwordcon: 'Confirmacion de contrasena',
                account: `Tienes una cuenta ? Clic `,
                here: 'aqui',
                button: 'Inscribirse'
            },
            account: {
                message: {
                    1: 'Tu contrasena ha sido actualizada',
                    2: 'Era una problema con tus identificadores'
                },
                currentpassword: 'Contrasena actual',
                newpassword: 'Nueva contrasena',
                button: ' Actualizar ',
                errormessage: 'Debe iniciar sesion para acceder a tus detalles'
            },
            game: {
                button: 'Empezar'
            },
            records: {
                header: 'Clasificacion top 5'
            }
        }
    }
};



i18n
    .use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: false,
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