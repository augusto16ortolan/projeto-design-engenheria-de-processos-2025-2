import api from "./api";

export async function getProducts(targetCurrency = "BRL") {
  try {
    return {
      products: [],
      error: null,
    };
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return {
      products: [],
      error: error.message || "Erro ao buscar produtos.",
    };
  }
}

export async function getProductById(id, targetCurrency = "BRL") {
  try {
    return {
      product: null,
      error: null,
    };
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return {
      product: null,
      error: error.message || "Erro ao buscar produto.",
    };
  }
}

export async function createProduct(productToCreate, token) {
  try {
    return {
      product: null,
      error: null,
    };
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return {
      product: null,
      error: error.message || "Erro ao criar produto.",
    };
  }
}

export async function updateProduct(id, productToUpdate, token) {
  try {
    return {
      product: null,
      error: null,
    };
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    return {
      product: null,
      error: error.message || "Erro ao atualizar produto.",
    };
  }
}

export async function deleteProduct(id, token) {
  try {
    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
    return {
      success: false,
      error: error.message || "Erro ao excluir produto.",
    };
  }
}
