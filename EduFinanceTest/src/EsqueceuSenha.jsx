import React, { useState } from "react";
import "./styles.css";

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Um link de recuperação foi enviado para: ${email}`);
    // Aqui futuramente você pode integrar com Firebase/Auth ou API
  };

  return (
    <div className="forgot-container">
      <h1>Recuperar senha</h1>
      <p>Digite seu e-mail para receber as instruções de redefinição.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-submit">
          Enviar link
        </button>
      </form>

      <button className="btn-back" onClick={onBack}>
        Voltar ao login
      </button>
    </div>
  );
}
