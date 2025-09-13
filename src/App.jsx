import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./Login";
import SignUpForm from "./Cadastro";
import Boasvindas from "./Boasvindas";

export default function App() {
  const [view, setView] = useState("welcome"); // "welcome", "auth"
  const [type, setType] = useState("Entrar"); // "Entrar" ou "Cadastre-se" (para overlay)

  const handleEnter = () => setView("auth"); // ao clicar em começar na tela de boas-vindas
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  if (view === "welcome") {
    return <Boasvindas onEnter={handleEnter} />;
  }

  // Tela de login/cadastro com overlay
  const containerClass = "container " + (type === "Cadastre-se" ? "right-panel-active" : "");

  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bem-vindo de volta!</h1>
              <p>Para continuar conectado conosco, faça login com suas informações</p>
              <button
                className="ghost"
                id="Entrar"
                onClick={() => handleOnClick("Entrar")}
              >
                Entrar
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Olá, amigo!</h1>
              <p>Entre com seu e-mail e comece sua jornada conosco</p>
              <button
                className="ghost"
                id="Cadastre-se"
                onClick={() => handleOnClick("Cadastre-se")}
              >
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
