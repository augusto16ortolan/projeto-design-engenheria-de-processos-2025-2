import supabase from "../config/supabase";

export async function buscarProdutos(userId) {
  try {
    let { data: produtos, error } = await supabase
      .from("produtos")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      return {
        error: true,
        message: error.message,
      };
    }

    return {
      produtos: produtos.map((produto) => {
        return {
          id: produto.id,
          description: produto.nome,
          quantity: produto.qtd,
          value: produto.valor,
          image: produto.image_url,
        };
      }),
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
}

export async function criarProduto({ nome, valor, qtd, image, userId }) {
  try {
    const { data, error } = await supabase
      .from("produtos")
      .insert([{ nome, valor, qtd, image_url: image, user_id: userId }])
      .select();

    if (error) {
      return {
        error: true,
        message: error.message,
      };
    }

    return {
      produto: data,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
}

export async function atualizarProduto(
  id,
  { nome, valor, qtd, image, userId }
) {
  try {
    const { data, error } = await supabase
      .from("produtos")
      .update({ nome, valor, qtd, image_url: image, user_id: userId })
      .eq("id", id)
      .eq("user_id", userId)
      .select();

    console.log(error);

    if (error) {
      return {
        error: true,
        message: error.message,
      };
    }

    return {
      produto: data,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
}

export async function deletarProduto(id, userId) {
  try {
    const { error } = await supabase
      .from("produtos")
      .delete()
      .eq("id", id)
      .eq("user_id", userId);

    if (error) {
      return {
        error: true,
        message: error.message,
      };
    }

    return {};
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
}
