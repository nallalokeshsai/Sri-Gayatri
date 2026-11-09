import { createContext, useContext } from "react";

export interface LayoutContextType {
  openAdmissionModal: (stream?: string, branch?: string) => void;
}

export const LayoutContext = createContext<LayoutContextType>({
  openAdmissionModal: () => {},
});

export const useLayout = () => useContext(LayoutContext);

