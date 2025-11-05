import api from "./api.js";

export async function login(email, senha) {
  try {
    const response = await api.post("/auth/signin", {
      email,
      password: senha,
    });

    const data = response.data;

    return {
      user: data.user,
      token: data.token,
      error: false,
    };
  } catch (error) {
    console.log(error.response.data);
    return {
      error: true,
      message: "Erro ao fazer o login",
    };
  }
}

export async function register({ name, email, password }) {
  try {
    await api.post("/auth/signup", {
      name,
      email,
      password,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log(error.response.data);
    return {
      error: true,
      message: "Erro ao fazer o cadastro",
    };
  }
}
