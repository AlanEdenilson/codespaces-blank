import { createContext } from "react";
import type { dtoProductu } from "../helpers/Type";

export interface ContextType {
  update: dtoProductu|0;
  setUpdate: React.Dispatch<React.SetStateAction<dtoProductu|0>>;
}

export const DtaContext = createContext<ContextType | undefined >(undefined);