import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./Login";
import SignUpForm from "./Cadastro";
import ForgotPassword from "./EsqueceuSenha"; // 👈 novo import
import Coruja from "./assets/Coruja1.png";
import Coruja3 from "./assets/Coruja3.png";

export default function App() {
  const [view, setView] = useState("auth"); // "welcome", "auth", "forgot"
  const [type, setType] = useState("Entrar");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  // 👉 renderização condicional
  if (view === "forgot") {
    return <EsqueceuSenha onBack={() => setView("auth")} />;
  }

  const containerClass =
    "container " + (type === "Cadastre-se" ? "right-panel-active" : "");

  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm onForgotPassword={() => setView("forgot")} />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
               <img 
                    src={Coruja3}  
                  alt="Logo Edu Finance" 
                style={{ width: "180px", marginBottom: "0px" }} 
  />
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
                <img 
                    src={Coruja}  
                  alt="Logo Edu Finance" 
                style={{ width: "100px", marginBottom: "0px" }} 
  />
              <h1>Seja bem-vindo a Edu Finance</h1>
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
