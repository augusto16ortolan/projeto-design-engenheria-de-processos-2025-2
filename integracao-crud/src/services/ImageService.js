import axios from "axios";

export async function uploadImage(image) {
  const cloudName = "dxufykpdp"; // Ambiente
  const uploadPreset = "atitus"; // Pasta
  const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  if (!image || !image.base64) {
    return {
      imageUrl: null,
      error: "Imagem inválida ou ausente para upload.",
    };
  }

  const data = new FormData();
  data.append("file", `data:image/jpeg;base64,${image.base64}`);
  data.append("upload_preset", uploadPreset);

  try {
    const response = await axios.post(apiUrl, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (!response.data?.secure_url) {
      throw new Error("Falha ao obter URL da imagem no Cloudinary.");
    }

    console.log("Upload concluído:", response.data.secure_url);

    return {
      imageUrl: response.data.secure_url,
      error: null,
    };
  } catch (error) {
    console.error(
      "Erro ao fazer upload da imagem:",
      error.response?.data || error.message
    );
    return {
      imageUrl: null,
      error:
        error.response?.data?.error?.message ||
        error.message ||
        "Erro desconhecido ao enviar imagem.",
    };
  }
}
