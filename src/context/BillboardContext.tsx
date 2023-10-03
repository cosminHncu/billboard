import React, { createContext, useContext, useState } from "react";

interface BillboardCtxType {
  billboardTxt: string;
  setBillboardTxt: any;
  textLength: any;
  setTextLength: any;
  lightMode: boolean;
  setLightMode: any;
  inputText: string;
  setInputText: any;
}

const BillboardContext = createContext<BillboardCtxType | undefined>(undefined);

export const useBillboardContext: any = () => {
  const context = useContext(BillboardContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

interface BillboardContextProviderProps {
  children: React.ReactNode;
}

export const BillboardCtxProvider: React.FC<BillboardContextProviderProps> = ({
  children,
}) => {
  const [billboardTxt, setBillboardTxt] = useState("");
  const [textLength, setTextLength] = useState(null);
  const [lightMode, setLightMode] = useState(false);
  const [inputText, setInputText] = useState("");
  const value: BillboardCtxType = {
    billboardTxt,
    lightMode,
    textLength,
    inputText,
    setInputText,
    setLightMode,
    setBillboardTxt,
    setTextLength,
  };

  return (
    <BillboardContext.Provider value={value}>
      {children}
    </BillboardContext.Provider>
  );
};
