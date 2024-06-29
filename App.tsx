import AppContext from "./src/contexts/AppContext";
import Login from "./src/app/Login/Login";
import SelectCharacter from "./src/app/SelectCharacter/SelectCharacter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { User } from "./src/types/User";
import ViewCharacter from "./src/app/ViewCharacter/ViewCharacter";
import { RootStackParamList } from "./src/types/Navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
          <Stack.Screen name="SelectCharacter" component={SelectCharacter} />
          <Stack.Screen name="ViewCharacter" component={ViewCharacter} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
