import i18n from "i18next";
//IMPORTAR PARA QUE SEA AUTODECTABLE EN FUNCION DEL BROWSER
import LanguageDetector from "i18next-browser-languagedetector";
//IMPORTAR PLUGIN PARA LLEVAR LAS TRADUCCIONES A ARCHIVOS
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

//Inicializar la librearia pasandole los plugins
//Metodo init nos permite pasarle un objeto para la configuración
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "es",
});

//   .init({
//     //IDIOMA
//     //lng: "es",
//     //IDIOMA POR DEFECTO
//     fallbackLng: "es",
//     //IDIOMAS QUE VA A CONTENER LA APP
//     resources: {
//       es: {
//         translation: {
//           //POSIBILIDAD DE ANIDAR EN COMPONENTES
//           app: {
//             title: "Bienvenidos a React <strong>{{name}}</strong>",
//           },
//           //INTRODUCIR VARIABLES CON ETIQUETAS
//           //title: "Bienvenidos a React <strong>{{name}}</strong>",
//         },
//       },
//       en: {
//         translation: {
//           app: {
//             title: "Welcome to React <strong>{{name}}</strong>",
//           },
//           //title: "Welcome to React <strong>{{name}}</strong>",
//         },
//       },
//     },
//  });
