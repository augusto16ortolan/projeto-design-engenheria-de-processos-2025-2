export async function login(email, senha) {
  try {
    return {
      user: { nome: "Augusto Ortolan" },
    };
  } catch (error) {
    return {
      error: true,
      message: "Erro ao fazer o login",
    };
  }
}

export async function register(email, senha) {
  try {
    return {
      user: { nome: "Augusto Ortolan" },
    };
  } catch (error) {
    return {
      error: true,
      message: "Erro ao fazer o cadastro",
    };
  }
}
