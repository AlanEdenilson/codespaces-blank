import { createContext } from "react";


export interface ContextType {
  eliminar:true|false;
  setEliminar: React.Dispatch<React.SetStateAction<true|false>>;
}

export const BorrarContext = createContext<ContextType|null>(null);