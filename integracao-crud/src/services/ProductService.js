import api from "./api";

export async function getProducts(targetCurrency = "BRL") {
  try {
    const response = await api.get(`/products/${targetCurrency}?size=40`);

    if (response.status != 200) {
      return {
        products: [],
        error: "Erro ao buscar produtos.",
      };
    }

    return {
      products: response.data.content,
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
    const response = await api.get(`/products/${id}/${targetCurrency}`);

    if (response.status != 200) {
      return {
        products: [],
        error: "Erro ao buscar o produto.",
      };
    }

    return {
      product: response.data,
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
    const response = await api.post("/ws/products", productToCreate, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status != 201) {
      return {
        product: null,
        error: "Erro ao criar produto.",
      };
    }

    return {
      product: response.data,
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
    const response = await api.put(`/ws/products/${id}`, productToUpdate, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status != 201) {
      return {
        product: null,
        error: "Erro ao editar produto.",
      };
    }

    return {
      product: response.data,
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
    const response = await api.delete(`/ws/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
