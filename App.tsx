import AppContext from "./src/contexts/AppContext";
import Login from "./src/app/Login/Login";
import SelectCharacter from "./src/app/SelectCharacter/SelectCharacter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { User } from "./src/types/User";
import ViewCharacter from "./src/app/ViewCharacter/ViewCharacter";
import { RootStackParamList } from "./src/types/Navigation";
import CreateCharacter from "./src/app/CreateCharacter/CreateCharacter";
import EditCharacter from "./src/app/EditCharacter/EditCharacter";
import Profile from "./src/app/Profile/Profile";
import SelectCampaign from "./src/app/SelectCampaign/SelectCampaign";
import ViewCampaign from "./src/app/ViewCampaign/ViewCampaign";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [user, setUser] = useState<User>({
    name: "",
    username: "",
    email: "",
    role: "",
    profile_url: "",
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SelectCharacter" component={SelectCharacter} />
          <Stack.Screen name="ViewCharacter" component={ViewCharacter} />
          <Stack.Screen name="CreateCharacter" component={CreateCharacter} />
          <Stack.Screen name="EditCharacter" component={EditCharacter} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="SelectCampaign" component={SelectCampaign} />
          <Stack.Screen name="ViewCampaign" component={ViewCampaign} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
