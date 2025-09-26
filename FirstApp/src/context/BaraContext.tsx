import { createContext } from "react";

export interface UserContextType {
  barra: string | null;
  setBarra: React.Dispatch<React.SetStateAction<string>>;
}

export const BarraContext = createContext<UserContextType | undefined >(undefined);