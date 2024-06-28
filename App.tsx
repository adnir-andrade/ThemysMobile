import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { getUsers } from "./src/services/userService";
import { login } from "./src/services/authService";
import Login from "./src/app/Login";

export default function App() {
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetchUsers();
  }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await login("adnir1@alunos.utfpr.edu.br", "bacon123");
  //     const data = await getUsers();
  //     setUsers(data);
  //     console.log(users);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };

  return <Login></Login>;
}
