import axios from "axios";
import { BASE_URL } from "../constants/variable";

const LoginServiceRequest = axios.create({
  baseURL: BASE_URL,
});

export const postLogin = async (username, password) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  try {
    const response = await LoginServiceRequest.post("/auth/login", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { token } = response.data;

    return { token };
  } catch (error) {
    throw error; 
  }
};
