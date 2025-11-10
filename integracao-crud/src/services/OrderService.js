import api from "./api";

export async function createOrder(productList, token) {
  try {
    return {
      order: null,
      error: null,
    };
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    return {
      order: null,
      error: error.message || "Erro ao criar pedido.",
    };
  }
}

export async function getOrders(token, currency = "BRL", pageToLoad = 0) {
  try {
    return {
      orders: [],
      error: null,
    };
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    return {
      orders: [],
      error: error.message || "Erro ao buscar pedidos.",
    };
  }
}
