import AppContext from "./src/contexts/AppContext";
import Login from "./src/app/Login";
import SelectCharacter from "./src/app/SelectCharacter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppContext.Provider value={""}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Select a Character" component={SelectCharacter} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
