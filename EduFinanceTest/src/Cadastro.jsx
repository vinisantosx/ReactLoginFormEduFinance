import React from "react";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;

    // Validação básica
    if (!name || !email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor, insira um email válido.");
      return;
    }

    if (password.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    alert(
      `Cadastro realizado!\nNome: ${name}\nEmail: ${email}\nSenha: ${'  ******'}`
    );

    // Resetar campos
    setState({ name: "", email: "", password: "" });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Criar Conta</h1>
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
        <span>ou use seu email para se registrar</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Senha"
        />
        <a href="Login.jsx">Já Possui uma conta? Faça login</a>
        <button type="submit">Cadastre-se</button>
      </form>
    </div>
  );
}

export default SignUpForm;
