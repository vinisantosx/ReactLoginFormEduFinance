import React from "react";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  // Função para validar e-mail
  const isValidEmail = email => {
    // Regex básica para e-mail
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;

    if (email, password == "") {
      alert("Por favor, preencha os campos de E-mail e Senha!");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Por favor, insira um e-mail válido!");
      return;
    }

    alert(`Login realizado!\nEmail: ${email}\nSenha: ${'******'}`);

    // Limpa os campos
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Entrar</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>ou use sua conta</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Esqueceu sua senha?</a>
        <button>Entrar</button>
      </form>
    </div>
  );
}

export default SignInForm;