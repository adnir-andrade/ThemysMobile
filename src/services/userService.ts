import { User } from "../types/user";
import api from "./api";
import { getHeader } from "./authService";

export const getUsers = async () => {
  try {
    const authHeader = await getHeader();
    const response = await api.get("/users", authHeader);

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.get(`/users/${id}`, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const createUser = async (userData: User) => {
  try {
    const authHeader = await getHeader();
    const response = await api.post("/users", userData, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const editUser = async (userData: User, id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.put(`/users/${id}`, userData, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error editing user:", error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.delete(`/users/${id}`, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
