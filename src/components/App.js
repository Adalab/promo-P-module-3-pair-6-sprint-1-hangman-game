import "../styles/App.scss";

import { useEffect, useState } from "react";
import getWords from "../services/api";

function App() {
  //VARIABLES DE ESTADO

  ///Almacenar la palabra que se deberá adivinar.
  const [word, setWord] = useState("");

  ///Almacenar las letras que introduce la jugadora
  // const [userLetters, setUserLetters] = useState([]);

  ///Almacenar la última letra introducida por la jugadora.
  const [lastLetter, setlastLetter] = useState("");

  //Effect

  useEffect(() => {
    getWords().then((data) => {
      setWord(data);
    });
  }, []);

  console.log(word);

  const handleInputLastLetter = (ev) => {
    const newValue = ev.target.value;

    if (newValue.match("[a-zA-ZñÑ]") !== null) {
      setlastLetter(newValue);
    } else {
      setlastLetter("");
    }
    console.log(newValue);
  };

  const handleSubmit = (ev) => {
    // Aquí detenemos el envío del formulario
    ev.preventDefault();
    // Aquí enviamos los datos al servidor con un fetch o lo que sea
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>

          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleInputLastLetter}
              value={lastLetter}
            />
          </form>
        </section>
        <section className="dummy error-5">
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
