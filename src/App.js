import logo from "./logo.svg";
//IMPORTAR EL HOOK
import { useTranslation } from "react-i18next";
import "./App.css";
import { Suspense } from "react";

//NOS LLEVAMOS LA FUNCION FUERA
function Welcome() {
  //OBJETO Q TIENE LA FUNCION T QUE ES LA Q PERMITE TRADUCIR COSAS
  //EL OBJETO i18n TIENE DOS PROPIEDADES -> Language (para saber el lenguaje actual q se esta utilizando)
  // -> ChangeLanguage (cambio de idioma)
  //['welcome'] --> A que archivo debe acceder
  const { t, i18n } = useTranslation(["welcome"]);

  //FUNCION PARA CAMBIAR A INGLES
  function changeLanguage() {
    i18n.changeLanguage("en");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* LLAMADA AL METODO PARA TRADUCIR, DESPUES DE LA COMA VARIABLE*/}
        <p>{t("title", { name: "David" })}</p>
        {/* UTILIZAR ETIQUETAS  DENTRO DE LA TRADUCCION (INTERPRETAR HTML)*/}
        <p
          dangerouslySetInnerHTML={{
            __html: t("title", { name: "David" }),
          }}
        />
        {/* OBTENER EL IDIOMA ACTUAL */}
        <p>Idioma actual: {i18n.language} </p>

        <button onClick={changeLanguage}>Cambiar a ingles</button>
      </header>
    </div>
  );
}

//UTILIZAMOS SUSPENSE
function App() {
  return (
    <Suspense fallback="Cargando traducciones...">
      <Welcome />
    </Suspense>
  );
}

export default App;
