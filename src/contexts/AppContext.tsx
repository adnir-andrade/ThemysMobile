import { createContext } from "react";
import { User } from "../types/User";

type AppContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
