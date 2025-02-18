import {initReactI18next} from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en:{
            translation: {
                greeting: "Welcome!",
                info: "Hi I'm Piotr Chodkowski. A passionate Web Developer based in Warsaw, Poland 📍",
                about: "About me",
                aboutMid1: "Web Developer,",
                aboutMid2 : "based in Warsaw, Poland 📍",
                aboutBot : "As a developer I really enjoy designing and building responsive websites and web apps. I have experience in HTML, CSS, JavaScript, React.js, Django, RESTful APIs and MySQL. I always aspire to write clean and optimized code.",
                contact1: "Contact Me",
                contact2: "Topic",
                contact3: "Message",
                contact4: "Send",
                Copyright: "Copyright © 2024. All rights are reserved",
                Cookies: "We use cookies to enhance your user experience. By using our website, you agree to our use of cookies.",
                Accept : "Accept"
            }
        },

        pl:{
            translation: {
                greeting: "Witaj!",
                info: "Cześć nazywam się Piotr Chodkowski. Jestem Web Developerem z Warszawy 📍",
                about: "O mnie",
                aboutMid1: "Web Developer,",
                aboutMid2 : "z Warszawy 📍",
                aboutBot : "Jako deweloper bardzo lubię tworzyć i projektować responsywne strony i aplikacje internetowe. Mam doświadczenie z HTML, CSS, JavaScript, React.js, Django, RESTful API oraz MySQL. Zawszę dążę do pisania czystego i optymalnego kodu.",
                contact1: "Skontaktuj się ze mną",
                contact2: "Temat",
                contact3: "Wiadomość",
                contact4: "Wyślij",
                Copyright: "Copyright © 2024. Wszelkie prawa zastrzeżone.",
                Cookies: "Używamy ciasteczek by uwydajnić twoje doświadczenia. Używając tej strony wyrażasz zgodę na korzystanie z ciasteczek.",
                Accept : "Akceptuję"
            }
        }
    }

})