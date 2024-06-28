import { createContext } from "react";

type AppContextType = {
  isEnabled: boolean;
  toggleSwitch: () => void;
  backgroundColor: string;
  textColor: string;
};

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
