import { createContext } from "react";
import type { dtoProduct } from "../helpers/Type";

export interface ContextType {
  producto: dtoProduct;
  setproducto: React.Dispatch<React.SetStateAction<string>>;
}

export const DtaContext = createContext<ContextType | undefined >(undefined);