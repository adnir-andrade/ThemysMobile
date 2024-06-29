import AppContext from "./src/contexts/AppContext";
import Login from "./src/app/Login";
import SelectCharacter from "./src/app/SelectCharacter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { User } from "./src/types/User";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    email: "",
    role: "",
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Select a Character" component={SelectCharacter} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
