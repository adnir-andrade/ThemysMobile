import { getToken, saveToken } from "../utils/secureStore";
import api from "./api";

export const login = async (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await api.post("/login", data);
    saveToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export async function getHeader() {
  const token = await getToken();
  if (token) {
    return {
      headers: {
        Authorization: token,
      },
    };
  } else {
    throw new Error("No token found");
  }
}
